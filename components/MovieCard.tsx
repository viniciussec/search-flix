import { Image, Text, TouchableOpacity, View } from "react-native";
import { IMAGE_URL } from "../utils/constants";
import { Movie } from "../types/Movie";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { formatDate } from "../utils/formatDate";
import { FontAwesome5 } from "@expo/vector-icons";

type Props = {
  item: Movie;
};

export default function MovieCard({ item }: Props) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  function getVoteColor() {
    if (item.vote_average >= 7) return "text-green-500";
    if (item.vote_average >= 5) return "text-yellow-500";
    return "text-red-500";
  }

  return (
    <TouchableOpacity
      className="mt-4 flex flex-row space-x-4 h-64 border-2 border-[#323B45] rounded-md p-4"
      onPress={() => navigation.navigate("MovieDetails", { movieId: item.id })}
    >
      {item.poster_path ? (
        <Image
          source={{ uri: IMAGE_URL + item.poster_path }}
          className="w-32 h-full"
        />
      ) : (
        <View className="items-center justify-center w-32 h-full bg-gray-500">
          <FontAwesome5 name="image" size={50} color="black" />
        </View>
      )}
      <View className="justify-between">
        <View className="w-48">
          <Text className="text-2xl text-white">{item.title}</Text>
          <Text className="text-gray-400 text-md">
            {formatDate(item.release_date)}
          </Text>
        </View>
        <Text className={"text-5xl " + getVoteColor()}>
          {item.vote_average !== 0 ? Math.round(item.vote_average * 10) : "-"}%
        </Text>
      </View>
    </TouchableOpacity>
  );
}
