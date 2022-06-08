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
export async function checkLogin() {
  return await AsyncStorage.getItem("@utils:isLoggedIn");
}

/***
 * Creates local storage credentials for the user
 * @param {identifier} identifier cpf
 * @param {name} Name Optional, stores name
 * @param {socialName} SocialName Optional, stores social name
 */
export async function setCredentials(
  identifier: string,
  name?: string,
  socialName?: string
): Promise<void> {
  await AsyncStorage.setItem("@utils:isLoggedIn", "true");
  await AsyncStorage.setItem("@user:identifier", identifier);
  if (typeof name !== "undefined") {
    await AsyncStorage.setItem("@user:name", name);
  }
  if (typeof socialName !== "undefined") {
    await AsyncStorage.setItem("@user:socialName", socialName);
  }
}

/***
 * Gets the values of '@user:name' or '@user:socialName' if exists in local storage
 * @returns returns the name on the local storage
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
    return await AsyncStorage.getItem("@user:name");
  }
  return await AsyncStorage.getItem("@user:socialName");
}

export function clearCreds() {
  AsyncStorage.clear().then(() => {
    console.log("cleared");
  });
}
