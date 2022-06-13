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
import { editUserDB } from "../../../resources/userFunctions";

type ChangePasswordScreenProp = StackNavigationProp<
  RootStackParamList,
  "ChangePassword"
>;

export function EditUser() {
  const navigation = useNavigation<ChangePasswordScreenProp>();

  const [socialName, setSocialName]: any = React.useState(undefined);
  const [email, setEmail]: any = React.useState(undefined);
  const [telefone, setTelefone]: any = React.useState(undefined);
  const [senha, setSenha]: any = React.useState(undefined);

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
            <ButtonOkData
              onPress={async () => {
                if (senha === undefined) {
                  Alert.alert("Senha não pode ser vazia");
                  return;
                }
                let result = await editUserDB(
                  socialName,
                  email,
                  telefone,
                  senha
                );
                if (result == -1) {
                  Alert.alert("Senha incorreta");
                }
                if (result == 0) {
                  Alert.alert("Dados alterados com sucesso");
                  navigation.navigate("AnimTab");
                }
              }}
            />

            <ButtonCancelarData onPress={() => navigation.goBack()} />
          </View>
        </View>
      </View>
    </View>
  );
}
