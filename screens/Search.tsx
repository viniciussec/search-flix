import React, { useEffect, useState } from "react";
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

export default function Info() {
  const [filterModal, setFilterModal] = useState(false);

  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function loadData() {
      const response = await API.get("discover/movie?language=pt-BR'");

      setMovies(response.data.results);
    }

    loadData();
  });

  return (
    <Container>
      <View className="flex flex-col items-center p-4">
        <View className="flex-row items-center justify-center w-full">
          <TextInput
            placeholder="Digite aqui para procurar"
            className="w-full h-10 px-4 bg-white rounded-3xl"
          ></TextInput>
          <TouchableOpacity className="absolute right-0 items-center justify-center w-12 h-12 bg-red-500 rounded-full">
            <Entypo name="magnifying-glass" size={30} color="white" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => setFilterModal(true)}
          className="flex-row items-center w-full mt-4"
        >
          <Entypo name="select-arrows" size={30} color="white" />
          <Text className="text-white text-md">Filtros e ordenação</Text>
        </TouchableOpacity>
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
              <TouchableOpacity className="items-center justify-center w-full px-6 py-1 bg-green-600 rounded-3xl">
                <Text className="text-white text-md">Gênero</Text>
              </TouchableOpacity>
              <TouchableOpacity className="items-center justify-center w-full px-6 py-1 bg-green-600 rounded-3xl">
                <Text className="text-white text-md">Faixa etária</Text>
              </TouchableOpacity>
              <TouchableOpacity className="items-center justify-center w-full px-6 py-1 bg-green-600 rounded-3xl">
                <Text className="text-white text-md">Classificação</Text>
              </TouchableOpacity>
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

          {/* <View className="w-full h-0.5 my-6 bg-gray-400 rounded-md"></View> */}

          <Text className="my-4 text-xl text-white">Ordenação</Text>
          <View className="items-center space-y-4">
            <TouchableOpacity className="items-center justify-center w-1/2 px-4 py-1 bg-green-600 rounded-3xl">
              <Text className="text-white text-md">Nota</Text>
            </TouchableOpacity>
            <TouchableOpacity className="items-center justify-center w-1/2 px-4 py-1 bg-green-600 rounded-3xl">
              <Text className="text-white text-md">Visualizações</Text>
            </TouchableOpacity>
            <TouchableOpacity className="items-center justify-center w-1/2 px-4 py-1 bg-green-600 rounded-3xl">
              <Text className="text-white text-md">Lançamento</Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row mt-8 space-x-4">
            <TouchableOpacity className="items-center justify-center flex-1 px-4 py-1 bg-gray-400 rounded-3xl">
              <Text className="text-lg text-white">Limpar</Text>
            </TouchableOpacity>
            <TouchableOpacity className="items-center justify-center flex-1 px-4 py-1 bg-red-600 rounded-3xl">
              <Text className="text-lg text-white">Aplicar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </Container>
  );
}
