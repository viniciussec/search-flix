import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Header from "./components/Header";
import Info from "./screens/Info";
import Search from "./screens/Search";
import MovieDetails from "./screens/MovieDetails";

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  Search: undefined;
  Info: undefined;
  MovieDetails: { movieId: number };
};

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
        <Stack.Screen
          name="MovieDetails"
          component={MovieDetails}
          options={{ header: () => <Header /> }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
