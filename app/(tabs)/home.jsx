import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "../../constants/icons";

const Home = () => {
  return (
    <SafeAreaView className="h-full">
      <ScrollView>
        <View className="justify-center items-center">
          <View className="w-[95%] h-[45px] justify-center items-center bg-secondary mt-3 rounded-lg flex-row">
            <Text className="text-white text-center font-bold text-lg w-[80%]">
              Home
            </Text>
            <View>
              <Image
                source={icons.profile}
                className="w-[20px] h-[20px] items-end "
                resizeMode="contain"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
