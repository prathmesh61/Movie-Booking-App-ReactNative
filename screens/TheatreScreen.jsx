import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import moment from "moment";
import { useNavigation, useRoute } from "@react-navigation/native";
const TheatreScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <View className="mt-8 p-4 h-full">
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View className="flex-row items-center space-x-2">
          <Feather name="arrow-left" size={24} color="black" />
          <View>
            <Text className="text-lg font-semibold italic">
              {route.params.name}
            </Text>
            <Text className="text-sm font-normal itaic">
              {route.params.mall}
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <View className="flex-row items-center justify-center  mt-4">
        <Text className="text-sm font-bold  text-center text-gray-500">
          Movie Time: {route.params.timeSelected}
        </Text>
        {/* <Text> | </Text>
        <Text className="text-sm font-bold  text-center text-gray-500">
          Date: {moment(route.params.date).utc().format("MM/DD/YYYY")}
        </Text> */}
      </View>
      <View className="mt-4">
        <FlatList
          numColumns={7}
          data={route.params.tableSeats}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Text className="p-2 m-2 rounded-lg border-gray-400 border-2 text-center">
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingLeft: 100,
          marginTop: 20,
          backgroundColor: "#D8D8D8",
          padding: 10,
        }}
      >
        <View>
          <FontAwesome
            style={{ textAlign: "center", marginBottom: 4 }}
            name="square"
            size={24}
            color="#ffc40c"
          />
          <Text>selected</Text>
        </View>

        <View style={{ marginHorizontal: 20 }}>
          <FontAwesome
            style={{ textAlign: "center", marginBottom: 4 }}
            name="square"
            size={24}
            color="white"
          />
          <Text>Vacant</Text>
        </View>

        <View>
          <FontAwesome
            style={{ textAlign: "center", marginBottom: 4 }}
            name="square"
            size={24}
            color="#989898"
          />
          <Text>Occupied</Text>
        </View>
      </View>

      <View className="flex-row items-center justify-between mt-4">
        <Text>No Ticket Selected</Text>
        <Text className="bg-gray-300 p-2 rounded-md">
          Now with ticket cancellation
        </Text>
      </View>

      <View>
        <TouchableOpacity className="bg-[#ffc40c] p-4 rounded-md mt-4 flex-row items-center  justify-between w-full shadow-2xl">
          <Text>Selected Ticket</Text>
          <Text>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TheatreScreen;

const styles = StyleSheet.create({});
