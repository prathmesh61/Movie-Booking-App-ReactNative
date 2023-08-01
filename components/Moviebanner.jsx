import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityComponent,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ImageBackground } from "react-native";

const Moviebanner = ({ banner }) => {
  // console.log(banner);

  return (
    <View>
      {banner.slice(0, 1).map((banner) => (
        <View className="mt-4 mb-40" key={banner.id}>
          <ImageBackground
            source={{
              uri:
                "https://image.tmdb.org/t/p/original/" + banner.backdrop_path,
            }}
            style={{ width: "100%", height: 240, borderRadius: 10 }}
            resizeMode="cover"
            className="flex items-center"
          >
            <View
              className="absolute top-52 shadow-lg bg-white p-5 rounded-md "
              style={{ width: "90%" }}
            >
              <Text className="text-lg font-bold">{banner.title}</Text>
              <Text className="text-sm font-normal ">
                {banner.overview.slice(0, 105) + "..."}
              </Text>
              <View className="flex flex-row items-center justify-between mt-4">
                <Text className="text-xm text-gray-600 ">
                  Releasing in 1 day
                </Text>
                <TouchableOpacity className="py-1 px-5 bg-[#ffc40c] rounded-sm ">
                  <Text className="text-black font-bold">Book</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
      ))}
    </View>
  );
};

export default Moviebanner;
