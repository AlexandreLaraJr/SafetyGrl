import React from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  Button,
  TextInput,
  Alert,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../RootStackPrams";

import { ButtonCreateAccount } from "../../components/ButtonIconCreateAccount";

import { styles } from "./styles";
import { LogoHeader } from "../../components/LogoHeader";

import db from "../../../database/firebase";
type HomeScreenProp = StackNavigationProp<RootStackParamList, "Home">;

export function CreateAccount() {
  const navigation = useNavigation<HomeScreenProp>();

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [cpf, setCpf] = React.useState("");
  const [telefone, setTelefone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  return (
    <View style={styles.container}>
      <LogoHeader />

      <View style={styles.content2}>
        <Text style={styles.NameData}>Nome</Text>

        <TextInput
          style={styles.inputData}
          returnKeyType="next"
          placeholder="Digite seu nome"
          onChangeText={(name) => setName(name)}
        />

        <Text style={styles.NameData}>Email</Text>

        <TextInput
          style={styles.inputData}
          returnKeyType="next"
          keyboardType="email-address"
          placeholder="Digite seu email"
          onChangeText={(email) => setEmail(email)}
        />

        <Text style={styles.NameData}>CPF</Text>

        <TextInput
          style={styles.inputData}
          returnKeyType="next"
          placeholder="Digite seu CPF sem pontuação"
          keyboardType="numeric"
          onChangeText={(cpf) => setCpf(cpf)}
        />

        <Text style={styles.NameData}>Telefone</Text>

        <TextInput
          style={styles.inputData}
          returnKeyType="next"
          placeholder="Digite seu telefone com o ddd sem parenteses e sem espaços"
          onChangeText={(telefone) => setTelefone(telefone)}
        />

        <Text style={styles.NameData}>Senha</Text>

        <TextInput
          style={styles.inputData}
          returnKeyType="next"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />

        <Text style={styles.NameData}>Confirmar senha</Text>

        <TextInput
          style={styles.inputData}
          returnKeyType="next"
          secureTextEntry={true}
          onChangeText={(confirmPassword) =>
            setConfirmPassword(confirmPassword)
          }
        />
      </View>

      <ButtonCreateAccount
        onPress={async () => {
          let statusCode = await createUserDB(
            name,
            email,
            cpf,
            telefone,
            password,
            confirmPassword
          );

          switch (statusCode) {
            case 0:
              Alert.alert(
                "Usuário criado com sucesso, por favor faça o login para continuar"
              );
              break;
            case -1:
              Alert.alert("Erro", "As senhas não coincidem");
              break;
            case -2:
              Alert.alert(
                "Erro",
                `A senha deve ter:
                Mínimo de 8 caracteres
                1 letra maiúscula
                1 letra minúscula
                1 caractere especial
                1 número`
              );
              break;
            case -3:
              Alert.alert("Erro", "Email inválido");
              break;
            case -4:
              Alert.alert("Erro", "CPF inválido");
              break;
            case -5:
              Alert.alert("Erro", "Telefone inválido");
              break;
            case -6:
              Alert.alert("Erro", "Nome muito curto");
              break;
            case -7:
              Alert.alert("Erro", "CPF já cadastrado");
              break;
            case -8:
              Alert.alert("Erro", "Email já cadastrado");
              break;
          }
        }}
      />
    </View>
  );
}

async function createUserDB(
  name: string,
  email: string,
  cpf: string,
  telefone: string,
  senha: string,
  senha2: string
) {
  cpf = cpf.replace(/[^\d]+/g, "");
  telefone = telefone.replace(/[^\d]+/g, "");
  if (senha != senha2) return -1; // senhas diferentes
  if (isPasswordValid(senha)) return -2; // senha inválida.
  if (isEmailValid(email)) return -3; // email invalido
  if (cpf.length != 11) return -4; // cpf invalido
  if (telefone.length < 11 || telefone.length > 11) return -5; // telefone invalido
  if (name.length < 3) return -6; // nome muito curto
  let user = {
    name: name,
    email: email,
    cpf: cpf,
    telefone: telefone,
    senha: senha,
  };

  if (await verifyCPFOnDb(user.cpf)) return -7; // cpf ja cadastrado
  if (await verifyEmailOnDb(user.email)) return -8; // email ja cadastrado

  await db.ref("users/" + cpf).set(user); // cadastra usuario no banco de dados
  return 0; // sucesso
}

async function verifyCPFOnDb(cpf: string) {
  if (cpf.length != 11) return -4; // cpf invalido;
  let isOnDB: boolean | Promise<any> = false;
  isOnDB = await db
    .ref("users")
    .once("value")
    .then((snap) => {
      return snap.forEach((child) => {
        if (child.val().cpf == cpf) return true;
      });
    });
  return isOnDB;
}

async function verifyEmailOnDb(email: string) {
  let isOnDB: boolean | Promise<any> = false;
  isOnDB = await db
    .ref("users")
    .once("value")
    .then((snap) => {
      return snap.forEach((child) => {
        if (child.val().email == email) return true;
      });
    });
  return isOnDB;
}

function isEmailValid(email: string) {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return reg.test(email) == false;
}

function isPasswordValid(password: string) {
  let reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  return reg.test(password) == false;
}
