import { View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import React from 'react';

export default function Footer() {
  return (
    <View className="z-20 p-5 border-t-2 border-t-[#323B45] w-full absolute bottom-0 flex-row justify-between">
      <Feather name="book" size={40} color="white" />
      <Entypo name="magnifying-glass" size={40} color="white" />
      <AntDesign name="user" size={40} color="white" />
    </View>
  );
}
