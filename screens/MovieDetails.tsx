import { FlatList, Image, ScrollView, Text, View } from "react-native";
import Container from "../components/Container";
import { useEffect, useState } from "react";
import API from "../services/api";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../App";
import { IMAGE_URL } from "../utils/constants";
import { MovieDetailed } from "../types/MovieDetailed";
import { CastMember } from "../types/CastMember";
import CastCard from "../components/CastCard";
import { formatDate } from "../utils/formatDate";

export default function MovieDetails() {
    const [movie, setMovie] = useState<MovieDetailed>()
    const [cast, setCast] = useState<CastMember[]>([])

    const route = useRoute<RouteProp<RootStackParamList, "MovieDetails">>()

    useEffect(function loadMovieData() {
        if (!route.params) return
        API.get(`/movie/${route.params.movieId}?language=pt-BR'`)
            .then((response) => setMovie(response.data))
        API.get(`/movie/${route.params.movieId}/credits?language=pt-BR'`)
            .then((response) => setCast(response.data.cast))
    }, [route.params.movieId])

    function getFormatedRuntime() {
        if (!movie) return ''
        const hours = Math.floor(movie.runtime / 60)
        const minutes = movie.runtime % 60
        return `${hours}h ${minutes}m`
    }

    if (!movie) return <Container><Text>carregando...</Text></Container>

    return (
        <Container>
            <ScrollView>
                <View className="flex flex-row h-64 p-4 mt-4 space-x-4">
                    <Image
                        source={{ uri: IMAGE_URL + movie?.poster_path }}
                        className="w-32 h-full"
                    />
                    <View className="justify-between w-48">
                        <Text className="text-2xl text-white">{movie?.title}</Text>
                        <Text className="text-gray-400 text-md">{formatDate(movie?.release_date)}</Text>
                        <Text className="text-white text-md">{getFormatedRuntime()}</Text>
                        <Text className="text-5xl text-green-500">
                            {Math.round(movie?.vote_average * 10)}%
                        </Text>
                    </View>
                </View>
                <View className="my-2">
                    <FlatList
                        data={movie.genres}
                        renderItem={({ item: genre }) => (
                            <View className="p-1 bg-[#F02D4C] rounded mx-2">
                                <Text className="text-white text-md">
                                    {genre.name}
                                </Text>
                            </View>
                        )}
                        horizontal
                        keyExtractor={genre => String(genre.id)}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <View className="px-2 my-2">
                    <Text className="text-white text-md">
                        {movie.overview}
                    </Text>
                </View>
                <View>
                    <FlatList
                        data={cast}
                        renderItem={({ item: member }) => (
                            <CastCard castMember={member} />
                        )}
                        horizontal
                        keyExtractor={member => String(member.id)}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </ScrollView>
        </Container>
    )
}

