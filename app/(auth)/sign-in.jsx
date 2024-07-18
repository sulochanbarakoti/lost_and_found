import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images";
import FormField from "../../components/formField";

const SignIn = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <Image
            source={images.banner}
            resizeMode="contain"
            className="w-full h-[200px]"
          />

          <Text className="text-base font-medium text-xl">Login to system</Text>

          <FormField title="Username" />

          <FormField title="Password" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
