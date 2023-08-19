import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-web";

const formatDateTime = (dateTime) => {
  const date = new Date(dateTime);
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  return date.toLocaleString("en-US", options);
};

export default function ReviewList({ data }) {
  const [loop, setLoop] = useState([]);

  useEffect(() => {
    if (data.length > 0) {
      const loopedReviews = [];
      for (let i = 0; i < 10; i++) {
        loopedReviews.push(...data);
      }
      setLoop(loopedReviews);
    }
  }, [data]);

  return (
    <View>
      {loop.map((item, idx) => {
        return (
          <View className="pt-2 p-3 mx-5" key={`${item.id}-${idx}`}>
            <Text className="font-semibold text-lg">{item.author}</Text>
            <Text style={{marginVertical: 10}}>{item.content}</Text>
            <Text>{formatDateTime(item.created_at)}</Text>
          </View>
        );
      })}
    </View>
  );
}
