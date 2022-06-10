/*
TODO:
- Logo
- Icone notificações
- Usuario
- Barra de Pesquisa
- Botão logout
- Mapa
*/

import React, { useEffect, useState } from "react";

import { View, Image, Text, TextInput, Platform } from "react-native";
import MapView, {
  Heatmap,
  PROVIDER_GOOGLE,
  WeightedLatLng,
} from "react-native-maps";

import { styles } from "./styles";

import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { LogoHeader } from "../../components/LogoHeader";

import IllustrationNotification from "../../assets/icone-bell.png";
import IllustrationSearch from "../../assets/icon-search.png";

import { ButtonUser } from "../../components/ButtonHome";
import { ButtonLogoff } from "../../components/Logoff";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../RootStackPrams";
import { clearCreds, getLocalName } from "../../../resources/localCreds";
import {
  getPointsFromDB,
  returnFromDB,
} from "../../../resources/locationFunctions";
import db from "../../../database/firebase";

let points = [
  { latitude: 40.7828, longitude: -74.0065, weight: 1 },
  { latitude: 41.7121, longitude: -74.0042, weight: 1 },
  { latitude: 40.7102, longitude: -75.006, weight: 1 },
  { latitude: 40.7123, longitude: -74.0052, weight: 1 },
  { latitude: 40.7032, longitude: -74.0042, weight: 1 },
  { latitude: 40.7198, longitude: -74.0024, weight: 1 },
  { latitude: 41.7223, longitude: -74.0053, weight: 1 },
  { latitude: 40.7181, longitude: -74.0042, weight: 1 },
  { latitude: 40.7124, longitude: -74.0023, weight: 1 },
  { latitude: 40.7648, longitude: -74.0012, weight: 1 },
  { latitude: 41.7128, longitude: -74.0027, weight: 1 },
  { latitude: 40.7223, longitude: -74.0153, weight: 1 },
  { latitude: 40.7193, longitude: -74.0052, weight: 1 },
  { latitude: 40.7241, longitude: -75.0013, weight: 1 },
  { latitude: 41.7518, longitude: -74.0085, weight: 1 },
  { latitude: 40.7599, longitude: -74.0093, weight: 1 },
  { latitude: 41.7523, longitude: -74.0021, weight: 1 },
  { latitude: 40.7342, longitude: -74.0152, weight: 1 },
  { latitude: 40.7484, longitude: -75.0042, weight: 1 },
  { latitude: 40.7929, longitude: -75.0023, weight: 1 },
  { latitude: 40.7292, longitude: -74.0013, weight: 1 },
  { latitude: 40.794, longitude: -74.0048, weight: 1 },
  { latitude: 40.7874, longitude: -74.0052, weight: 1 },
  { latitude: 40.7824, longitude: -74.0024, weight: 1 },
  { latitude: 40.7232, longitude: -74.0094, weight: 1 },
  { latitude: 41.7342, longitude: -74.0152, weight: 1 },
  { latitude: 41.7484, longitude: -74.0012, weight: 1 },
  { latitude: 41.7929, longitude: -74.0073, weight: 1 },
  { latitude: 41.7292, longitude: -74.0013, weight: 1 },
  { latitude: 41.794, longitude: -74.0058, weight: 1 },
  { latitude: 41.7874, longitude: -74.0352, weight: 1 },
  { latitude: 41.7824, longitude: -74.0024, weight: 1 },
  { latitude: 41.7232, longitude: -74.0094, weight: 1 },
  { latitude: 41.0342, longitude: -75.0152, weight: 1 },
  { latitude: 41.0484, longitude: -75.0012, weight: 1 },
  { latitude: 41.0929, longitude: -75.0073, weight: 1 },
  { latitude: 41.0292, longitude: -74.0013, weight: 1 },
  { latitude: 41.094, longitude: -74.0068, weight: 1 },
  { latitude: 41.0874, longitude: -74.0052, weight: 1 },
  { latitude: 41.0824, longitude: -74.0024, weight: 1 },
  { latitude: 41.0232, longitude: -74.0014, weight: 1 },
];

type ScreenProp = StackNavigationProp<RootStackParamList>;

export function Home({ navigation }: ScreenProp) {
  const [search, setSearch] = React.useState("");
  const [data, setData]: any = useState();
  const [points, setPoints]: any = useState([
    { latitude: -23.9426566, longitude: -46.3263839, weight: 1 },
  ]);

  const getLocalCreds = async () => {
    let localName = await getLocalName();
    localName = localName.split(" ")[0];
    setData(localName);
  };

  const getPoints = async () => {
    let pointsDB: any = await returnFromDB();
    setPoints(pointsDB);
  };

  useEffect(() => {
    getLocalCreds();
    getPoints();
  }, []);
  return (
    <View style={styles.container}>
      <LogoHeader />
      <ButtonNotification />
      <View style={styles.content}>
        <ButtonUser
          onPress={() => {
            navigation.navigate("User");
          }}
        />
        {typeof data == "undefined" ? (
          console.log("Deu undefined em data na home")
        ) : (
          <Text>Olá {data}</Text> //aqui eh o text do Olá usuário
        )}
        <ButtonLogoff
          onPress={() => {
            clearCreds();
            navigation.navigate("SignIn");
          }}
        />
      </View>
      <View style={styles.content2}>
        <Text style={styles.titulos}>Áreas de Risco</Text>
        <View style={styles.contentSearch}>
          <TextInput
            style={styles.searchBar}
            placeholder="Digite outra região, bairro, cidade..."
            onChangeText={(text) => setSearch(text)}
          />
          <Image style={styles.iconSearch} source={IllustrationSearch} />
        </View>
        <View
          style={{
            alignSelf: "center",
            marginBottom: 90,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: "black",
            overflow: "hidden",
          }}
        >
          <MapView
            style={styles.contentMap}
            provider={PROVIDER_GOOGLE}
            region={{
              latitude: -23.9426566,
              longitude: -46.3263839,
              latitudeDelta: 0.009,
              longitudeDelta: 0.035,
            }}
          >
            <Heatmap
              points={points}
              opacity={0.5}
              radius={40}
              gradient={{
                colors: ["white", "green", "yellow", "orange", "red"],
                startPoints:
                  Platform.OS === "ios"
                    ? [0.01, 0.04, 0.1, 0.45, 0.5]
                    : [0.1, 0.25, 0.5, 0.75, 1],
                colorMapSize: 2000,
              }}
            ></Heatmap>
          </MapView>
        </View>
      </View>
    </View>
  );
}

function ButtonNotification({ ...rest }: RectButtonProps) {
  return (
    <RectButton {...rest}>
      <Image
        style={styles.iconNotification}
        source={IllustrationNotification}
      />
    </RectButton>
  );
}
