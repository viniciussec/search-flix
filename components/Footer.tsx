import { TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import React from "react";

export default function Footer() {
  return (
    <View className="bg-[#0F1923] z-20 p-5 border-t-2 border-t-[#323B45] w-full absolute bottom-0 flex-row justify-between">
      <TouchableOpacity>
        <Feather name="book" size={40} color="white" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Entypo name="magnifying-glass" size={40} color="white" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Feather name="info" size={40} color="white" />
      </TouchableOpacity>
    </View>
  );
}
