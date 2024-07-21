import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Link, router } from "expo-router";

const TopBar = ({ title, image }) => {
  return (
    <View className="w-[95%] h-[45px] justify-center items-center bg-secondary mt-3 rounded-xl flex-row">
      {title !== "Home" && (
        <View>
          <Link href="home">
            <FontAwesome name="home" size={24} color="black" />
          </Link>
        </View>
      )}

      <Text className="text-white text-center font-bold text-lg w-[80%]">
        {title}
      </Text>
      <View>
        <TouchableOpacity onPress={() => router.push("profile")}>
          <Image
            source={image}
            className="w-[25px] h-[25px] items-end "
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopBar;
