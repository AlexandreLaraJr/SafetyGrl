import React from "react";
import { View, Text, Image, TextInput } from "react-native";

import "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../RootStackPrams";

import IllustrationSearch from "../../assets/icon-search.png";

import { styles } from "./styles";
import { LogoHeader } from "../../components/LogoHeader";
import { RectButton } from "react-native-gesture-handler";
import { Footer } from "../../components/Footer";
import {
  ButtonComplaint,
  ButtonUser,
  ButtonStatement,
} from "../../components/ButtonHome";
import { ButtonLogoff } from "../../components/Logoff";

import db from "../../../database/firebase";

import AsyncStorage from "@react-native-async-storage/async-storage";

type userScreenProp = StackNavigationProp<RootStackParamList, "User">;

export function Home(user: any) {
  const navigation = useNavigation<userScreenProp>();
  console.log(user);
  return (
    <View style={styles.container}>
      <LogoHeader />

      <View style={styles.content}>
        <ButtonUser
          onPress={async () => {
            console.log(await getUserFromDB());
            navigation.navigate("User", await getUserFromDB());
          }}
        />

        <Text style={styles.textName}>
          Olá!{" "}
          {user?.route.params.socialName == ""
            ? user?.route.params.name
            : user?.route.params.socialName}
        </Text>

        <ButtonLogoff
          onPress={() => {
            AsyncStorage.clear();
            navigation.navigate("SignIn");
          }}
        />
      </View>

      <View style={styles.content2}>
        <Text style={styles.title}>Áreas de Risco</Text>

        <View style={styles.contentSearch}>
          <TextInput style={styles.search} />
          <RectButton style={styles.rectSearch}>
            <Image style={styles.iconSearch} source={IllustrationSearch} />
          </RectButton>
        </View>

        <View
          style={{
            alignSelf: "center",
            marginTop: 10,
            borderRadius: 10,
            overflow: "hidden",
          }}
        >
          <Text> Mapa quebrado atualmente </Text>
        </View>

        <Text style={styles.textNameRegiao}>Região de Santos/SP</Text>

        <View style={styles.subContent2}>
          <ButtonComplaint onPress={() => navigation.navigate("Complaint")} />

          <ButtonStatement onPress={() => navigation.navigate("Statements")} />
        </View>
      </View>
      <Footer />
    </View>
  );
}

async function getUserFromDB() {
  let cpf: any = AsyncStorage.getItem("cpf").then((value) => {
    return value;
  });
  let user: any = [];
  cpf = await cpf;
  await db
    .ref("users/" + cpf)
    .once("value")
    .then((snap) => {
      user.push(snap.val());
    });
  return user;
}
