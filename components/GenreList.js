import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function GenreList ({ data, onSelectGenre }) {
  return (
      <View className="flex justify-between px-7 my-1 pb-3">
        {data.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => onSelectGenre(item.id)}
            className="bg-indigo-400 p-3 my-2 rounded-xl"
          >
            <Text className="text-center font-semibold text-lg">{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
  );
};

