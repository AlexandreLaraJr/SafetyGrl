import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Alert, Image, ScrollView, Text, TextInput, View } from "react-native";
import "react-native-gesture-handler";
import { createComplaintDb } from "../../../resources/complaintStatementFunctions";
import {
  getAddFromApi,
  saveLocationDB,
} from "../../../resources/locationFunctions";
import IllustrationMapa from "../../assets/icone-mapa.png";
import IllustrationAlert from "../../assets/icone-_alert_1.png";
import { ButtonCancelar, ButtonOk } from "../../components/ButtonComplaint";
import { LogoHeader } from "../../components/LogoHeader";
import { RootStackParamList } from "../RootStackPrams";
import { styles } from "./styles";

type ScreenProp = StackNavigationProp<RootStackParamList>;

export function Complaint() {
  const navigation = useNavigation<ScreenProp>();
  const [crime, setCrime] = React.useState("");
  const [date, setDate] = React.useState("");
  const [hour, setHour] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [altura, setAltura] = React.useState("");
  const [idade, setIdade] = React.useState("");
  const [misc, setMisc] = React.useState("");

  return (
    <View style={styles.container}>
      <LogoHeader />

      <ScrollView style={styles.content}>
        <View style={styles.contentTitle}>
          <Image style={styles.iconAlert} source={IllustrationAlert} />
          <Text style={styles.title}>Realizar Denúncia</Text>
        </View>

        <View style={styles.content2}>
          <View style={styles.contentItems}>
            <Text style={styles.items}>Descrição do crime:</Text>
            <Text style={styles.textRed}>*</Text>
          </View>

          <View style={styles.contentIcon}>
            <TextInput
              style={styles.input}
              onChangeText={(crime) => setCrime(crime)}
            />
          </View>

          <View style={styles.content3}>
            <View>
              <View style={styles.contentItems}>
                <Text style={styles.items}>Data:</Text>
                <Text style={styles.textRed}>*</Text>
              </View>

              <View style={styles.contentIcon}>
                <TextInput
                  style={styles.inputHalf}
                  onChangeText={(date) => setDate(date)}
                />
              </View>
            </View>

            <View style={styles.content5}>
              <View style={styles.contentItems}>
                <Text style={styles.items}>Horário:</Text>
                <Text style={styles.textRed}>*</Text>
              </View>

              <View style={styles.contentIcon}>
                <TextInput
                  style={styles.inputHalf}
                  onChangeText={(hour) => setHour(hour)}
                />
              </View>
            </View>
          </View>

          <View>
            <View style={styles.contentItems}>
              <Text style={styles.items}>Local:</Text>
              <Text style={styles.textRed}>*</Text>
            </View>

            <View style={styles.contentIcon}>
              <TextInput
                style={styles.input}
                onChangeText={(location) => setLocation(location)}
                textContentType="location"
              />
              <Image style={styles.icon} source={IllustrationMapa} />
            </View>
          </View>

          <Text style={styles.title2}>Características do agressor</Text>

          <View style={styles.content3}>
            <View>
              <View style={styles.contentItems}>
                <Text style={styles.items}>Altura:</Text>
              </View>

              <View style={styles.contentIcon}>
                <TextInput
                  style={styles.inputHalf}
                  onChangeText={(altura) => setAltura(altura)}
                  keyboardType="numeric"
                />
              </View>
            </View>

            <View style={styles.content5}>
              <View style={styles.contentItems}>
                <Text style={styles.items}>Idade:</Text>
              </View>

              <View style={styles.contentIcon}>
                <TextInput
                  style={styles.inputHalf}
                  onChangeText={(idade) => setIdade(idade)}
                  keyboardType="numeric"
                />
              </View>
            </View>
          </View>

          <Text style={styles.contentItems}>Outros:</Text>

          <View style={styles.contentIcon}>
            <TextInput
              style={styles.input}
              placeholder=" Roupas, cor da pele, cor do cabelo"
              onChangeText={(misc) => setMisc(misc)}
            />
          </View>

          <View style={styles.buttons}>
            <ButtonOk
              onPress={async () => {
                if (crime == "" || date == "" || hour == "" || location == "") {
                  Alert.alert("Preencha todos os campos!");
                } else {
                  await createComplaintDb(
                    crime,
                    date,
                    hour,
                    location,
                    altura,
                    idade,
                    misc
                  );
                  let lat = await getAddFromApi(location);
                  let lon = await getAddFromApi(location);
                  lat = lat.lat;
                  lon = lon.lon;
                  await saveLocationDB(lat, lon);
                  Alert.alert("Denúncia realizada com sucesso!");
                  navigation.goBack();
                }
              }}
            />
            <ButtonCancelar onPress={() => navigation.goBack()} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
