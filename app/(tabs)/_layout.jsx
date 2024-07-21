import { View, Text } from "react-native";
import React from "react";
import { Stack, Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    // <Tabs>
    //   <Tabs.Screen name="home" options={{ headerShown: false }} />
    // </Tabs>
    <Stack>
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen name="addItems" options={{ headerShown: false }} />
      <Stack.Screen name="profile" options={{ headerShown: false }} />
    </Stack>
  );
};

export default TabsLayout;
