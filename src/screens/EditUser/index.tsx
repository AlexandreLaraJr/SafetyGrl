import React from "react";
import { View, Text, Image, TextInput, Alert } from "react-native";

import "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../RootStackPrams";

import IllustrationUser from "../../assets/icone_user.png";
import {
  ButtonOkData,
  ButtonCancelarData,
} from "../../components/ButtonChangePersonalData";
import { styles } from "./styles";
import { LogoHeader } from "../../components/LogoHeader";

type ChangePasswordScreenProp = StackNavigationProp<
  RootStackParamList,
  "ChangePassword"
>;

export function EditUser() {
  const navigation = useNavigation<ChangePasswordScreenProp>();

  const [socialName, setSocialName] = React.useState("");
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
          <Text style={styles.datas}>Nome Social</Text>

          <View style={styles.contentPersonalDatas}>
            <TextInput
              style={styles.personalDatas}
              onChangeText={(socialName) => setSocialName(socialName)}
            ></TextInput>
          </View>

          <Text style={styles.datas}>E-mail</Text>

          <View style={styles.contentPersonalDatas}>
            <TextInput
              style={styles.personalDatas}
              onChangeText={(email) => setEmail(email)}
            ></TextInput>
          </View>

          <Text style={styles.datas}>Telefone</Text>

          <View style={styles.contentPersonalDatas}>
            <TextInput
              style={styles.personalDatas}
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
            <ButtonOkData />

            <ButtonCancelarData onPress={() => navigation.goBack()} />
          </View>

        </View>
      </View>
    </View>
  );
}
