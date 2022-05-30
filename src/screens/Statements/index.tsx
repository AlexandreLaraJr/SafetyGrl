import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, View } from "react-native";
import "react-native-gesture-handler";
import IllustrationStatement2 from "../../assets/icone_depoimento.png";
import { ButtonStatement2 } from "../../components/ButtonStatement";
import { LogoHeader } from "../../components/LogoHeader";
import { styles } from "./styles";

export function Statements({ navigation }: any) {
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
    </View>
  );
}
