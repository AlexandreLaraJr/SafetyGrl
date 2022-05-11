import React from "react";
import { View, Text, Image, TextInput } from "react-native";

import "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../RootStackPrams";

import IllustrationUser from "../../assets/icone_user.png";

import { styles } from "./styles";
import { LogoHeader } from "../../components/LogoHeader";
import {
  ButtonAlterarSenha,
  ButtonEditarDados,
} from "../../components/ButtonUser";

type ChangePasswordScreenProp = StackNavigationProp<
  RootStackParamList,
  "ChangePassword"
>;

export function User(dbUser: any) {
  const navigation = useNavigation<ChangePasswordScreenProp>();
  let user = dbUser?.route?.params[0];

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
            <Text style={styles.personalDatas}>
              {user?.name ? user.name : "ERRO"}
            </Text>
          </View>

          <Text style={styles.datas}>EMAIL</Text>

          <View style={styles.contentPersonalDatas}>
            <Text style={styles.personalDatas}>{user?.email}</Text>
          </View>

          <Text style={styles.datas}>CPF</Text>

          <View style={styles.contentPersonalDatas}>
            <Text style={styles.personalDatas}>{user?.cpf}</Text>
          </View>

          <Text style={styles.datas}>TELEFONE</Text>

          <View style={styles.contentPersonalDatas}>
            <Text style={styles.personalDatas}>{user?.telefone}</Text>
          </View>
        </View>

        <View style={styles.contentEdit}>
          <ButtonEditarDados
            onPress={() => {
              navigation.navigate("EditUser", dbUser);
            }}
          />

          <ButtonAlterarSenha
            onPress={() => navigation.navigate("ChangePassword", user)}
          />
        </View>
      </View>
    </View>
  );
}
