import { View, Text, Image } from "react-native";
import React from "react";

const TopBar = ({ title, image }) => {
  return (
    <View className="w-[95%] h-[45px] justify-center items-center bg-secondary mt-3 rounded-xl flex-row">
      <Text className="text-white text-center font-bold text-lg w-[80%]">
        {title}
      </Text>
      <View>
        <Image
          source={image}
          className="w-[25px] h-[25px] items-end "
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default TopBar;
