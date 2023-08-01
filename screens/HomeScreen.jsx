import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  VirtualizedList,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Header from "../components/Header";
import { StatusBar } from "expo-status-bar";
import Moviebanner from "../components/Moviebanner";
import MovieList from "../components/MovieList";
import axios from "axios";
import { AntDesign } from "@expo/vector-icons";
import Movies from "../components/Movies";
const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  // https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1

  const [banner, setBanner] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);

  // Popular Movies
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=6f0a51047d1a5047327fe89cc3ffa5d3&language=en-US"
      );
      const data = await response.json();
      setBanner(data.results);
    };
    fetchData();
  }, []);

  // Trending Movies
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/trending/all/day?api_key=6f0a51047d1a5047327fe89cc3ffa5d3&language=en-US"
      );
      const data = await response.json();
      setTrendingMovies(data.results);
    };
    fetchData();
  }, []);

  return (
    <ScrollView className="bg-[#1c1c27] h-full  ">
      <StatusBar backgroundColor="#000" style="light" />
      {/* Header */}
      <Header />
      {/* Moviebanner */}
      <View>
        <Moviebanner banner={banner} />
      </View>
      {/* Movielist */}
      <View className="flex-row items-center  gap-2 px-8 mt-4">
        <Text className="text-white text-md font-bold ">
          Watch Latest Movies
        </Text>
        <AntDesign name="play" size={20} color="white" />
      </View>
      <MovieList movieList={banner} />

      {/* Movies Booking List */}
      <Movies trendingMovies={trendingMovies} />
    </ScrollView>
  );
};

export default HomeScreen;
