import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import GenreScreen from "../screens/GenreScreen";
import DiscoverMoviesScreen from "../screens/DiscoverMoviesScreen";
import MovieDetailScreen from "../screens/MovieDetailScreen";
import ReviewListScreen from "../screens/ReviewScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Genre"
          options={{ headerShown: false }}
          component={GenreScreen}
        />
        <Stack.Screen
          name="DiscoverMovie"
          options={{ headerShown: false }}
          component={DiscoverMoviesScreen}
        />
        <Stack.Screen
          name="MovieDetail"
          options={{ headerShown: false }}
          component={MovieDetailScreen}
        />
        <Stack.Screen
          name="Reviews"
          options={{ headerShown: false }}
          component={ReviewListScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
