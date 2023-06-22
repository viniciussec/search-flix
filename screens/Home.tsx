import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import API from "../services/api";
import { Movie } from "../types/Movie";
import Container from "../components/Container";

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function loadData() {
      const response = await API.get("discover/movie");

      setMovies(response.data.results);
    }

    loadData();
  });

  return (
    <Container>
      <View className="items-center justify-center flex-1 w-full bg-[#0F1923]">
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="items-center justify-center space-y-10">
            {movies.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </View>
        </ScrollView>
      </View>
    </Container>
  );
}
