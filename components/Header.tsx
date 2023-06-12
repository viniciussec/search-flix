import { View, Text } from "react-native";

export default function Header() {
  return (
    <View className="z-20 p-5 border-b-2 border-b-[#323B45] w-full absolute top-12">
      <View className="flex-row">
        <Text className="inline text-4xl color-white">Search</Text>
        <Text className="color-[#F02D4C] text-4xl">Flix</Text>
      </View>
      <Text className="text-lg text-gray-400">Principais Recomendações</Text>
    </View>
  );
}
