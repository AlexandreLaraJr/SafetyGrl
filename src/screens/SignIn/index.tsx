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
  const [cpf, setCPF] = React.useState("");
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
          placeholder=" CPF (sem digitos e pontos)"
          maxLength={40}
          onChangeText={(cpf) => setCPF(cpf)}
          keyboardType="numeric"
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
          var result: number = await checkDatabase(cpf, password);
          var name: string = await getUserFromDB(cpf);
          if (result == -1) Alert.alert("Erro", "CPF não cadastrado!");
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
                await AsyncStorage.setItem("cpf", cpf);
                await AsyncStorage.setItem("name", name);
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

async function checkDatabase(cpf: string, senha: string): Promise<number> {
  const db = require("../../../database/firebase");
  let result = await db
    .ref("/users/" + cpf)
    .once("value")
    .then(async (snap: any) => {
      if (!snap.val()) return -1; //cpf incorreto
      if ((await snap?.val()?.senha) != senha) return 0; //senha incorreta
      await AsyncStorage.setItem("cpf", cpf);
      await AsyncStorage.setItem("name", snap?.val()?.name);
      await AsyncStorage.setItem("email", snap?.val()?.email);
      await AsyncStorage.setItem("telefone", snap?.val()?.telefone);
      return 1; //senha correta
    });
  return result;
}

async function getUserFromDB(cpf: string): Promise<string> {
  const db = require("../../../database/firebase");
  let result: any = [];
  await db
    .ref("/users/" + cpf)
    .once("value")
    .then((snap: any) => {
      result.push(snap?.val());
    });
  return result;
}
