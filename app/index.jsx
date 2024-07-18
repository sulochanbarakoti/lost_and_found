import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../constants/images";
import CustomeButton from "../components/customeButton";
import IconButton from "../components/iconButton";
import icons from "../constants/icons";
import { router } from "expo-router";

export default function App() {
  return (
    <SafeAreaView className="h-full flex-1">
      <ImageBackground
        source={images.backgroundImage}
        className="flex-1 justify-center h-full"
        resizeMode="cover"
      >
        <ScrollView contentContainerStyle={{ height: "100%" }}>
          <View className="w-full justify-center items-center h-full">
            <View className="w-full justify-center items-center">
              <CustomeButton
                title="Sign Up"
                containerStyle=" w-[50%] mt-7"
                textStyle="text-blue text-white"
              />
            </View>
            <View className="w-[50%] justify-start">
              <Text className="text-xl font-bold text-black mt-7">Or,</Text>
            </View>
            <View className="w-[50%] justify-start">
              <Text className="text-xl font-bold text-black">
                Sign up with.....
              </Text>
            </View>
            <View className="w-full justify-center items-center">
              <IconButton icon={icons.google} containerStyle="w-[50%] mt-7" />
            </View>
            <View className="w-full justify-center items-center">
              <IconButton icon={icons.facebook} containerStyle="w-[50%] mt-7" />
            </View>
            <View className="w-full justify-center items-center">
              <IconButton icon={icons.twitter} containerStyle=" w-[50%] mt-7" />
            </View>
            <View className="w-full justify-center items-center flex-row">
              <CustomeButton
                title="Login"
                containerStyle=" w-[50%] mt-7"
                textStyle="text-blue text-white"
                handlePress={() => router.push("sign-in")}
              />
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}
