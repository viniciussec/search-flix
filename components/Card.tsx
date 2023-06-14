import { Image, Text, TouchableOpacity, View } from "react-native";

type Props = {
  item: {
    id: number;
    title: string;
    date: string;
    rating: number;
    image: string;
  };
};

export default function Card({ item }: Props) {
  return (
    <TouchableOpacity className="mt-4 flex flex-row space-x-4 h-64 border-2 border-[#323B45] rounded-md p-4">
      <Image source={{ uri: item.image }} className="w-32 h-full" />
      <View className="justify-between">
        <View className="w-48">
          <Text className="text-2xl text-white">{item.title}</Text>
          <Text className="text-gray-400 text-md">{item.date}</Text>
        </View>
        <Text className="text-5xl text-green-500">{item.rating}%</Text>
      </View>
    </TouchableOpacity>
  );
}
