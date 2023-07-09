import { ScrollView, View } from "react-native";
import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";
import API from "../services/api";
import { Movie } from "../types/Movie";
import Container from "../components/Container";

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function loadData() {
      const response = await API.get("discover/movie?language=pt-BR'");

      setMovies(response.data.results);
    }

    loadData();
  }, []);

  return (
    <Container>
      <View className="items-center justify-center flex-1 w-full bg-[#0F1923]">
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="items-center justify-center space-y-10">
            {movies.map((item, index) => (
              <MovieCard key={index} item={item} />
            ))}
          </View>
        </ScrollView>
      </View>
    </Container>
  );
}
