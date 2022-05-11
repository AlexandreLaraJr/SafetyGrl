import React from "react";
import { View, Text, Image, TextInput, ScrollView } from "react-native";

import "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";

import { RootStackParamList } from "../RootStackPrams";
import IllustrationSearch from "../../assets/icon-search.png";

import { styles } from "./styles";
import { LogoHeader } from "../../components/LogoHeader";
import { ButtonUser } from "../../components/ButtonHome";
import { ButtonLogoff } from "../../components/Logoff";

import { getUserFromDB } from "../../../resources/userFunctions";
import { User } from "../User";
import { SignIn } from "../SignIn";

type userScreenProp = StackNavigationProp<RootStackParamList, "User">;

function HomeScreen({ navigation }: any) {
  const user: any = getUserFromDB();

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

      <ScrollView style={styles.content2}>
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

        <View style={styles.subContent2}></View>
      </ScrollView>
    </View>
  );
}

export function Home() {
  const stackNavigator = createStackNavigator();
  return (
    <stackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <stackNavigator.Screen name="HomeScreen" component={HomeScreen} />
      <stackNavigator.Screen name="User" component={User} />
      <stackNavigator.Screen name="SignIn" component={SignIn} />
    </stackNavigator.Navigator>
  );
}
