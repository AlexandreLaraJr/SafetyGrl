import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Linking, Text, View } from "react-native";
import "react-native-gesture-handler";
import { ButtonConfirm } from "../../components/ButtonConfirm";
import { ButtonCancelar } from "../../components/ButtonSOS";
import { LogoHeader } from "../../components/LogoHeader";
import { RootStackParamList } from "../RootStackPrams";
import { styles } from "./styles";

export function Sos({ navigation }: StackNavigationProp<RootStackParamList>) {
  return (
    <View style={styles.container}>
      <LogoHeader />

      <View style={styles.content}>
        <View style={styles.contentTitle}>
          <Text style={styles.title}>
            Chamada S.O.S
          </Text>
          <Text style={styles.text}>
            SOS Ativado
          </Text>
          {/*<ButtonConfirm style={styles.callButton}
            onPress={async () => await Linking.openURL("tel:190")}
          />
  <ButtonCancelar onPress={() => navigation.goBack()} />*/}
        </View>
      </View>
    </View>
  );
}
