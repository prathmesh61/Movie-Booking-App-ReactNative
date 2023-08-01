import { View, Text } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
const Header = () => {
  return (
    <View className=" mt-8 p-4 ">
      <View className="flex-row items-center justify-between ">
        <View className="flex-1">
          <Text className="text-gray-200 text-sm font-normal italic">
            Welcome Joyo
          </Text>
          <Text className="text-lg font-bold text-gray-100">
            Let's Watch Movie
          </Text>
        </View>
        <MaterialCommunityIcons
          name="face-man-profile"
          size={34}
          color="white"
        />
      </View>
      <View className="flex-row items-center rounded-xl bg-[#fefefe] mt-4 p-2">
        <TextInput
          placeholder="   Search Movie..."
          className="w-[100%] mx-auto   text-black"
        />
        <Feather name="search" size={20} color="black" />
      </View>
    </View>
  );
};

export default Header;
