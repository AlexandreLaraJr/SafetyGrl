import React from "react";

import { StatusBar } from "expo-status-bar";
import { Routes } from "./src/routes";

import { LogBox } from "react-native";

export default function App() {
  LogBox.ignoreLogs(["Setting a timer"]);
  return (
    <>
      <StatusBar
        //barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </>
  );
}

//edição 1
