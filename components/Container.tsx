import React from "react";
import {  View } from "react-native";
import Footer from "./Footer";
import { StatusBar } from "expo-status-bar";

type Props = {
  children: React.ReactNode;
};

export default function Container({ children }: Props) {
  return (
    <View className="flex flex-col items-center h-full bg-gray-800">
      <View className="flex-1 w-full">{children}</View>
      <Footer />
      <StatusBar style="auto" />
    </View>
  );
}
