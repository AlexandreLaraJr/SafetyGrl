import React from "react";
import { View,ScrollView , Text, Image, Switch, } from "react-native";
import "react-native-gesture-handler";
import { LogoHeader } from "../../components/LogoHeader";
import IllustrationSettings from "../../assets/icone-settings.png";
import IllustrationBell from "../../assets/icone-bell.png";
import IllustrationMaps from "../../assets/icone_mapa.png";
import IllustrationPhone from "../../assets/akar-icons_phone.png";

import { styles } from "./styles";

export function Settings() {
  const [isEnabled1, setIsEnabled1] = React.useState(false);
  const [isEnabled2, setIsEnabled2] = React.useState(false);
  const [isEnabled3, setIsEnabled3] = React.useState(false);
  const [isEnabled4, setIsEnabled4] = React.useState(false);
  const [isEnabled5, setIsEnabled5] = React.useState(false);
  const [isEnabled6, setIsEnabled6] = React.useState(false);
  const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);
  const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState);
  const toggleSwitch3 = () => setIsEnabled3((previousState) => !previousState);
  const toggleSwitch4 = () => setIsEnabled4((previousState) => !previousState);
  const toggleSwitch5 = () => setIsEnabled5((previousState) => !previousState);
  const toggleSwitch6 = () => setIsEnabled6((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <LogoHeader />

      <ScrollView style={styles.content}>
        <View style={styles.contentTitle}>
          <Image style={styles.icon} source={IllustrationSettings} />
          <Text style={styles.title}>Configurações</Text>
        </View>

        <View style={styles.content2}>
          <View style={styles.contentItems}>
            <Image style={styles.icon2} source={IllustrationBell} />
            <Text style={styles.items}>Notificações</Text>
          </View>

          <View style={styles.contentItem2}>
            <Text style={styles.text}>Mostrar notificações</Text>

            <Switch
              style={styles.button}
              trackColor={{ false: "#767577", true: "#32CD32" }}
              thumbColor={isEnabled1 ? "#f4f3f4" : "#f4f3f4"}
              onChange={toggleSwitch1}
              value={isEnabled1}
            />
          </View>

          <View style={styles.contentItem2}>
            <Text style={styles.text}>Mostrar pré-visualização</Text>
            <Switch
              style={styles.button}
              trackColor={{ false: "#767577", true: "#32CD32" }}
              thumbColor={isEnabled2 ? "#f4f3f4" : "#f4f3f4"}
              onChange={toggleSwitch2}
              value={isEnabled2}
            />
          </View>

          <View style={styles.contentItem2}>
            <Text style={styles.text}>Som</Text>
            <Switch
              style={styles.button}
              trackColor={{ false: "#767577", true: "#32CD32" }}
              thumbColor={isEnabled3 ? "#f4f3f4" : "#f4f3f4"}
              onChange={toggleSwitch3}
              value={isEnabled3}
            />
          </View>

          <View style={styles.contentItems}>
            <Image style={styles.icon2} source={IllustrationMaps} />
            <Text style={styles.items}>Região</Text>
          </View>

          <View style={styles.contentItem2}>
            <Text style={styles.text}>Definir localização padrão</Text>
            <Switch
              style={styles.button}
              trackColor={{ false: "#767577", true: "#32CD32" }}
              thumbColor={isEnabled4 ? "#f4f3f4" : "#f4f3f4"}
              onChange={toggleSwitch4}
              value={isEnabled4}
            />
          </View>

          <View style={styles.contentItem2}>
            <Text style={styles.text}>Usar localização atual</Text>
            <Switch
              style={styles.button}
              trackColor={{ false: "#767577", true: "#32CD32" }}
              thumbColor={isEnabled5 ? "#f4f3f4" : "#f4f3f4"}
              onChange={toggleSwitch5}
              value={isEnabled5}
            />
          </View>

          <View style={styles.contentItems}>
            <Image style={styles.icon2} source={IllustrationPhone} />
            <Text style={styles.items}>Chamadas</Text>
          </View>

          <View style={styles.contentItem2}>
            <Text style={styles.text}>
              Permitir acesso às chamadas {"\n"}
              (Recomendado)
            </Text>
            <Switch
              style={styles.button}
              trackColor={{ false: "#767577", true: "#32CD32" }}
              thumbColor={isEnabled6 ? "#f4f3f4" : "#f4f3f4"}
              onChange={toggleSwitch6}
              value={isEnabled6}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
