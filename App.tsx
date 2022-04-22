import React from "react";
import { LogBox } from "react-native";
import AnimatedTabBar from "./src/components/AnimatedTabBar";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  LogBox.ignoreLogs(["Setting a timer", "AsyncStorage"]); //desliga o aviso de setTimeout

  return (
    <NavigationContainer>
      <AnimatedTabBar />
    </NavigationContainer>
  );
}

//edição 1
