import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackNavigationProp } from "@react-navigation/stack";
import db from "../database/firebase";
import { RootStackParamList } from "../src/screens/RootStackPrams";

type createAccountScreenProp = StackNavigationProp<
  RootStackParamList,
  "CreateAccount"
>;

/***
 * Checks the property '@user:login' in local storage, if true goes to home screen
 * @param navigation - navigation prop
 */
export function checkLogin({ navigation }: createAccountScreenProp) {
  AsyncStorage.getItem("@user:login").then((login) => {
    if (login) navigation.navigate("Home");
  });
}

/***
 * Creates local storage credentials for the user
 * @param {identifier} identifier email or cpf
 * @param {name} Name Optional, stores name
 * @param {socialName} SocialName Optional, stores social name
 */
export function setCredentials(
  identifier: string,
  name?: string,
  socialName?: string
): void {
  AsyncStorage.setItem("@utils:isLoggedIn", "true");
  AsyncStorage.setItem("@user:identifier", identifier);
  if (typeof name !== "undefined") {
    AsyncStorage.setItem("@user:name", name);
  }
  if (typeof socialName !== "undefined") {
    AsyncStorage.setItem("@user:socialName", socialName);
  }
}

/***
 * Gets the property 'name' from '@user:name' in local storage
 * @returns returns the identifier of the user
 */
export async function getLocalName() {
  if (!(await AsyncStorage.getItem("@user:socialName"))) {
    if (!(await AsyncStorage.getItem("@user:name"))) {
      return await db
        .ref("users/" + (await AsyncStorage.getItem("@user:identifier")))
        .once("value")
        .then(function (snapshot) {
          return snapshot.val().name;
        });
    }
  }
}
