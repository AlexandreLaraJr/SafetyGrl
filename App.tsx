import React from "react";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./src/screens/Home";
import AnimatedTabBar from "./src/components/AnimatedTabBar";
import { User } from "./src/screens/User";
import { SignIn } from "./src/screens/SignIn";
import { CreateAccount } from "./src/screens/CreateAccount";
import { Statements2 } from "./src/screens/Statements2";

const Stack = createStackNavigator();

export default function App() {
  LogBox.ignoreLogs(["Setting a timer", "AsyncStorage"]); //desliga o aviso de setTimeout

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="SignIn"
      >
        <Stack.Screen name="AnimTab" component={AnimatedTabBar} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="Statements2" component={Statements2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//edição 1
