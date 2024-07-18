import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";

const CustomeButton = ({
  title,
  handlePress,
  containerStyle,
  textStyle,
  isLoading,
  icon,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-primary rounded-xl min-h-[62px] justify-center items-center ${containerStyle} ${
        isLoading ? "opacity-50" : ""
      } `}
      disabled={isLoading}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color="#FFFFFF" />
      ) : (
        <Text className={`text-2xl font-bold text-blue-800 ${textStyle}`}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomeButton;
