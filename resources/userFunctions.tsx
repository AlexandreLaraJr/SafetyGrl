import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackNavigationProp } from "@react-navigation/stack";
import db from "../database/firebase";
import { RootStackParamList } from "../src/screens/RootStackPrams";
import { encrypt } from "./securePassword";
import {
  verifyCPFOnDb,
  isEmailValid,
  isPasswordValid,
  verifyEmailOnDb,
} from "./verifications";

/**
 *
 * Cria um usário no banco de dados baseado
 * nos parametros informados
 *
 * @returns Promise<number, JSON>
 */
export async function createUserDB(
  name: string,
  socialName: string | null,
  email: string,
  cpf: string,
  telefone: string,
  senha: string,
  senha2: string
): Promise<any> {
  let result: number = 0;
  cpf = cpf.replace(/[^\d]+/g, ""); //Remove pontuações
  telefone = telefone.replace(/[^\d]+/g, ""); //Remove pontuações

  let user = {
    name: name,
    socialName: socialName || "",
    email: email,
    cpf: cpf,
    telefone: telefone,
    senha: await encrypt(senha),
  };

  result = await makeVerificationsCreate(
    senha,
    senha2,
    email,
    cpf,
    telefone,
    name
  );

  if (result == 0) await db.ref("users/" + cpf).set(user); // cadastra usuario no banco de dados
  return { result, user };
}

/**
 *
 * Retorna um objeto JSON do banco de dados
 * baseado no CPF do usuário
 *
 * @param {identifier} identifier email ou cpf
 * @returns Promise<JSON>
 */
export async function getUserFromDB(identifier?: any) {
  if (typeof identifier === "undefined") {
    identifier = AsyncStorage.getItem("@user:identifier").then((value) => {
      return value;
    });
  }
  let user: any = [];
  identifier = await identifier;
  await db
    .ref("users/" + identifier)
    .once("value")
    .then((snap: any) => {
      user.push(snap.val());
    });
  return user;
}

/**
 * Verifica se todos os dados são validos
 * para criar uma conta nova
 *
 * @returns Numero baseado nas verificações 0 = Todos os dados são validos
 */
export async function makeVerificationsCreate(
  senha: string,
  senha2: string,
  email: string,
  cpf: string,
  telefone: string,
  name: string
) {
  let result = 0;
  if (senha != senha2) result = -1; // senhas diferentes
  if (!isPasswordValid(senha)) result = -2; // senha inválida.
  if (!isEmailValid(email)) result = -3; // email invalido
  if (cpf.length != 11) result = -4; // cpf invalido
  if (telefone.length < 11 || telefone.length > 11) result = -5; // telefone invalido
  if (name.length < 3) result = -6; // nome muito curto
  if (await verifyCPFOnDb(cpf)) result = -7; // cpf ja cadastrado
  if (await verifyEmailOnDb(email)) result = -8; // email ja cadastrado

  return result;
}

/**
 * Checks database for user
 *
 * @param {identifier} identifier uuid of the user
 *
 * @returns {boolean} Boolean based on the existence of the user
 */
export async function validLogin(
  identifier: string,
  login: string,
  password: string
) {
  let result = false;
  db.ref("users/" + identifier)
    .once("value")
    .then((snap: any) => {
      if (snap.val().cpf == login) {
        if (snap.val().senha == encrypt(password)) {
          result = true;
        }
      }
    });
  return result;
}
