import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Alert, Image, StatusBar, Text, TextInput, View } from "react-native";
import "react-native-gesture-handler";
import { checkLogin, setCredentials } from "../../../resources/localCreds";
import { encrypt } from "../../../resources/securePassword";
import { getUserFromDB } from "../../../resources/userFunctions";
import {
  verifyCPFOnDb,
  verifyPasswordOnDB,
} from "../../../resources/verifications";
import IllustrationImgLogo from "../../assets/Logo_app.png";
import IllustrationImgNameLogo from "../../assets/SafetyGrl2.png";
import {
  ButtonCreateAccountSignIn,
  ButtonLogin,
} from "../../components/ButtonIconSignIn";
import { styles } from "./styles";

export function SignIn({ navigation }: any): any {
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");

  checkLogin().then((value: any) => {
    if (value) {
      navigation.navigate("AnimTab");
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

          const user = await getUserFromDB(login);
          if (user[0].socialName !== "")
            setCredentials(user[0].cpf, user[0].name, user[0].socialName);
          else setCredentials(user[0].cpf, user[0].name);

          if (
            (await verifyCPFOnDb(login)) &&
            (await verifyPasswordOnDB(login, await encrypt(password)))
          ) {
            navigation.navigate("AnimTab");
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
