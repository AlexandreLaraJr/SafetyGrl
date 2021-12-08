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

      <RectButton style={{ //backgroundColor: 'black',
                           top: -15,
                           width: 30,
                           height:10,
                           left: 30
      }}
         onPress={() => navigation.navigate("Home")}
      >

      </RectButton>
      <View style={styles.content}>
        
        <View style={styles.contentTitle}>
          <Image style={styles.iconStatement} source={IllustrationStatement2} />
          <Text style={styles.title}>Depoimentos</Text>
        </View>
        
        <ScrollView style={{ height: 700, marginTop: 50 }}>
          <View style={{ paddingBottom: 10 }}>
            <View style={styles.contentStatement}>
              <View style={styles.contentStatement2}>
                <Text style={styles.statementTitle}>Anônimo</Text>
                <ScrollView>
                  <Text style={styles.statement}>Depoimento teste</Text>
                </ScrollView>
              </View>
            </View>
          </View>
        </ScrollView>

        <ButtonStatement2
          onPress={() => navigation.goBack()}
        />
      </View>
      <Footer />
    </View>
  );
}
