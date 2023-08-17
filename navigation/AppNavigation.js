import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import GenreScreen from '../screens/GenreScreen';
import DiscoverMoviesScreen from '../screens/DiscoverMoviesScreen';

const Stack = createNativeStackNavigator()

export default function AppNavigation(){
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Home' options={{headerShown: false}} component={HomeScreen} />
            <Stack.Screen name='Genre' options={{headerShown: false}} component={GenreScreen} />
            <Stack.Screen name='DiscoverMovie' options={{headerShown: false}} component={DiscoverMoviesScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}