import React from "react";
import { View, Text, Image, StatusBar, TextInput, Alert } from "react-native";

import { TextInputMask } from "react-native-masked-text";
import "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../RootStackPrams";

import IllustrationImgLogo from "../../assets/Logo_app.png";
import IllustrationImgNameLogo from "../../assets/SafetyGrl2.png";

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
          length={11}
          onChangeText={(cpf) => setCPF(cpf)}
          keyboardType="numeric"
        />

        <TextInput
          style={styles.inputLogin}
          placeholder=" Senha"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
        <Text>
          {cpf} {password}
        </Text>
        <Text style={styles.forgotPassword}>Esqueci a senha</Text>
      </View>
      <ButtonLogin
        onPress={async () => {
          var result: number = await checkDatabase(cpf, password);
          if (result == -1) Alert.alert("Erro", "CPF não cadastrado!");
          if (result == 0) Alert.alert("Senha incorreta");
          if (result == 1) navigation.navigate("Home");
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

async function checkDatabase(cpf, senha) {
  const db = require("../../../database/firebase");
  console.log(`cpf: ${cpf}`);
  console.log(`senha: ${senha}`);
  let result = await db
    .ref("/users/" + cpf)
    .once("value")
    .then(async (snap) => {
      console.log(snap.val());
      if (!snap.val()) return -1; //cpf incorreto
      if ((await snap?.val()?.senha) != senha) return 0; //senha incorreta
      return 1; //senha correta
    });
  console.log(`result = ${result}`);
  return result;
}
