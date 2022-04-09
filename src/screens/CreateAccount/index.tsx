import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Alert, Text, TextInput, View } from "react-native";
import db from "../../../database/firebase";
import { ButtonCreateAccount } from "../../components/ButtonIconCreateAccount";
import { LogoHeader } from "../../components/LogoHeader";
import { RootStackParamList } from "../RootStackPrams";
import { createUserDB } from "../../../resources/userFunctions";
import { styles } from "./styles";

type HomeScreenProp = StackNavigationProp<RootStackParamList, "Home">;

export function CreateAccount() {
  const navigation = useNavigation<HomeScreenProp>();

  const [name, setName] = React.useState("");
  const [socialName, setSocialName] = React.useState("");
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

        <Text style={styles.NameData}>Nome Social (opcional)</Text>

        <TextInput
          style={styles.inputData}
          returnKeyType="next"
          placeholder="Digite seu nome social"
          onChangeText={(socialName) => setSocialName(socialName)}
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
            socialName || null,
            email,
            cpf,
            telefone,
            password,
            confirmPassword
          );
          switchStatusCode(statusCode, navigation);
        }}
      />
    </View>
  );
}

function switchStatusCode(statusCode: any, navigation: HomeScreenProp) {
  switch (statusCode["result"]) {
    case 0:
      Alert.alert("Usuário criado com sucesso!");
      navigation.navigate("Home", statusCode["user"]);
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
}

export async function verifyCPFOnDb(cpf: string) {
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
