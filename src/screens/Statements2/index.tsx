import React, { useState } from "react";
import { View, Text, Image, TextInput, Alert,KeyboardAvoidingView } from "react-native";

import "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../RootStackPrams";

import IllustrationStatement2 from "../../assets/icone_depoimento.png";

import { styles } from "./styles";
import { LogoHeader } from "../../components/LogoHeader";
import { ButtonCancelar, ButtonOk } from "../../components/ButtonStatement2";
import { Checkbox } from "react-native-paper";
import { theme } from "../../global/styles/theme";
import { createStatementDb } from "../../../resources/complaintStatementFunctions";
import { getLocalName } from "../../../resources/localCreds";

type ScreenProp = StackNavigationProp<RootStackParamList>;

export function Statements2() {
  const navigation = useNavigation<ScreenProp>();
  const [text, setText] = useState("");
  const [toggleCheckBox, setToggleCheckBox] = useState(true);

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <LogoHeader />

      <View style={styles.content}>
        <View style={styles.contentTitle}>
          <Image style={styles.iconStatement} source={IllustrationStatement2} />
          <Text style={styles.title}>Realizar Depoimento</Text>
        </View>

        <View style={styles.contentStatement}>
          <Text style={styles.data}>Depoimento</Text>

          
          <TextInput
            style={styles.inputData2}
            onChangeText={(newText) => setText(newText)}
          />

          <Text style={styles.statement}>
            Seu depoimento é muito importante! Ele pode ajudar outras vitimas a se fortalerecem.
          </Text>
          <View>
            <Checkbox
              status={toggleCheckBox ? "checked" : "unchecked"}
              onPress={() => setToggleCheckBox(!toggleCheckBox)}
              color={'black'}
            />
          </View>
            <Text style={{ fontSize: 16, color: "black", marginTop: '-11%', marginLeft: '13%' }}>
              Denuncia Anônima
            </Text>
        </View>

        <View style={styles.buttons}>
          <ButtonOk
            onPress={async () => {
              let name = await getLocalName();
              let user: any = toggleCheckBox ? "Anônimo" : name;
              await createStatementDb(text, user);
              Alert.alert("Depoimento enviado com sucesso!");
              navigation.navigate("AnimTab");
            }}
          />
          <ButtonCancelar onPress={() => navigation.goBack()} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
