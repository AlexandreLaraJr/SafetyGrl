import React from "react";
import { View, Text, Image, StatusBar, TextInput } from "react-native";

import "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../RootStackPrams";

import IllustrationStatement2 from "../../assets/icone_depoimento.png";

import { styles } from "./styles";
import { LogoHeader } from "../../components/LogoHeader";
import { RectButton } from "react-native-gesture-handler";
import { Footer } from "../../components/Footer";
import { ButtonCancelar, ButtonOk } from "../../components/ButtonStatement2";

type ScreenProp = StackNavigationProp<RootStackParamList>;

export function Statements2() {
  const navigation = useNavigation<ScreenProp>();

  return (
    <View style={styles.container}>
      <LogoHeader />

      <View style={styles.content}>
        <View style={styles.contentTitle}>
          <Image style={styles.iconStatement} source={IllustrationStatement2} />
          <Text style={styles.title}>Realizar Depoimento</Text>
        </View>

        <View style={styles.contentStatement}>
          <Text style={styles.data}>Nome</Text>

          <TextInput style={styles.inputData} />

          <Text style={styles.subtitle}>* Seu depoimento é anônimo *</Text>

          <Text style={styles.data}>Depoimento</Text>

          <TextInput style={styles.inputData2} />

          <Text style={styles.statement}>
            Seu depoimento é muito importante e pode ajudar outras vitimas a se
            fortalerecem.
          </Text>
        </View>

        <View style={styles.buttons}>
          <ButtonOk onPress={() => navigation.navigate("Gambiarra")} />
          <ButtonCancelar onPress={() => navigation.goBack()} />
        </View>
      </View>
      <Footer />
    </View>
  );
}
