import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import "react-native-gesture-handler";
import db from "../../../database/firebase";
import IllustrationStatement2 from "../../assets/icone_depoimento.png";
import { ButtonStatement2 } from "../../components/ButtonStatement";
import { LogoHeader } from "../../components/LogoHeader";
import { styles } from "./styles";

export function Statements({ navigation }: any) {
  const [data, setData]: any = useState();

  const getFromDB = async () => {
    await db
      .ref("/statements")
      .once("value")
      .then((snap) => {
        setData(snap.val());
      });
  };

  useEffect(() => {
    getFromDB();
  }, []);
  return (
    <View style={styles.container}>
      <LogoHeader />

      <View style={styles.content}>
        <View style={styles.contentTitle}>
          <Image style={styles.iconStatement} source={IllustrationStatement2} />
          <Text style={styles.title}>Depoimentos</Text>
        </View>

        <View style={styles.contentStatement}>
          {typeof data == "undefined"
            ? console.log("Deu undefined")
            : data.map((item: any, index: number) => {
                return (
                  <View key={index} style={styles.contentStatementItem}>
                    <Text style={styles.contentStatementTextTitle}>
                      {item.user}
                    </Text>
                    <Text style={styles.contentStatementText}>{item.text}</Text>
                  </View>
                );
              })}
        </View>

        <ButtonStatement2 onPress={() => navigation.navigate("Statements2")} />
      </View>
    </View>
  );
}
