import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../themes/RootColor";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigator = useNavigation();

  return (
    <View className="flex-1 bg-neutral-900">
      <SafeAreaView className="mb-3">
        <View className="flex-row justify-between items-center mx-4">
          <Text className="text-white text-2xl font-bold">
            <Text style={styles.text}>M</Text>
            ovies
          </Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon size={25} strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      {/* Menu */}
      <View className="flex-1 justify-center items-center">
        <TouchableOpacity
          className="pb-5"
          onPress={() => navigator.navigate("Genre")}
        >
          <Text className="text-white bg-neutral-700 text-xl w-full text-center px-7 py-2 rounded-full font-semibold">
            List
            <Text style={styles.text}> Genre</Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="pb-5 pt-5">
          <Text className="text-white bg-neutral-700 text-xl w-full text-center px-7 py-2 rounded-full font-semibold">
            <Text style={styles.text2}>Trending </Text>
            Movies
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
