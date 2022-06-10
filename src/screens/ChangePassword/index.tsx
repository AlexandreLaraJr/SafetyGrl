import React from "react";
import { Text, TextInput, View } from "react-native";
import "react-native-gesture-handler";

import { LogoHeader } from "../../components/LogoHeader";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../RootStackPrams";

import { Alert } from "react-native";
import {
  updatePasswordOnDB,
  verifyPasswordOnDB,
} from "../../../resources/verifications";
import { ButtonCancelar, ButtonOk } from "../../components/ButtonComplaint";
import { styles } from "./styles";

type ScreenProp = StackNavigationProp<RootStackParamList>;

export function ChangePassword(pUser: any) {
  const navigation = useNavigation<ScreenProp>();
  const [psswd, setPsswd] = React.useState("");
  const [NewPwd, setNewPwd] = React.useState("");
  const [NewPwd2, setNewPwd2] = React.useState("");

  return (
    <View style={styles.container}>
      <LogoHeader />

      <View style={styles.content}>
        <Text style={styles.title}>Alterar Senha</Text>

        <View style={styles.content2}>
          <Text style={styles.items}>Digite a senha atual:</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            onChangeText={(psswd) => setPsswd(psswd)}
          />
          <Text style={styles.items}>Digite a nova senha:</Text>

          <TextInput
            style={styles.input}
            secureTextEntry={true}
            onChangeText={(password) => setNewPwd(password)}
          />
          <Text style={styles.items}>Confirme a nova senha:</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            onChangeText={(password) => setNewPwd2(password)}
          />
          <View style={styles.buttons}>
            <ButtonOk
              onPress={async () => {
                if (await verifyPasswordOnDB(pUser.route.params.cpf, psswd)) {
                  if (NewPwd == NewPwd2) {
                    updatePasswordOnDB(pUser.route.params.cpf, NewPwd);
                  } else {
                    Alert.alert("Senhas não conferem!");
                  }
                } else {
                  Alert.alert("Senha incorreta!");
                }
              }}
            />
            <ButtonCancelar onPress={() => navigation.goBack()} />
          </View>
        </View>
      </View>
    </View>
  );
}
