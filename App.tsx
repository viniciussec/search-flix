import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="items-center justify-center flex-1 w-full bg-gray-800">
      <View className="justify-center h-40 p-4 bg-white rounded-md">
        <Text className="">Teste</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
