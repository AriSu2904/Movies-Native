import React from "react";
import { SafeAreaView, Image, Text, TouchableOpacity } from "react-native";
import { BASE_IMG500_URL } from "../constant/api";
import { styles } from "../themes/RootColor";

export default function DiscoverMovie({ movies, onSelectedMovie }) {
  console.log(movies.id);

  return (
    <SafeAreaView className="px-8">
      {movies.map((item) => (
        <TouchableOpacity
          key={item.id}
          className="mb-10"
          onPress={() => onSelectedMovie(item.id)}
        >
          <Image
            className="w-full p-6 h-52"
            style={{ borderRadius: 8 }}
            source={{ uri: `${BASE_IMG500_URL}/${item.poster_path}` }}
          />
          <Text className="mt-2 text-center text-white text-lg">
            {item.title}
          </Text>
          <Text className="text-center italic" style={styles.text}>Click For Detail</Text>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
}
