import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images";
import FormField from "../../components/formField";
import CustomeButton from "../../components/customeButton";
import { Link, router } from "expo-router";

const SignIn = () => {
  return (
    <SafeAreaView className=" h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <Image
            source={images.banner}
            resizeMode="contain"
            className="w-full h-[200px]"
          />

          <Text className="text-base font-medium text-xl mt-10">
            Login to system
          </Text>

          <FormField title="Username" />

          <FormField title="Password" />

          <CustomeButton
            title="Login"
            containerStyle="mt-10"
            textStyle="text-white"
            handlePress={() => router.push("home")}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-black-100 font-semibold">
              Don't have an account?
            </Text>
            <Link href="sign-up" className="text-secondary font-semibold">
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
