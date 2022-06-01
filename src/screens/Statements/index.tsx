import React from "react";
import { Image, Text, View } from "react-native";
import "react-native-gesture-handler";
import db from "../../../database/firebase";
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

        {async function test() {
          console.log(await getFromDB()); //quebrado
        }}

        <ButtonStatement2 onPress={() => navigation.navigate("Statements2")} />
      </View>
    </View>
  );
}

async function getFromDB() {
  let data: any = [];
  await db
    .ref("/statements")
    .once("value")
    .then((snap) => {
      snap.forEach((child) => {
        data.push(child.val().text, child.val().user);
      });
    });
  return data;
}
