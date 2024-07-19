import { View, Text } from "react-native";
import React from "react";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

const Notification = () => {
  return (
    <View className="justify-center items-center">
      <View className="w-full h-[255px] bg-primary mt-3 rounded-xl justify-center flex-col">
        <View className="flex-row items-center space-x-2 m-3">
          <Ionicons name="chatbubble-ellipses-sharp" size={30} color="white" />
          <Text className="text-white font-semibold">Unanswered Messages</Text>
        </View>
        <View className="justify-center items-center">
          <View className="border border-blue-50 w-[75%]"></View>
        </View>
        <View className="flex-row items-center space-x-2 m-3">
          <MaterialCommunityIcons
            name="truck-delivery"
            size={30}
            color="white"
          />
          <Text className="text-white font-semibold">
            Shipments Ready Notification
          </Text>
        </View>
        <View className="justify-center items-center">
          <View className="border border-blue-50 w-[75%]"></View>
        </View>
        <View className="flex-row items-center space-x-2 m-3">
          <MaterialIcons name="notifications-on" size={30} color="white" />
          <Text className="text-white font-semibold">
            Your lost items notification
          </Text>
        </View>
        <View className="justify-center items-center">
          <View className="border border-blue-50 w-[75%]"></View>
        </View>
        <View className="flex-row items-center space-x-2 m-3">
          <MaterialIcons
            name="system-security-update"
            size={30}
            color="white"
          />
          <Text className="text-white font-semibold">System notification</Text>
        </View>
      </View>
    </View>
  );
};

export default Notification;
