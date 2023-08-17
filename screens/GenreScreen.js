import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../themes/RootColor';
import { useNavigation } from '@react-navigation/native';
import { ChevronDoubleDownIcon, ChevronLeftIcon } from 'react-native-heroicons/outline';
import GenreList from '../components/GenreList';


export default function GenreScreen(){
    const [genres, setGenres] = useState([])
    const [loading, setLoading] = useState(true)
    const navigator = useNavigation()

  return (
    <ScrollView contentContainerStyle={{paddingBottom: 20}} className="flex-1 bg-neutral-900">
      
      {/* TOP AREA */}
      <View className="w-full">
        <SafeAreaView className="z-20 w-full flex-row justify-between items-center px-4 mt-3">
            <TouchableOpacity style={styles.background} className="rounded-xl p-1" onPress={() => navigator.goBack()}>
                <ChevronLeftIcon size={28} strokeWidth={2.5} color="black" />
            </TouchableOpacity>
            <Text className="text-white text-2xl font-semibold pt-2">
                    <Text style={styles.text}>G</Text>
                    enres
                </Text>
        </SafeAreaView>
        {/* TOP AREA */}
        <View>

          <GenreList />

        </View>
      </View>

    </ScrollView>
  );
}