import { Image, View, Text, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BASE_IMG500_URL } from "../constant/api";
import YoutubeTrailer from "./MovieTrailer";

const { width, height } = Dimensions.get("window");
export default function MovieDetail({ data, trailer }) {
  return (
    <View>
      <View>
        <Image
          source={{ uri: `${BASE_IMG500_URL}/${data.poster_path}` }}
          style={{ width: width, height: height * 0.6 }}
        />

        <LinearGradient
          colors={["transparent", "rgba(23,23,23,0.9)", "rgba(23,23,23,1)"]}
          style={{ width, height: height * 0.57 }}
          start={{ x: 0.3, y: 0 }}
          end={{ x: 0.3, y: 1 }}
          className="absolute bottom-0"
        />
      </View>

      <View style={{ marginTop: -(height * 0.11) }}>
        <Text className="text-white text-center text-2xl font-bold tracking-wider">
          {data.title}
        </Text>

        {/* Tag Line */}
        <Text className="text-white text-center text-base tracking-wider italic">
          "{data.tagline}"
        </Text>

        <View className="mt-3">
          {/* Released Date */}
          <Text className="text-white text-center tracking-wider">
            {`${data.release_date} • ${data.runtime} Min`}
          </Text>

          {/* Genres */}
          <View className="flex-row justify-center space-x-2">
            {data.genres &&
              data.genres.map((genre, idx) => (
                <Text key={idx} className="text-white">
                  {genre.name} {idx < data.genres.length - 1 ? "• " : ""}
                </Text>
              ))}
          </View>
        </View>

        {/* Description */}
        <Text className="text-neutral-400 mx-4 mt-3 tracking-wide">
          {data.overview}
        </Text>

        {/* Trailer */}

        <Text className="text-white text-lg mx-4 mb-1 mt-2">
            Trailer Movie
          </Text>
          <View className="mx-4 justify-center align">
            <YoutubeTrailer movie={trailer} />
          </View>

        {/* Reviews */}
        <View>
          <Text className="text-white text-lg mx-4 mb-4">
            Reviews and Comments
          </Text>
        </View>
      </View>
    </View>
  );
}
