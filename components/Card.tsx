import { Text, View } from "react-native";

export default function Card() {
  return (
    <View className="mt-4 flex flex-row space-x-4 h-64 w-8/12 border-2 border-[#323B45] rounded-md p-4">
      <View className="w-32 h-full bg-gray-200"></View>
      <View className="justify-between">
        <View className="w-full">
          <Text className="text-2xl text-white">Velozes e Furiosos 10</Text>
          <Text className="text-gray-400 text-md">17 de mai de 2023</Text>
        </View>
        <Text className="text-5xl text-green-500">74%</Text>
      </View>
    </View>
  );
}
