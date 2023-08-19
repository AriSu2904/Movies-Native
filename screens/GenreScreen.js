import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../themes/RootColor";
import { useNavigation } from "@react-navigation/native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import GenreList from "../components/GenreList";
import { fetchMoviesGenre } from "../service/fetchApiService";
import LoadingComponent from "../components/Loading";

export default function GenreScreen() {
  const [loading, setLoading] = useState(true);
  const [genres, setGenres] = useState([]);
  const navigator = useNavigation();

  const getGenreMovies = async () => {
    const data = await fetchMoviesGenre();
    if (data) setGenres(data);

    setLoading(false);
  };

  const selectedGenre = (genreId) => {
    navigator.navigate("DiscoverMovie", { genreId });
  };

  useEffect(() => {
    getGenreMovies();
  }, []);

  return (
    <View className="flex-1 bg-zinc-900">
      <SafeAreaView className="flex-row justify-between items-center m-5">
        <TouchableOpacity
          style={styles.background}
          className="rounded-xl p-1"
          onPress={() => navigator.goBack()}
        >
          <ChevronLeftIcon size={28} strokeWidth={3} color="black" />
        </TouchableOpacity>
        <Text className="text-white text-2xl font-semibold pt-2">
          <Text style={styles.text}>G</Text>
          enres
        </Text>
      </SafeAreaView>

      {loading ? (
        <LoadingComponent />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 5 }}
        >
          <GenreList data={genres} onSelectGenre={selectedGenre} />
        </ScrollView>
      )}
    </View>
  );
}
