import { ImageBackground, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../constants/images";
import CustomeButton from "../components/customeButton";

export default function App() {
  return (
    <SafeAreaView className="h-full">
      <ImageBackground
        source={images.backgroundImage}
        className="flex-1 justify-center h-full"
        resizeMode="cover"
      >
        <ScrollView contentContainerStyle={{ height: "100%" }}>
          <View className="w-full h-full justify-center items-center">
            <CustomeButton
              title="Sign Up"
              containerStyle="w-[50%] mt-7 bg-green"
              textStyle="text-blue"
            />
          </View>
          <View>
            <Text className="text-xl text-black">Or,</Text>
          </View>
          <View>
            <Text className="text-xl text-black">Sign up with.....</Text>
          </View>
          <View className="w-full h-full justify-center items-center">
            <CustomeButton
              title="Google"
              containerStyle="w-[50%] mt-7 bg-green"
              textStyle="text-blue"
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}
