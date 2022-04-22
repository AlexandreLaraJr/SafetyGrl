import React from "react";
import { View, Text, Image, StatusBar, TextInput } from "react-native";

import "react-native-gesture-handler";
import IllustrationBell from "../../assets/icone-bell.png";

import { styles } from "./styles";
import { LogoHeader } from "../../components/LogoHeader";
import { ButtonClear } from "../../components/Notifications";

export function Notifications() {
  return (
    <View style={styles.container}>
      <LogoHeader />

      <View style={styles.content}>
        <View style={styles.contentTitle}>
          <Image style={styles.iconUser} source={IllustrationBell} />
          <Text style={styles.title}>Notificações</Text>
        </View>

        <ButtonClear />
      </View>
    </View>
  );
}
