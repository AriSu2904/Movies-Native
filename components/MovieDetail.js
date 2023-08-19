import {
  Image,
  View,
  Text,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BASE_IMG500_URL } from "../constant/api";
import MovieTrailer from "./MovieTrailer";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
export default function MovieDetail({ data, trailer }) {

  const navigator = useNavigation()

  const getYear = (dateString) => {
    const date = new Date(dateString);
    return date.getFullYear();
  };

  return (
    <View>
      <SafeAreaView>
        <Image
          source={{ uri: `${BASE_IMG500_URL}/${data.poster_path}` }}
          style={{ width: width, height: height * 0.6 }}
        />

        <LinearGradient
          colors={["transparent", "rgba(23,23,23,0.7)", "rgba(23,23,23,1)"]}
          style={{ width, height: height * 0.57 }}
          start={{ x: 0.3, y: 0 }}
          end={{ x: 0.3, y: 1 }}
          className="absolute bottom-0"
        />
      </SafeAreaView>

      <SafeAreaView style={{ marginTop: -(height * 0.09) }}>
        <Text className="text-white text-center text-2xl font-bold tracking-wider">
          {data.title}
        </Text>

        {/* Tag Line */}
        <Text className="text-white text-center tracking-wider italic">
          "{data.tagline ? `${data.tagline}` : "Movies"}"
        </Text>

        <View className="mt-3">
          {/* Released Date */}
          <Text className="text-white text-center tracking-wider">
            {`${getYear(data.release_date)}\t\t•\t\t${data.runtime} Min`}
          </Text>

          {/* Genres */}
          <View className="flex-row justify-center space-x-2">
            {data.genres &&
              data.genres.map((genre, idx) => (
                <Text key={idx} className="text-white">
                  {genre.name} {idx < data.genres.length - 1 ? " •" : ""}
                </Text>
              ))}
          </View>
          <Text className="text-neutral-400 mx-4 mt-3 tracking-wide">
            {data.overview}
          </Text>
        </View>
      </SafeAreaView>

      {/* Trailer */}
      <View>
        <Text className="text-white text-lg mx-4 mb-1 mt-2">Trailer Movie</Text>
        <MovieTrailer data={trailer} />
      </View>

      <View className="px-5 my-5">
        <TouchableOpacity onPress={() => navigator.navigate('Reviews', data.id)}>
          <Text className="text-center text-xl font-semibold mx-4 mb-1 mt-2 bg-indigo-300 p-3 my-2 rounded-xl">
            Click Here To Show All Comments
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
