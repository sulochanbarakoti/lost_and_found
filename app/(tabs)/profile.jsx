import { View, Text, ScrollView, Image, Switch, TextInput } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "../../components/topBar";
import { images } from "../../constants";
import CustomeButton from "../../components/customeButton";

const Profile = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="space-y-5">
          <View className="justify-center items-center">
            <TopBar title="Profile" />
          </View>
          <View className="justify-center items-center">
            <View className="bg-primary h-[200px] w-[95%] rounded-xl justify-center items-center space-y-2">
              <Image
                source={images.profile}
                resizeMode="contain"
                className="h-[140px]"
              />
              <Text className="text-white text-lg font-bold">
                Hello, Sulochan
              </Text>
            </View>
          </View>
          <View>
            <View>
              <Text className="text-lg font-bold ml-2">
                Notification Setting
              </Text>
            </View>
            <View className="justify-center items-center">
              <View className="bg-gray-300 h-[70px] w-[95%] rounded-xl justify-between items-center flex-row pl-3">
                <View className="flex-col">
                  <Text className="font-bold">Ready for shipment alert.</Text>
                  <Text>Notify when shipment is ready.</Text>
                </View>
                <View>
                  <Switch
                    trackColor={{ false: "#767577", true: "#2E8FD9" }}
                    thumbColor={isEnabled ? "#1DCC70" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                  />
                </View>
              </View>
            </View>
          </View>
          <View>
            <View>
              <Text className="text-lg font-bold ml-2">Profile Setting</Text>
            </View>
            <View className="justify-center items-center">
              <View className="bg-primary h-[180px] w-[95%] rounded-xl justify-center items-center space-y-2">
                <View className="w-[95%] h-12 px-4 bg-gray-50 rounded-2xl focus:border-secondary items-center flex-row">
                  <TextInput className="w-full" placeholder="First name" />
                </View>
                <View className="w-[95%] h-12 px-4 bg-gray-50 rounded-2xl focus:border-secondary items-center flex-row">
                  <TextInput className="w-full" placeholder="Last name" />
                </View>
                <View className="w-[95%] h-12 px-4 bg-gray-50 rounded-2xl focus:border-secondary items-center flex-row">
                  <TextInput className="w-full" placeholder="email@gmeil.com" />
                </View>
              </View>
            </View>
          </View>
          <View>
            <View>
              <Text className="text-lg font-bold ml-2">Security</Text>
            </View>
            <View className="justify-center items-center">
              <View className="bg-primary h-[130px] w-[95%] rounded-xl justify-center items-center space-y-2">
                <View className="w-[95%] h-12 px-4 bg-gray-50 rounded-2xl focus:border-secondary items-center flex-row">
                  <TextInput className="w-full" placeholder="old password" />
                </View>
                <View className="w-[95%] h-12 px-4 bg-gray-50 rounded-2xl focus:border-secondary items-center flex-row">
                  <TextInput className="w-full" placeholder="new password" />
                </View>
              </View>
            </View>
          </View>
          <View className="justify-center items-center m-4">
            <CustomeButton
              title="Save"
              containerStyle=" w-[50%]"
              textStyle="text-white"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
