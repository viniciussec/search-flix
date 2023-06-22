import { TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function Footer() {
  const route = useRoute();
  const navigation = useNavigation();

  return (
    <View className="bg-[#0F1923] z-20 p-5 border-t-2 border-t-[#323B45] w-full flex-row justify-between">
      <TouchableOpacity onPress={() => navigation.navigate("Home" as never)}>
        <Feather
          name="book"
          size={40}
          color={route.name === "Home" ? "white" : "gray"}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Search" as never)}>
        <Entypo
          name="magnifying-glass"
          size={40}
          color={route.name === "Search" ? "white" : "gray"}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Info" as never)}>
        <Feather
          name="info"
          size={40}
          color={route.name === "Info" ? "white" : "gray"}
        />
      </TouchableOpacity>
    </View>
  );
}
