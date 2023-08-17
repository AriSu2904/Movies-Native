import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../themes/RootColor';
import { useNavigation } from '@react-navigation/native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import GenreList from '../components/GenreList';
import { fetchMoviesGenre } from '../service/fetchApiService';
import LoadingComponent from '../components/Loading';



export default function GenreScreen() {
    const [loading, setLoading] = useState(true)
    const [genres, setGenres] = useState([])
    const navigator = useNavigation()

    const getGenreMovies = async () => {
      const data = await fetchMoviesGenre()
      if(data) setGenres(data)

      setLoading(false)
    }

    const selectedGenre = (genreId) => {
      navigator.navigate('DiscoverMovie', {genreId})
    }

    useEffect(() => {
      getGenreMovies();
    }, [])

  return (
    <ScrollView contentContainerStyle={{paddingBottom: 20}} className="flex-1 bg-neutral-900">
      
      {/* TOP AREA */}
      <View className="w-full">
        <SafeAreaView className="absolute z-20 w-full flex-row justify-between items-center px-4 mt-5">
            <TouchableOpacity style={styles.background} className="rounded-xl p-1" onPress={() => navigator.goBack()}>
                <ChevronLeftIcon size={28} strokeWidth={2.5} color="black" />
            </TouchableOpacity>
            <Text className="text-white text-2xl font-semibold pt-2">
                    <Text style={styles.text}>G</Text>
                    enres
                </Text>
        </SafeAreaView>
        {/* TOP AREA */}
      </View>
        
        <View>
        {
          loading ? ( <LoadingComponent />
          ) : (
            <SafeAreaView>
              <GenreList data={genres} onSelectGenre={selectedGenre}/>
            </SafeAreaView>
          )
        }
        </View>


    </ScrollView>
  );
}