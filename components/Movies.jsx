import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
const Movies = ({ trendingMovies }) => {
  //   console.log(trendingMovies);
  const navigation = useNavigation();
  return (
    <View className="">
      <View className="flex-row items-center gap-2  px-8 ">
        <Text className="text-white text-md ">See Trending Movies</Text>
        <MaterialIcons name="favorite" size={20} color="white" />
      </View>
      <View className="mt-2 gap-4 flex-row flex-wrap justify-center items-center">
        {trendingMovies.map((movie) => (
          <View key={movie.id} className="m-2 mb-6 mx-4">
            <Image
              source={{
                uri:
                  "https://image.tmdb.org/t/p/original/" + movie.backdrop_path,
              }}
              style={{
                aspectRatio: 2 / 3,
                height: 220,
                borderRadius: 10,
              }}
            />
            <Text className="text-gray-300 text-xs truncate w-[150px] mt-2">
              {movie.title ? movie.title : movie.overview.slice(0, 40) + "..."}
            </Text>
            <Text className="text-gray-300 text-xs mt-2">
              {movie.release_date ? movie.release_date : movie.first_air_date}
            </Text>
            <TouchableOpacity
              className="py-1 px-2 max-w-[100px] bg-[#ffc40c] rounded-md mt-2"
              onPress={() =>
                navigation.navigate("Movie", {
                  movie,
                  image: movie.image,
                })
              }
            >
              <Text className="text-black font-bold text-center">Book</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Movies;
