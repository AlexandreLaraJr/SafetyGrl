import React from "react";
import { View, Text, Image, StatusBar, TextInput, Alert } from "react-native";
import { styles } from "./styles";

import "react-native-gesture-handler";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../RootStackPrams";

import IllustrationImgLogo from "../../assets/Logo_app.png";
import IllustrationImgNameLogo from "../../assets/SafetyGrl2.png";

import {
  getUserFromDB,
  setCredentials,
  checkLogin,
} from "../../../resources/userFunctions";

import {
  ButtonCreateAccountSignIn,
  ButtonLogin,
} from "../../components/ButtonIconSignIn";

type createAccountScreenProp = StackNavigationProp<
  RootStackParamList,
  "CreateAccount"
>;

import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  verifyCPFOnDb,
  verifyPasswordOnDB,
} from "../../../resources/verifications";
import { encrypt } from "../../../resources/securePassword";

export function SignIn(): any {
  AsyncStorage.clear();
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
          placeholder=" CPF "
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
          if (login === "" || password === "") {
            Alert.alert("Erro", "Preencha todos os campos");
          }
          console.log(login, password);
          setCredentials(login);
          if (
            (await verifyCPFOnDb(login)) &&
            (await verifyPasswordOnDB(login, await encrypt(password)))
          ) {
            navigation.navigate("Home");
          }
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
