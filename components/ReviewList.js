import React from "react";
import { View, Text, SafeAreaView } from "react-native";

// import { Container } from './styles';

export default function ReviewList({ data }) {
  return (
    <SafeAreaView>
      <View className="bg-white mx-2 rounded-xl">
      {data.map((review, idx) => {
        return (
          
            <View className="pt-2 p-3" key={`${review.id}-${idx}`}>
              <Text className="font-semibold text-lg">
                {review.author}
              </Text>
              <Text>
                {
                  review.content
                }
              </Text>
              <Text>
                {
                  review.created_at
                }
              </Text>
            </View>
        );
      })}
      </View>
    </SafeAreaView>
  );
}
