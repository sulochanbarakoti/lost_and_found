import { View, Text, TextInput } from "react-native";
import React from "react";

const FormField = ({ otherStyle, title }) => {
  return (
    <View className={`space-y-2 ${otherStyle}`}>
      <Text className="text-base font-bold text-2xl">{title}</Text>
      <View className="border-2 border-gray-100 w-full h-14 px-4 bg-gray-50 rounded-2xl focus:border-secondary items-center flex-row">
        <TextInput className="w-full" />
      </View>
    </View>
  );
};

export default FormField;
