import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";

const MovieList = ({ movieList }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className=" p-4  flex flex-row "
    >
      {movieList.slice(0, 10).map((movie) => (
        <TouchableOpacity key={movie.id} className=" p-4 rounded-lg ">
          <Image
            source={{
              uri: "https://image.tmdb.org/t/p/original/" + movie.backdrop_path,
            }}
            style={{ aspectRatio: 2 / 3, height: 170 }}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default MovieList;
