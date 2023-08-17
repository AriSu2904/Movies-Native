import React from 'react';
import { Text, TouchableOpacity, SafeAreaView, View } from 'react-native';

const GenreList = ({ data, onSelectGenre }) => {

  return (
    <SafeAreaView>
      <View className="flex justify-between p-8 mt-12">
        {data.map((item) => (
                  
          <TouchableOpacity key={item.id} onPress={() => onSelectGenre(item.id)}
          className="bg-slate-500 p-3 my-2.5 rounded-md">
            <Text className="text-white text-center text-xl">{item.name}</Text>
          </TouchableOpacity>
          
        ))}
       
      </View>
      
    </SafeAreaView>
  );
};

export default GenreList;
