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
import {
  ButtonComplaint,
  ButtonUser,
  ButtonStatement,
} from "../../components/ButtonHome";
import { ButtonLogoff } from "../../components/Logoff";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUserFromDB } from "../../../resources/userFunctions";

type userScreenProp = StackNavigationProp<RootStackParamList, "User">;

export function Home() {
  const user: any = getUserFromDB();
  const navigation = useNavigation<userScreenProp>();
  return (
    <View style={styles.container}>
      <LogoHeader />

      <View style={styles.content}>
        <ButtonUser
          onPress={async () => {
            navigation.navigate("User", await getUserFromDB());
          }}
        />

        <Text style={styles.textName}>
          Olá! {user?.socialName == "" ? user?.name : user?.socialName}
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
          <Image style={styles.iconSearch} source={IllustrationSearch} />
            
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
    </View>
  );
}
