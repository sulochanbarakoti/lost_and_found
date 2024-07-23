import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

const FormField = ({ otherStyle, title, handleChangeText, value }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyle}`}>
      <Text className="text-base font-bold text-2xl">{title}</Text>
      <View className="border-2 border-gray-100 w-full h-14 px-4 bg-gray-50 rounded-2xl focus:border-secondary items-center flex-row">
        <TextInput
          className="flex-1 w-full"
          value={value}
          onChangeText={handleChangeText}
          secureTextEntry={title == "Password" && !showPassword}
        />
        {title == "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {!showPassword ? (
              <FontAwesome name="eye" size={24} color="black" />
            ) : (
              <FontAwesome name="eye-slash" size={24} color="black" />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
