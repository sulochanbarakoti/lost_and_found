import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from "react-native";
import React from "react";
import icons from "../constants/icons";

const IconButton = ({ handlePress, containerStyle, icon, isLoading }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-white rounded-xl min-h-[62px] justify-center items-center ${containerStyle} ${
        isLoading ? "opacity-50" : ""
      } `}
      disabled={isLoading}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color="#FFFFFF" />
      ) : (
        <View>
          <Image
            source={icon}
            className="h-[30px] justify-center items-center"
            resizeMode="contain"
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default IconButton;
