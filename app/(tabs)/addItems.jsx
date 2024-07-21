import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Alert,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import TopBar from "../../components/topBar";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/formField";
import CustomeButton from "../../components/customeButton";
import { router } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import { FontAwesome5 } from "@expo/vector-icons";

const AddItems = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      Alert.alert("You did not select any image");
    }
  };

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

              <View className="mt-5">
                <View className="justify-center">
                  <Text className="font-bold text-xl">Upload Picture:</Text>
                </View>
                <TouchableOpacity
                  className="w-full h-64 bg-white rounded-xl shadow-black-100 border-gray-400 flex-row space-x-4 justify-center items-center mt-5"
                  onPress={() => pickImageAsync()}
                >
                  {selectedImage ? (
                    // <View>
                    <Image
                      source={{ uri: selectedImage }}
                      resizeMode="cover"
                      className="w-full h-64 rounded-2xl"
                    />
                  ) : (
                    // </View>
                    <View className="justify-center items-center">
                      <FontAwesome5 name="upload" size={50} color="black" />
                      <Text className="text-black-100 text-sm font-bold">
                        Choose a file
                      </Text>
                    </View>
                  )}
                </TouchableOpacity>
              </View>
              <View className="justify-center items-center">
                <CustomeButton
                  title="Submit"
                  containerStyle="mt-5 w-[50%] "
                  textStyle="text-white"
                  handlePress={() => router.push("home")}
                />
              </View>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddItems;
