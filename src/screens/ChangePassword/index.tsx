import React, { useEffect } from "react";
import { Text, TextInput, View } from "react-native";
import "react-native-gesture-handler";

import { LogoHeader } from "../../components/LogoHeader";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../RootStackPrams";

import { Alert } from "react-native";
import {
  isPasswordValid,
  updatePasswordOnDB,
  verifyPasswordOnDB,
} from "../../../resources/verifications";
import { ButtonCancelar, ButtonOk } from "../../components/ButtonComplaint";
import { styles } from "./styles";
import { encrypt } from "../../../resources/securePassword";
import { getLocalCPF } from "../../../resources/localCreds";

type ScreenProp = StackNavigationProp<RootStackParamList>;

export function ChangePassword() {
  const navigation = useNavigation<ScreenProp>();
  const [cpf, setCpf] = React.useState("");
  const [psswd, setPsswd] = React.useState("");
  const [NewPwd, setNewPwd] = React.useState("");
  const [NewPwd2, setNewPwd2] = React.useState("");

  const getLocalCreds = async () => {
    let localcpf: any = await getLocalCPF();
    setCpf(localcpf);
  };

  useEffect(() => {
    getLocalCreds();
  });

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
                let correct = 1;
                if (await verifyPasswordOnDB(cpf, await encrypt(psswd))) {
                  if (NewPwd == NewPwd2 && isPasswordValid(NewPwd)) {
                    await updatePasswordOnDB(cpf, await encrypt(NewPwd));
                  } else {
                    Alert.alert("Senhas não conferem!");
                    correct = 0;
                  }
                } else {
                  Alert.alert("Senha incorreta!");
                  correct = 0;
                }
                if (correct == 1) {
                  Alert.alert("Senha alterada com sucesso");
                  navigation.goBack();
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
