import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import HorizontalDatepicker from "@awrminkhodaei/react-native-horizontal-datepicker";
import Malls from "../Data/Malls";
const MovieScreen = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [seatsData, setSeatsData] = useState([]);
  const [mall, setMall] = useState([]);
  const route = useRoute();
  const navigation = useNavigation();
  const mallsData = Malls;
  return (
    <View className="mt-8 p-4 h-full">
      <View className="flex-row items-center justify-between ml-2">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View className="flex-row items-center space-x-2">
            <FontAwesome5 name="arrow-left" size={20} color="black" />

            <Text className="font-bold text-sm italic">
              {route.params.movie.title}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View className="flex-row items-center space-x-2 mt-4">
        <AntDesign name="Safety" size={24} color="orange" />
        <Text className="font-normal text-sm ">
          Your safety is our priority
        </Text>
      </View>
      <View className="mt-4">
        <HorizontalDatepicker
          mode="gregorian"
          startDate={new Date("2023-05-10")}
          endDate={new Date("2023-05-20")}
          initialSelectedDate={new Date("2020-08-22")}
          onSelectedDateChange={(date) => setSelectedDate(date)}
          selectedItemWidth={170}
          unselectedItemWidth={38}
          itemHeight={38}
          itemRadius={10}
          selectedItemTextStyle={styles.selectedItemTextStyle}
          unselectedItemTextStyle={styles.selectedItemTextStyle}
          selectedItemBackgroundColor="#222831"
          unselectedItemBackgroundColor="#ececec"
          flatListContainerStyle={styles.flatListContainerStyle}
        />
      </View>

      <View className="mt-4">
        {mallsData.map((item) => (
          <View key={item.id}>
            <TouchableOpacity
              onPress={() => {
                setMall(item.name);
                setSeatsData(item.tableData);
              }}
            >
              <Text className="font-bold text-lg mt-4">{item.name}</Text>
              {mall.includes(item.name) ? (
                <FlatList
                  numColumns={3}
                  data={item.showtimes}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("Theatre", {
                          mall: mall,
                          name: route.params.movie.title,
                          timeSelected: item,
                          tableSeats: seatsData,
                          date: selectedDate,
                          image: route.params.movie.backdrop_path,
                        })
                      }
                      style={{
                        borderColor: "green",
                        borderWidth: 0.5,
                        width: 80,
                        borderRadius: 3,
                        margin: 10,
                        padding: 5,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 15,
                          color: "green",
                          fontWeight: "500",
                          textAlign: "center",
                        }}
                      >
                        {item}
                      </Text>
                    </TouchableOpacity>
                  )}
                />
              ) : null}
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

export default MovieScreen;
const styles = StyleSheet.create({});
