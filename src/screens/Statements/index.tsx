import React from "react";
import { View, Text, Image } from "react-native";

import "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../RootStackPrams";

import IllustrationStatement2 from "../../assets/icone_depoimento.png";

import { styles } from "./styles";
import { LogoHeader } from "../../components/LogoHeader";
import { Footer } from "../../components/Footer";
import { ButtonStatement2 } from "../../components/ButtonStatement";

type ScreenProp = StackNavigationProp<RootStackParamList, "Statements2">;

export function Statements() {
  const navigation = useNavigation<ScreenProp>();

  return (
    <View style={styles.container}>
      <LogoHeader />

      <View style={styles.content}>
        <View style={styles.contentTitle}>
          <Image style={styles.iconStatement} source={IllustrationStatement2} />
          <Text style={styles.title}>Depoimentos</Text>
        </View>

        <ButtonStatement2 onPress={() => navigation.navigate("Statements2")} />
      </View>
      <Footer />
    </View>
  );
}
