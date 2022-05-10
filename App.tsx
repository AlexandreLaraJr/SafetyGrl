import React from "react";
import { LogBox } from "react-native";
import AnimatedTabBar from "./src/components/AnimatedTabBar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SignIn } from "./src/screens/SignIn";
import { CreateAccount } from "./src/screens/CreateAccount";

export default function App() {
  const StackNav = createStackNavigator();
  LogBox.ignoreLogs(["Setting a timer", "AsyncStorage"]); //desliga o aviso de setTimeout

  return (
    <NavigationContainer>
      <StackNav.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <StackNav.Screen name="AnimTabBar" component={AnimatedTabBar} />
        <StackNav.Screen name="SignInStackHome" component={SignIn} />
        <StackNav.Screen name="CreateAccount" component={CreateAccount} />
      </StackNav.Navigator>
    </NavigationContainer>
  );
}

//edição 1
