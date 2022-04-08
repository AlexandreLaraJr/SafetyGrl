import React from "react";
import { View, Text, Image, StatusBar, TextInput, Alert } from "react-native";

import "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../RootStackPrams";

import IllustrationImgLogo from "../../assets/Logo_app.png";
import IllustrationImgNameLogo from "../../assets/SafetyGrl2.png";

import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  ButtonCreateAccountSignIn,
  ButtonIconFacebook,
  ButtonIconGoogle,
  ButtonLogin,
} from "../../components/ButtonIconSignIn";

import { styles } from "./styles";

type createAccountScreenProp = StackNavigationProp<
  RootStackParamList,
  "CreateAccount"
>;

export function SignIn(): any {
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigation = useNavigation<createAccountScreenProp>();
  AsyncStorage.getItem("isLoggedIn").then(async (value) => {
    if (value == "true") {
      let uCpf: any = await AsyncStorage.getItem("cpf");
      getUserFromDB(uCpf).then((value: any) => {
        navigation.navigate("Home", value[0]);
      });
    }
  });

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <Image source={IllustrationImgLogo} style={styles.image} />

      <Image source={IllustrationImgNameLogo} style={styles.nameLogo} />

      <View style={styles.content}>
        <TextInput
          style={styles.inputLogin}
          placeholder=" CPF ou Email"
          maxLength={40}
          onChangeText={(login) => setLogin(login)}
        />

        <TextInput
          style={styles.inputLogin}
          placeholder=" Senha"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
        <Text style={styles.forgotPassword}>Esqueci a senha</Text>
      </View>
      <ButtonLogin
        onPress={async () => {
          var result: any = await checkDatabase(login, password);
          var name: any = await getUserFromDB(login);
          if (result == -1) Alert.alert("Erro", "CPF ou Email não cadastrado!");
          if (result == 0) Alert.alert("Senha incorreta");
          if (result == 1) {
            AsyncStorage.getItem("isLoggedIn").then(async (value) => {
              if (value == "true") {
                let uCpf: any = await AsyncStorage.getItem("cpf");
                getUserFromDB(uCpf).then((value: any) => {
                  navigation.navigate("Home", value[0]);
                });
              } else {
                await AsyncStorage.setItem("isLoggedIn", "true");
                await AsyncStorage.setItem("cpf", name[0].cpf);
                await AsyncStorage.setItem("name", name[0].name);
              }
            });
            let uCpf: any = await AsyncStorage.getItem("cpf");
            getUserFromDB(uCpf).then((value: any) => {
              navigation.navigate("Home", value[0]);
            });
          }
        }}
      />
      <ButtonCreateAccountSignIn
        onPress={() => navigation.navigate("CreateAccount")}
      />

      <View style={styles.containerIcons}>
        <ButtonIconFacebook />
        <ButtonIconGoogle />
      </View>
    </View>
  );
}

async function checkDatabase(login: string, senha: string): Promise<number> {
  const db = require("../../../database/firebase");
  let result = await db
    .ref("/users")
    .once("value")
    .then(async (snap: any) => {
      return snap.forEach(async (child: any) => {
        if (child.val().email == login || child.val().cpf == login) {
          if (child.val().senha == senha) {
            await AsyncStorage.setItem("cpf", child.val().cpf);
            await AsyncStorage.setItem("name", child?.val()?.name);
            await AsyncStorage.setItem("email", child?.val()?.email);
            await AsyncStorage.setItem("telefone", child?.val()?.telefone);
            return 1;
          } else {
            return 0;
          }
        }
      });
      // if ((await snap?.val()?.senha) != senha) return 0; //senha incorreta
      // return 1; //senha correta
    });
  return result;
}

async function getUserFromDB(login: string): Promise<string> {
  const db = require("../../../database/firebase");
  let result: any = [];
  await db
    .ref("/users")
    .once("value")
    .then((snap: any) => {
      snap.forEach((child: any) => {
        result.push(child?.val());
      });
    });
  return result;
}
