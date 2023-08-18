import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  ScrollView,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import { fetchDiscoverMovies } from "../service/fetchApiService";
import LoadingComponent from "../components/Loading";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { styles } from "../themes/RootColor";
import DiscoverMovie from "../components/DiscoverMovie";

export default function DiscoverMoviesScreen() {
  const route = useRoute();
  const { genreId } = route.params;
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigator = useNavigation();

  const selectedMovie = (movieId) => {
    navigator.navigate("MovieDetail", movieId);
  };

  useEffect(() => {
    getMoviesByGenre(genreId);
  }, [genreId]);

  const getMoviesByGenre = async (genreId) => {
    const data = await fetchDiscoverMovies(genreId);
    if (data) setMovies(data);

    setLoading(false);
  };

  const renderMovies = () => {
    if (loading) {
      return <LoadingComponent />;
    }

    return (
      
      <View className="flex-1 bg-zinc-900">
        <SafeAreaView className="flex-row items-center m-5 pt-6">
          <TouchableOpacity
            style={styles.background}
            className="rounded-xl p-1"
            onPress={() => navigator.goBack()}
          >
            <ChevronLeftIcon size={28} strokeWidth={3} color="black" />
          </TouchableOpacity>
          <Text className="text-white text-2xl font-semibold ml-2">
                Ba
            <Text style={styles.text}>ck</Text>
          </Text>
        </SafeAreaView>


        {
          loading ? ( <LoadingComponent /> ) : (
            <ScrollView showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 5}}>
              <DiscoverMovie movies={movies} onSelectedMovie={selectedMovie}/>
            </ScrollView>
          )
        }

    </View>
    );
  };

  return renderMovies();
}
