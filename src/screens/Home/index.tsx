import React, { useEffect, useState } from "react";

import {
  Image,
  Platform,
  RefreshControl,
  Text,
  TextInput,
  View,
} from "react-native";
import MapView, { Heatmap, PROVIDER_GOOGLE } from "react-native-maps";

import { styles } from "./styles";

import { LogoHeader } from "../../components/LogoHeader";

import IllustrationSearch from "../../assets/icon-search.png";

import { StackNavigationProp } from "@react-navigation/stack";
import { clearCreds, getLocalName } from "../../../resources/localCreds";
import { returnFromDB } from "../../../resources/locationFunctions";
import { ButtonUser } from "../../components/ButtonHome";
import { ButtonLogoff } from "../../components/Logoff";
import { RootStackParamList } from "../RootStackPrams";
import { ScrollView } from "react-native-gesture-handler";

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

  const wait = (timeout: any) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => {
      getPoints();
      setRefreshing(false);
    });
  }, []);

  useEffect(() => {
    getLocalCreds();
    getPoints();
  }, []);
  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.container}>
        <LogoHeader />
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

          <View
            style={{
              marginTop: "20%",
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
    </ScrollView>
  );
}
