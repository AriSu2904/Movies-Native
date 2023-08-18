import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ScrollView, View, SafeAreaView, TouchableOpacity, Text } from "react-native";
import { styles } from "../themes/RootColor";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import {
  fetchMovieDetails,
  fetchTrailerMovie,
} from "../service/fetchApiService";
import LoadingComponent from "../components/Loading";
import MovieDetail from "../components/MovieDetail";
import YoutubeTrailer from "../components/MovieTrailer";

export default function MovieDetailScreen() {
  const navigation = useNavigation();
  const { params: movieId } = useRoute();
  const [movieDetail, setMovieDetail] = useState([]);
  const [movieTrailer, setMovieTrailer] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMovieDetails = async (movieId) => {
    const result = await fetchMovieDetails(movieId);
    if (result) setMovieDetail(result);
    setLoading(false);
  };

  const getMovieTrailer = async (movieId) => {
    const result = await fetchTrailerMovie(movieId);
    if (result) setMovieTrailer(result);
  };

  useEffect(() => {
    getMovieDetails(movieId);
    getMovieTrailer(movieId);
  }, [movieId]);

  return (
    <View
      contentContainerStyle={{ paddingBottom: 20 }}
      className="flex-1 bg-neutral-900"
    >
      <View className="w-full">
        <SafeAreaView
          className={
            "absolute z-20 w-full flex-row justify-between items-center px-4 mt-9"
          }
        >
          <TouchableOpacity
            style={styles.background}
            className="rounded-xl p-1"
            onPress={() => navigation.goBack()}
          >
            <ChevronLeftIcon size={30} strokeWidth={3} color="black" />
          </TouchableOpacity>
        </SafeAreaView>
      </View>

      {loading ? (
        <LoadingComponent />
      ) : (
        <ScrollView>
          <MovieDetail data={movieDetail} trailer={movieTrailer}/>
        </ScrollView>
      )}
    </View>
  );
}