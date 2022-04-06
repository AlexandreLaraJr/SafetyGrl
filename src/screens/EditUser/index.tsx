import React from "react";
import { View, Text, Image, TextInput } from "react-native";

import "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../RootStackPrams";

import IllustrationUser from "../../assets/icone_user.png";

import { styles } from "./styles";
import { LogoHeader } from "../../components/LogoHeader";
import { Footer } from "../../components/Footer";
import {
  ButtonAlterarSenha,
  ButtonEditarDados,
} from "../../components/ButtonUser";
import { ButtonCancelar, ButtonOk } from "../../components/ButtonComplaint";

type ChangePasswordScreenProp = StackNavigationProp<
  RootStackParamList,
  "ChangePassword"
>;

export function EditUser(dbUser: any) {
  const navigation = useNavigation<ChangePasswordScreenProp>();

  console.log(dbUser);
  let user = dbUser?.route?.params.route?.params[0];

  return (
    <View style={styles.container}>
      <LogoHeader />

      <View style={styles.content}>
        <View style={styles.contentTitle}>
          <Image style={styles.iconUser} source={IllustrationUser} />
          <Text style={styles.title}>Dados Pessoais</Text>
        </View>

        <View style={styles.contentDatas}>
          <Text style={styles.datas}>NOME</Text>

          <View style={styles.contentPersonalDatas}>
            <TextInput
              style={styles.personalDatas}
              placeholder={user?.name}
            ></TextInput>
          </View>

          <Text style={styles.datas}>EMAIL</Text>

          <View style={styles.contentPersonalDatas}>
            <TextInput
              style={styles.personalDatas}
              placeholder={user?.email}
            ></TextInput>
          </View>

          <Text style={styles.datas}>CPF</Text>

          <View style={styles.contentPersonalDatas}>
            <TextInput
              style={styles.personalDatas}
              placeholder={user?.cpf}
            ></TextInput>
          </View>

          <Text style={styles.datas}>TELEFONE</Text>

          <View style={styles.contentPersonalDatas}>
            <TextInput
              style={styles.personalDatas}
              placeholder={user?.telefone}
            ></TextInput>
          </View>
        </View>

        <View style={styles.contentEdit}>
          <ButtonOk />
          <ButtonCancelar />
        </View>
      </View>

      <Footer />
    </View>
  );
}
