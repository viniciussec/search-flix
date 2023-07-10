import React, { Ref, useEffect, useRef, useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Container from "../components/Container";
import Modal from "react-native-modal";
import { Entypo } from "@expo/vector-icons";
import { Movie } from "../types/Movie";
import API from "../services/api";
import MovieCard from "../components/MovieCard";
import { Genre } from "../types/Genre";
import SelectDropdown from "react-native-select-dropdown";

type OrderingMode = null | "vote_average" | "views" | "release_date";

export default function Info() {
  const [filterModal, setFilterModal] = useState(false);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [order, setOrder] = useState<OrderingMode>(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasFilter, setHasFilter] = useState(false);

  const [year, setYear] = useState("");
  const [genres, setGenres] = useState<Genre[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const genreDropdownRef = useRef<any>(null);

  function clearAll() {
    setOrder(null);
    setYear("");
    setSelectedGenre(null);
    setHasFilter(false);
    genreDropdownRef?.current?.reset();
  }

  function handleApplyFilters() {
    loadMovies();
    setFilterModal(false);
  }

  async function loadMovies() {
    let url = `search/movie?language=pt-BR&page=1&query=${search}`;
    if (year) url = url + `&primary_release_year=${year}`;
    const response = await API.get(url);
    const filteredMovies = filterMovies(response.data.results);
    setMovies(filteredMovies);
  }
  function loadGenreList() {
    API.get(
      "https://api.themoviedb.org/3/genre/movie/list?language=pt-BR"
    ).then((response) => {
      const genreList: Genre[] = response.data.genres;
      setGenres(genreList);
    });
  }

  function filterMovies(rawMoviesList: Movie[]) {
    let filteredMovies = [...rawMoviesList];
    if (selectedGenre) {
      filteredMovies = filteredMovies.filter((movie) =>
        movie.genre_ids.includes(selectedGenre.id)
      );
    }
    return filteredMovies;
  }

  useEffect(() => {
    loadGenreList();
  }, []);

  return (
    <Container>
      <View className="flex flex-col items-center p-4">
        <View className="flex-row items-center justify-center w-full">
          <TextInput
            placeholder="Digite aqui para procurar"
            className="w-full h-10 px-4 bg-white rounded-3xl"
            onChange={(e) => setSearch(e.nativeEvent.text)}
            onBlur={() => loadMovies()}
          ></TextInput>
          <TouchableOpacity
            onPress={() => loadMovies()}
            className="absolute right-0 items-center justify-center w-12 h-12 bg-red-500 rounded-full"
          >
            <Entypo name="magnifying-glass" size={30} color="white" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => setFilterModal(true)}
          className="flex-row items-center w-full mt-4"
        >
          <Entypo
            name="select-arrows"
            size={30}
            color={hasFilter ? "rgb(34 197 94)" : "white"}
          />
          <Text
            className={
              "text-md " + (hasFilter ? "text-green-500" : "text-white")
            }
          >
            Filtros e ordenação
          </Text>
        </TouchableOpacity>
        {movies.length === 0 && (
          <View className="items-center justify-center mt-10">
            <Text className="text-lg text-white">Sem resultados</Text>
          </View>
        )}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="items-center justify-center mb-20 space-y-10">
            {movies.map((item, index) => (
              <MovieCard key={index} item={item} />
            ))}
          </View>
        </ScrollView>
      </View>
      <Modal
        isVisible={filterModal}
        onBackdropPress={() => setFilterModal(false)}
      >
        <View className="rounded-md bg-[#0F1923] p-5">
          <Text className="mt-1 mb-4 text-xl text-white">Filtros</Text>
          <View className="flex flex-row justify-between w-full space-x-4">
            <View className="flex flex-col flex-1 space-y-4">
              <SelectDropdown
                defaultButtonText="Gênero"
                data={genres}
                ref={genreDropdownRef}
                onSelect={(selectedItem) => {
                  setSelectedGenre(selectedItem);
                  setHasFilter(true);
                }}
                buttonTextAfterSelection={(selectedItem) => selectedItem.name}
                rowTextForSelection={(item) => item.name}
                defaultValue={selectedGenre}
                buttonStyle={{
                  backgroundColor: selectedGenre
                    ? "rgb(22 163 74)"
                    : "rgb(20 83 45)",
                  borderRadius: 30,
                  width: "100%",
                  height: 30,
                }}
                buttonTextStyle={{
                  color: "#fff",
                  fontSize: 14,
                }}
                dropdownStyle={{
                  backgroundColor: "rgb(31 41 55)",
                }}
                rowTextStyle={{
                  color: "#fff",
                }}
              />
              <TextInput
                className={
                  "items-center justify-center w-full px-6 text-white rounded-3xl text-md " +
                  (year ? "bg-green-600" : "bg-green-800")
                }
                placeholder="Ano"
                value={year}
                onChange={(e) => {
                  setYear(e.nativeEvent.text.replace(/[^0-9]/g, ""));
                  setHasFilter(true);
                }}
                keyboardType="numeric"
                placeholderTextColor="#FFF"
                textAlign="center"
              />
            </View>
            <View className="w-0.5 h-full bg-gray-400 rounded-xl"></View>
            <View className="flex flex-col flex-1 w-1/2 space-y-4">
              <TouchableOpacity className="items-center justify-center w-full px-6 py-1 bg-green-600 rounded-3xl">
                <Text className="text-white text-md">Ator</Text>
              </TouchableOpacity>
              <TouchableOpacity className="items-center justify-center w-full px-6 py-1 bg-green-600 rounded-3xl">
                <Text className="text-white text-md">Nome</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text className="my-4 text-xl text-white">Ordenação</Text>
          <View className="items-center space-y-4">
            <TouchableOpacity
              onPress={() => {
                setOrder("vote_average");
                setHasFilter(true);
              }}
              className={
                "items-center justify-center w-1/2 px-4 py-1 rounded-3xl " +
                (order === "vote_average" ? "bg-green-600" : "bg-green-900")
              }
            >
              <Text className="text-white text-md">Nota</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setOrder("views");
                setHasFilter(true);
              }}
              className={
                "items-center justify-center w-1/2 px-4 py-1 rounded-3xl " +
                (order === "views" ? "bg-green-600" : "bg-green-900")
              }
            >
              <Text className="text-white text-md">Visualizações</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setOrder("release_date");
                setHasFilter(true);
              }}
              className={
                "items-center justify-center w-1/2 px-4 py-1 rounded-3xl " +
                (order === "release_date" ? "bg-green-600" : "bg-green-900")
              }
            >
              <Text className="text-white text-md">Lançamento</Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row mt-8 space-x-4">
            <TouchableOpacity
              onPress={() => clearAll()}
              className="items-center justify-center flex-1 px-4 py-1 bg-gray-400 rounded-3xl"
            >
              <Text className="text-lg text-white">Limpar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleApplyFilters()}
              className="items-center justify-center flex-1 px-4 py-1 bg-red-600 rounded-3xl"
            >
              <Text className="text-lg text-white">Aplicar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </Container>
  );
}
