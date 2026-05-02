import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStack from "./HomeStack";
import SessionsStack from "./SessionsStack";
import TipsStack from "./TipsStack";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function TabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#F5F0E8",
          borderTopColor: "#E8E0D5",
          height: 64,
        },
        tabBarActiveTintColor: "#2F7A55",
        tabBarInactiveTintColor: "#9DA6A0",
      }}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Sessions" component={SessionsStack} />
      <Tab.Screen name="Tips" component={TipsStack} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
