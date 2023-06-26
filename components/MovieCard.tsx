import { Image, Text, TouchableOpacity, View } from "react-native";
import { IMAGE_URL } from "../utils/constants";
import { Movie } from "../types/Movie";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { formatDate } from "../utils/formatDate";

type Props = {
  item: Movie;
};

export default function MovieCard({ item }: Props) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      className="mt-4 flex flex-row space-x-4 h-64 border-2 border-[#323B45] rounded-md p-4"
      onPress={() => navigation.navigate("MovieDetails", { movieId: item.id })}
    >
      <Image
        source={{ uri: IMAGE_URL + item.poster_path }}
        className="w-32 h-full"
      />
      <View className="justify-between">
        <View className="w-48">
          <Text className="text-2xl text-white">{item.original_title}</Text>
          <Text className="text-gray-400 text-md">
            {formatDate(item.release_date)}
          </Text>
        </View>
        <Text className="text-5xl text-green-500">
          {item.vote_average * 10}%
        </Text>
      </View>
    </TouchableOpacity>
  );
}
