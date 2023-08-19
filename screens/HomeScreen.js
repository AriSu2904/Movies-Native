import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigator = useNavigation();

  return (
    
    <ImageBackground source={require('../assets/images/home_screen.png')} className="w-full h-full">

    <View className="flex-1">
      <SafeAreaView>
        <View className="items-center mx-4 mt-12">
          <Text className="text-white text-6xl font-bold mt-4">
            <Text className="text-green-500">M</Text>
            ovies
          </Text>
        </View>
      </SafeAreaView>

      {/* Menu */}
      <View className="flex-1 justify-center items-center -mt-7">
        <TouchableOpacity
          onPress={() => navigator.navigate("Genre")}
        >
          <Text className="text-white bg-slate-800 text-3xl w-full text-center px-12 py-3 rounded-full font-semibold">
            List
            <Text> Genre</Text>
          </Text>
        </TouchableOpacity>
       
      </View>
    </View>

    </ImageBackground>
  );
}
