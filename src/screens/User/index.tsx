import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Image, Text, View } from "react-native";
import "react-native-gesture-handler";
import IllustrationUser from "../../assets/icone_user.png";
import {
  ButtonAlterarSenha,
  ButtonEditarDados,
} from "../../components/ButtonUser";
import { LogoHeader } from "../../components/LogoHeader";
import { RootStackParamList } from "../RootStackPrams";
import { styles } from "./styles";

type ChangePasswordScreenProp = StackNavigationProp<
  RootStackParamList,
  "ChangePassword"
>;

export function User() {
  const navigation = useNavigation<ChangePasswordScreenProp>();

  return (
    <View style={styles.container}>
      <LogoHeader />

      <View style={styles.content}>
        <View style={styles.contentTitle}>
          <Image style={styles.iconUser} source={IllustrationUser} />
          <Text style={styles.title}>Dados Pessoais</Text>
        </View>

        <View style={styles.contentDatas}>
          <Text style={styles.datas}>Nome</Text>

          <View style={styles.contentPersonalDatas}>
            <Text style={styles.personalDatas}>{/* Nome do usuário */}</Text>
          </View>

          <Text style={styles.datas}>E-mail</Text>

          <View style={styles.contentPersonalDatas}>
            <Text style={styles.personalDatas}>{/* Email do usuário */}</Text>
          </View>

          <Text style={styles.datas}>CPF</Text>

          <View style={styles.contentPersonalDatas}>
            <Text style={styles.personalDatas}>{/* CPF do usuário */}</Text>
          </View>

          <Text style={styles.datas}>Telefone</Text>

          <View style={styles.contentPersonalDatas}>
            <Text style={styles.personalDatas}>
              {/* Telefone do usuário */}
            </Text>
          </View>
        </View>

        <View style={styles.contentEdit}>
          <ButtonEditarDados
            onPress={() => {
              navigation.navigate("EditUser");
            }}
          />

          <ButtonAlterarSenha
            onPress={() => navigation.navigate("ChangePassword")}
          />
        </View>
      </View>
    </View>
  );
}
