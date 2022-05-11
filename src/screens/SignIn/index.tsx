import React from "react";
import { View, Text, Image, StatusBar, TextInput, Alert } from "react-native";
import { styles } from "./styles";

import "react-native-gesture-handler";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../RootStackPrams";

import IllustrationImgLogo from "../../assets/Logo_app.png";
import IllustrationImgNameLogo from "../../assets/SafetyGrl2.png";

import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  ButtonCreateAccountSignIn,
  ButtonLogin,
} from "../../components/ButtonIconSignIn";
import { encrypt } from "../../../resources/securePassword";

type createAccountScreenProp = StackNavigationProp<
  RootStackParamList,
  "CreateAccount"
>;

export function SignIn(): any {
  const navigation = useNavigation<createAccountScreenProp>();

  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");

  checkLogin(navigation);

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
          /*
        - Verificar se o usuário existe no banco de dados
        - Comparar erros usando as funções de verifications
        */

          AsyncStorage.setItem("@utils:isLoggedIn", "true");
          AsyncStorage.setItem("@user:login", login);
        }}
      />
      <ButtonCreateAccountSignIn
        onPress={() => {
          navigation.navigate("CreateAccount");
        }}
      />
    </View>
  );
}

/***
 * Checks if the user is logged in based on
 * the existence of the token in the local storage
 * @param {navigation} Navigation prop of the screen
 */
function checkLogin({ navigation }: createAccountScreenProp) {
  AsyncStorage.getItem("@user:login").then((login) => {
    if (login) navigation.navigate("Home");
  });
}
