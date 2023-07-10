import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../App";
import Container from "../components/Container";
import { useEffect, useState } from "react";
import { Movie } from "../types/Movie";
import API from "../services/api";
import { View, Text, Image, ScrollView } from "react-native";
import { IMAGE_URL } from "../utils/constants";
import MovieCard from "../components/MovieCard";

export default function PersonDetails() {
    const route = useRoute<RouteProp<RootStackParamList, "PersonDetails">>()
    const [movies, setMovies] = useState<Movie[]>([])

    useEffect(function loadMovies() {
        API.get(`https://api.themoviedb.org/3/person/${route.params.person.id}/movie_credits`)
            .then((response) => setMovies(response.data.cast))
    }, [route.params.person])

    return (
        <Container>
            <View className="flex flex-row h-36 px-4 pb-2 mt-4 space-x-4">
                <Image
                    source={{ uri: IMAGE_URL + route.params.person.profile_path }}
                    className="w-32 h-full"
                />
                <View className="justify-between w-48">
                    <Text className="text-2xl text-white">
                        {route.params.person.name}
                    </Text>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View className="items-center justify-center mb-20 space-y-10">
                    {movies.map((item, index) => (
                        <MovieCard key={index} item={item} />
                    ))}
                </View>
            </ScrollView>
        </Container>
    )
}