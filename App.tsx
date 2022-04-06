import React from "react";

import { CreateAccount } from "./src/screens/CreateAccount";
import { SignIn } from "./src/screens/SignIn";

import { StatusBar } from "expo-status-bar";
import { Routes } from "./src/routes";
import { Home } from "./src/screens/Home";

export default function App() {
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
