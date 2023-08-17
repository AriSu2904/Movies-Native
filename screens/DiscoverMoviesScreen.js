import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {TouchableOpacity, ScrollView, Text, View, SafeAreaView } from 'react-native';
import { fetchDiscoverMovies } from '../service/fetchApiService';
import LoadingComponent from '../components/Loading';
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { styles } from '../themes/RootColor';
import DiscoverMovie from '../components/DiscoverMovie';

export default function DiscoverMoviesScreen() {
  const route = useRoute();
  const { genreId } = route.params;
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigator = useNavigation()

  const getMoviesByGenre = async (genreId) => {
    const data = await fetchDiscoverMovies(genreId);
    if (data) setMovies(data);

    setLoading(false);
  };

  useEffect(() => {
    getMoviesByGenre(genreId);
  }, [genreId]);

  const renderMovies = () => {
    if (loading) {
      return <LoadingComponent />;
    }

    return (
      <ScrollView contentContainerStyle={{paddingBottom: 20}} className="flex-1 bg-neutral-900">

        <View className="w-full">
            <SafeAreaView className="absolute z-20 w-full flex-row items-center px-4 mt-10">
                <TouchableOpacity style={styles.background} className="rounded-xl mr-2" onPress={() => navigator.goBack()}>
                    <ChevronLeftIcon size={28} strokeWidth={2.5} color="black"/>
                </TouchableOpacity >
                <Text className="text-2xl font-semibold text-white" onPress={() => navigator.goBack()}>
                        Bac</Text>
                        <Text className="text-2xl font-bold" style={styles.text}>k</Text>
            </SafeAreaView>
                {/* TOP AREA */}

            <SafeAreaView>
              <DiscoverMovie movies={movies}  />
            </SafeAreaView>
        </View>

      </ScrollView>
    
    );
  };

  return renderMovies();
}




