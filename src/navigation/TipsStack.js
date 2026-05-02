import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FamilyTipsScreen from "../screens/FamilyTipsScreen";
import TipDetailsScreen from "../screens/TipDetailsScreen";

const Stack = createNativeStackNavigator();

export default function TipsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FamilyTipsMain"
        component={FamilyTipsScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="TipDetails"
        component={TipDetailsScreen}
        options={{
          title: "Family Tip",
          headerStyle: { backgroundColor: "#F5F0E8" },
          headerTintColor: "#1F2A24",
        }}
      />
    </Stack.Navigator>
  );
}
