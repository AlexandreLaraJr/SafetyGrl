import React from "react";
import { View, Text, Image, TextInput, Alert } from "react-native";

import "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../RootStackPrams";

import IllustrationUser from "../../assets/icone_user.png";

import { styles } from "./styles";
import { LogoHeader } from "../../components/LogoHeader";
import { Footer } from "../../components/Footer";
import { RectButton } from "react-native-gesture-handler";

import { ButtonOk } from "../../components/ButtonOk";
import { ButtonCancel } from "../../components/ButtonCancel";

type ChangePasswordScreenProp = StackNavigationProp<
  RootStackParamList,
  "ChangePassword"
>;

export function EditUser(dbUser: any) {
  const navigation = useNavigation<ChangePasswordScreenProp>();

  let user = dbUser?.route?.params.route?.params[0];
  const [email, setEmail] = React.useState("");
  const [telefone, setTelefone] = React.useState("");
  const [senha, setSenha] = React.useState("");

  return (
    <View style={styles.container}>
      <LogoHeader />

      <View style={styles.content}>
        <View style={styles.contentTitle}>
          <Image style={styles.iconUser} source={IllustrationUser} />
          <Text style={styles.title}>Dados Pessoais</Text>
        </View>

        <View style={styles.contentDatas}>
          <Text style={styles.datas}>EMAIL</Text>

          <View style={styles.contentPersonalDatas}>
            <TextInput
              style={styles.personalDatas}
              placeholder={user?.email}
              onChangeText={(email) => setEmail(email)}
            ></TextInput>
          </View>

          <Text style={styles.datas}>TELEFONE</Text>

          <View style={styles.contentPersonalDatas}>
            <TextInput
              style={styles.personalDatas}
              placeholder={user?.telefone}
              onChangeText={(telefone) => setTelefone(telefone)}
            ></TextInput>
          </View>

          <Text style={styles.datas}>Confirme sua senha</Text>

          <View style={styles.contentPersonalDatas}>
            <TextInput
              style={styles.personalDatas}
              placeholder="Senha"
              onChangeText={(senha) => setSenha(senha)}
              secureTextEntry={true}
            ></TextInput>
          </View>

          <View style={styles.buttonContainer}>
            <ButtonOk
              onPress={async () => {
                if (!(await isPasswordCorrect(user?.cpf, senha))) {
                  Alert.alert("Senha incorreta");
                  return;
                }
                if (!isEmailValid(email) && email != "") {
                  Alert.alert("Email inválido!");
                  return;
                }

                if (telefone.length < 11 || telefone.length > 11) {
                  Alert.alert("Telefone inválido!");
                  return;
                }

                await updateUser(user?.cpf, email, telefone);
                Alert.alert("Dados atualizados com sucesso!");
                navigation.navigate("Home", await getUserFromDB(user?.cpf));
              }}
            />
            <ButtonCancel onPress={() => navigation.goBack()} />
          </View>
        </View>

        <Footer />
      </View>
    </View>
  );
}

async function updateUser(cpf: string, email: string, telefone: string) {
  const db = require("../../../database/firebase");

  let user = {
    email: email,
    telefone: telefone,
  };

  let userOnDB = await getUserFromDB(cpf);

  user.email == "" ? (user.email = userOnDB.email) : null;
  user.telefone == "" ? (user.telefone = userOnDB.telefone) : null;

  await db.ref("users/" + cpf).update({
    email: user.email,
    telefone: user.telefone,
  });
}

async function getUserFromDB(cpf: string) {
  const db = require("../../../database/firebase");

  let user = await db.ref("users/" + cpf).once("value");

  return user.val();
}

function isEmailValid(email: string) {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2, 3})+$/;
  return reg.test(email) == true;
}

async function isPasswordCorrect(cpf: string, senha: string) {
  const db = require("../../../database/firebase");
  let result = await db
    .ref("/users/" + cpf)
    .once("value")
    .then(async (snap: any) => {
      return snap.val().senha == senha;
    });
  return result;
}
