import React from "react"

import { CreateAccount } from "./src/screens/CreateAccount";
import { SignIn } from './src/screens/SignIn';

import { StatusBar } from "expo-status-bar";

export default function App(){
  return(
    <>
      <StatusBar
          //barStyle="light-content"
          backgroundColor="transparent"
          translucent 
      />
      <CreateAccount />
    </>
  );
}

//edição 1