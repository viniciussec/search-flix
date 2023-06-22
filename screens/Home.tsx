import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import API from "../services/api";
import { Movie } from "../types/Movie";

export default function App() {
  // const data = [
  //   {
  //     id: 1,
  //     title: "Velozes e Furiosos 10",
  //     date: "17 de mai de 2023",
  //     rating: 74,
  //     image:
  //       "https://www.themoviedb.org/t/p/w220_and_h330_face/nxrmpkwVdmiVAiRTqSSC2SateN2.jpg",
  //   },
  //   {
  //     id: 2,
  //     title: "Homem-Aranha: Através do Aranhaverso",
  //     date: "31 de mai de 2023",
  //     rating: 88,
  //     image:
  //       "https://www.themoviedb.org/t/p/w220_and_h330_face/6a7NItazspSV8Fl7u46ccxwPKk4.jpg",
  //   },
  // ];

  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function loadData() {
      const response = await API.get("discover/movie");

      setMovies(response.data.results);
    }

    loadData();
  });

  return (
    <SafeAreaView className="items-center justify-center flex-1 w-full bg-[#0F1923]">
      {/* <Header /> */}
      <ScrollView>
        <View className="items-center justify-center space-y-10">
          {movies.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </View>
      </ScrollView>
      <Footer />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
