import React from "react";
import { Image, View } from "react-native";

import IllustrationImgLogo from "../../assets/Logo_app.png";
import IllustrationImgNameLogo from "../../assets/SafetyGrl2.png";
import { ButtonBack } from "../ButtonHome";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../screens/RootStackPrams";

import { styles } from "./styles";
type ScreenProp = StackNavigationProp<RootStackParamList>;

export function LogoHeader() {
  const navigation = useNavigation<ScreenProp>();
  return (
    <View style={styles.container}>
      <ButtonBack
        onPress={() => {
          if (
            navigation.getState().routes[
              navigation.getState().routes.length - 1
            ].name == "Home"
          ) {
            return;
          }
          navigation.goBack();
        }}
      />
      <View style={styles.containerLogo}>
        <Image style={styles.logo} source={IllustrationImgLogo} />
        <Image style={styles.nameLogo} source={IllustrationImgNameLogo} />
      </View>
    </View>
  );
}
