import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect } from "react";
import { Image, RefreshControl, ScrollView, Text, View } from "react-native";
import "react-native-gesture-handler";
import { getLocalCPF } from "../../../resources/localCreds";
import { getUserFromDB } from "../../../resources/userFunctions";
import IllustrationUser from "../../assets/icone_user.png";
import {
  ButtonAlterarSenha,
  ButtonEditarDados,
} from "../../components/ButtonUser";
import { LogoHeader } from "../../components/LogoHeader";
import { RootStackParamList } from "../RootStackPrams";
import { styles } from "./styles";

type ChangePasswordScreenProp = StackNavigationProp<
  RootStackParamList,
  "ChangePassword"
>;

export function User() {
  const navigation = useNavigation<ChangePasswordScreenProp>();
  const [user, setUser]: any = React.useState();

  const wait = (timeout: any) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => {
      getData();
      setRefreshing(false);
    });
  }, []);

  const getData = async () => {
    setUser(await getUserFromDB(await getLocalCPF()));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <LogoHeader />

      <View style={styles.content}>
        <View style={styles.contentTitle}>
          <Image style={styles.iconUser} source={IllustrationUser} />
          <Text style={styles.title}>Dados Pessoais</Text>
        </View>

        <View style={styles.contentDatas}>
          <Text style={styles.datas}>Nome</Text>
          <View style={styles.contentPersonalDatas}>
            <Text style={styles.personalDatas}>
              {typeof user == "undefined"
                ? console.log("Deu undef no user")
                : user[0].name}
            </Text>
          </View>

          <Text style={styles.datas}>E-mail</Text>

          <View style={styles.contentPersonalDatas}>
            <Text style={styles.personalDatas}>
              {typeof user == "undefined"
                ? console.log("Deu undef no user")
                : user[0].email}
            </Text>
          </View>

          <Text style={styles.datas}>CPF</Text>

          <View style={styles.contentPersonalDatas}>
            <Text style={styles.personalDatas}>
              {typeof user == "undefined"
                ? console.log("Deu undef no user")
                : user[0].cpf}
            </Text>
          </View>

          <Text style={styles.datas}>Telefone</Text>

          <View style={styles.contentPersonalDatas}>
            <Text style={styles.personalDatas}>
              {typeof user == "undefined"
                ? console.log("Deu undef no user")
                : user[0].telefone}
            </Text>
          </View>
        </View>

        <View style={styles.contentEdit}>
          <ButtonEditarDados
            onPress={() => {
              navigation.navigate("EditUser");
            }}
          />

          <ButtonAlterarSenha
            onPress={() => navigation.navigate("ChangePassword")}
          />
        </View>
      </View>
    </ScrollView>
  );
}
