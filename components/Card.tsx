import { Image, Text, TouchableOpacity, View } from "react-native";
import { IMAGE_URL } from "../constants";
import { Movie } from "../types/Movie";

type Props = {
  item: Movie;
};

export default function Card({ item }: Props) {
  return (
    <TouchableOpacity className="mt-4 flex flex-row space-x-4 h-64 border-2 border-[#323B45] rounded-md p-4">
      <Image
        source={{ uri: IMAGE_URL + item.poster_path }}
        className="w-32 h-full"
      />
      <View className="justify-between">
        <View className="w-48">
          <Text className="text-2xl text-white">{item.original_title}</Text>
          <Text className="text-gray-400 text-md">{item.release_date}</Text>
        </View>
        <Text className="text-5xl text-green-500">
          {item.vote_average * 10}%
        </Text>
      </View>
    </TouchableOpacity>
  );
}
