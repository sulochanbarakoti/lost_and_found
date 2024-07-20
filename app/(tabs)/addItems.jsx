import { View, Text, ScrollView, ImageBackground } from "react-native";
import React from "react";
import TopBar from "../../components/topBar";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/formField";

const AddItems = () => {
  return (
    <SafeAreaView className=" h-full">
      <ScrollView>
        <ImageBackground
          source={images.bg}
          resizeMode="cover"
          className="w-full h-full"
        >
          <View>
            <View className="justify-center items-center">
              <TopBar title="Add Lost Item" />
            </View>
            <View className="w-full justify-center min-h-[85vh] px-4 my-6">
              <FormField
                title="What was your lost Item?"
                otherStyle="justify-center items-center mt-4"
              />
              <FormField
                title="Your lost Item Details:"
                otherStyle="justify-center items-center mt-4"
              />
              <FormField
                title="Lost Date and Place?         "
                otherStyle="justify-center items-center mt-4"
              />
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddItems;
