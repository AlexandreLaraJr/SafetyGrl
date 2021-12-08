import React from "react";
import { View, Text, Image, StatusBar, TextInput } from "react-native";

import "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../RootStackPrams";

import IllustrationOff from "../../assets/icone_sair.png";
import IllustrationAlert from "../../assets/icone-_alert.png";
import IllustrationStatement2 from "../../assets/icone_depoimento.png";

import { styles } from "./styles";
import { LogoHeader } from "../../components/LogoHeader";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { Footer } from "../../components/Footer";
import {
  ButtonComplaint,
  ButtonUser,
  ButtonBack,
} from "../../components/ButtonHome";
import { ButtonStatement2 } from "../../components/ButtonStatement";

type ScreenProp = StackNavigationProp<RootStackParamList, "Statements2">;

export function Gambiarra() {
  const navigation = useNavigation<ScreenProp>();

  return (
    <View style={styles.container}>
      <LogoHeader />

      <View style={styles.content}>
        <View style={styles.contentTitle}>
          <Image style={styles.iconStatement} source={IllustrationStatement2} />
          <Text style={styles.title}>Depoimentos</Text>
        </View>
        <ButtonStatement2
          style={{
            marginTop: 50,
            height: 40,
            width: 240,
            backgroundColor: "#499ff5",
            borderRadius: 8,
            alignContent: "center",
            justifyContent: "center",
            paddingTop: 9,
            marginBottom: 7,
          }}
          onPress={() => navigation.navigate("Statements2")}
        />
        <ScrollView style={{ height: 700, marginTop: 10 }}>
          <View style={{ paddingBottom: 10 }}>
            <View style={styles.contentStatement}>
              <View style={styles.contentStatement2}>
                <Text style={styles.statementTitle}>Fulana de tal</Text>
                <ScrollView>
                  <Text style={styles.statement}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque euismod, urna eu porttitor consectetur, nisl
                    nisi consectetur nunc, eget porttitor nisl nisi consectetur
                    nunc. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Pellentesque euismod, urna eu porttitor consectetur,
                    nisl nisi consectetur nunc, eget porttitor nisl nisi
                    consectetur nunc. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Pellentesque euismod, urna eu porttitor
                    consectetur, nisl nisi consectetur nunc, eget porttitor nisl
                    nisi consectetur nunc.
                  </Text>
                </ScrollView>
              </View>

              <View style={styles.contentStatement2}>
                <Text style={styles.statementTitle}>Ciclana da Silva</Text>
                <Text style={styles.statement}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque euismod, urna eu porttitor consectetur, nisl nisi
                  consectetur nunc, eget porttitor nisl nisi consectetur nunc.
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <Footer />
    </View>
  );
}
