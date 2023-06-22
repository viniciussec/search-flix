import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Header from "./components/Header";
import Info from "./screens/Info";
import Search from "./screens/Search";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ header: () => <Header /> }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{ header: () => <Header /> }}
        />
        <Stack.Screen
          name="Info"
          component={Info}
          options={{ header: () => <Header /> }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
