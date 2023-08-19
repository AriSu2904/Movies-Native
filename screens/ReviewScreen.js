import React, { useEffect, useState } from "react";
import { View, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { fetchReviewMovies } from "../service/fetchApiService"; // Pastikan Anda mengimpor fetchReviewMovies dari tempat yang benar
import ReviewList from "../components/ReviewList";
import { styles } from "../themes/RootColor";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import LoadingComponent from "../components/Loading";

export default function ReviewListScreen() {
  const navigator = useNavigation();
  const { params: movieId } = useRoute();
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);

  const getMovieReviews = async (movieId) => {
    setLoading(true)
    const result = await fetchReviewMovies(movieId);
    if (result) setReviews(result);

    setLoading(false)
  };

  useEffect(() => {
    getMovieReviews(movieId);
  }, [movieId]);

  return (
    <View className="flex-1">
      <SafeAreaView className="flex-row m-5 pt-8">
        <TouchableOpacity
          style={styles.background}
          className="rounded-xl p-1"
          onPress={() => navigator.goBack()}
        >
          <ChevronLeftIcon size={35} strokeWidth={3} color="black" />
        </TouchableOpacity>
      </SafeAreaView>

      {loading ? (
        <LoadingComponent />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <ReviewList data={reviews} />
        </ScrollView>
      )}
    </View>
  );
}
