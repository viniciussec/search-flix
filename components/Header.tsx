import { View, Text, StatusBar } from "react-native";

export default function Header() {
  return (
    <View className="bg-[#0F1923]">
      <StatusBar translucent backgroundColor="transparent" />
      <View
        style={{ marginTop: StatusBar.currentHeight }}
        className="border-b-2 border-b-[#323B45] bg-[#0F1923] w-full px-5 justify-end pb-2"
      >
        <View className="flex-row">
          <Text className="inline text-4xl color-white">Search</Text>
          <Text className="color-[#F02D4C] text-4xl">Flix</Text>
        </View>
        <Text className="text-lg text-gray-400">Principais Recomendações</Text>
      </View>
    </View>
  );
}
