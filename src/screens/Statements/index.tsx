import React, { useEffect, useState } from "react";
import { Image, RefreshControl, Text, View } from "react-native";
import "react-native-gesture-handler";
import { ScrollView } from "react-native-gesture-handler";
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

  const wait = (timeout: any) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => {
      getFromDB();
      setRefreshing(false);
    });
  }, []);

  useEffect(() => {
    getFromDB();
  }, []);
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.container}>
        <LogoHeader />

        <View style={styles.content}>
          <View style={styles.contentTitle}>
            <Image
              style={styles.iconStatement}
              source={IllustrationStatement2}
            />
            <Text style={styles.title}>Depoimentos</Text>
          </View>

          <ScrollView style={styles.contentStatement}>
            {typeof data == "undefined"
              ? console.log("Deu undefined em data no statements")
              : data.map((item: any, index: number) => {
                  return (
                    <View key={index} style={styles.contentStatementItem}>
                      <Text style={styles.contentStatementTextTitle}>
                        {item.user}
                      </Text>
                      <Text style={styles.contentStatementText}>
                        {item.text}
                      </Text>
                    </View>
                  );
                })}
          </ScrollView>

          <ButtonStatement2
            onPress={() => navigation.navigate("Statements2")}
          />
        </View>
      </View>
    </ScrollView>
  );
}
