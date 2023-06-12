import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";

export default function App() {
  return (
    <SafeAreaView className="items-center justify-center flex-1 w-full bg-[#0F1923]">
      <Header />
      <View className="items-center justify-center h-full">
        <Card />
        <Card />
      </View>
      <Footer />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
