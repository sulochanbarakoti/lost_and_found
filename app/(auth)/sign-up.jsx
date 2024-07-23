import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/formField";
import CustomeButton from "../../components/customeButton";
import { Link, router } from "expo-router";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    setIsSubmitting(true);
    console.log(form);
  };

  return (
    <SafeAreaView className=" h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <Text className="text-base font-medium text-xl mt-10">
            Register to system
          </Text>

          <FormField
            title="Username"
            otherStyle="mt-5"
            handleChangeText={(e) => setForm({ ...form, username: e })}
          />

          <FormField
            title="Email"
            otherStyle="mt-5"
            handleChangeText={(e) => setForm({ ...form, email: e })}
          />

          <FormField
            title="Password"
            otherStyle="mt-5"
            handleChangeText={(e) => setForm({ ...form, password: e })}
          />

          <CustomeButton
            title="Sign Up"
            containerStyle="mt-10"
            textStyle="text-white"
            handlePress={submit}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-black-100 font-semibold">
              Have an account?
            </Text>
            <Link href="sign-in" className="text-secondary font-semibold">
              Login
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
