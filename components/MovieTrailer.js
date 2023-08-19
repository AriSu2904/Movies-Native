import React, { useState } from "react";
import { Text, SafeAreaView } from "react-native";
import YoutubeIframe from "react-native-youtube-iframe";

export default function MovieTrailer({ data }) {
  const [playing, setPlaying] = useState(false);

  return (
    <SafeAreaView >
      <YoutubeIframe height={220} play={playing} videoId={data.key} />
    </SafeAreaView>
  );
}
