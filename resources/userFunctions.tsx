import AsyncStorage from "@react-native-async-storage/async-storage";
import db from "../database/firebase";
import { encrypt } from "./securePassword";
import { verifyCPFOnDb } from "./verifications";
import {
  isEmailValid,
  isPasswordValid,
  verifyEmailOnDb,
} from "./verifications";

/**
 *
 * Cria um usário no banco de dados baseado
 * nos parametros informados
 *
 * @param name Nome do usuário
 * @param socialName Nome Social do usuário
 * @param email Email do usuário
 * @param cpf CPF do usuário
 * @param telefone Telefone do usuário
 * @param senha Senha do usuário (não criptografada)
 * @param senha2 Confirmação de senha (não criptografada)
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
  let result: number | undefined = 0;
  cpf = cpf.replace(/[^\d]+/g, "");
  telefone = telefone.replace(/[^\d]+/g, "");
  let user = {
    name: name,
    socialName: socialName || "",
    email: email,
    cpf: cpf,
    telefone: telefone,
    senha: encrypt(senha),
  };

  result = await makeVerifications(senha, senha2, email, cpf, telefone, name);

  await db.ref("users/" + cpf).set(user); // cadastra usuario no banco de dados
  return { result, user };
}

/**
 *
 * Retorna um objeto JSON do banco de dados
 * baseado no CPF do usuário
 *
 * @param cpf CPF do usuário
 * @returns Promise<JSON>
 */
export async function getUserFromDB(cpf?: any) {
  if (typeof cpf === "undefined") {
    cpf = AsyncStorage.getItem("cpf").then((value) => {
      return value;
    });
  }
  let user: any = [];
  cpf = await cpf;
  await db
    .ref("users/" + cpf)
    .once("value")
    .then((snap: any) => {
      user.push(snap.val());
    });
  return user;
}
/**
 * Verifica se todos os dados são validos
 *
 * @returns Numero baseado nas verificações 0 = Todos os dados são validos
 */
export async function makeVerifications(
  senha: string,
  senha2: string,
  email: string,
  cpf: string,
  telefone: string,
  name: string
) {
  let result = 0;
  if (senha != senha2) result = -1; // senhas diferentes
  if (isPasswordValid(senha)) result = -2; // senha inválida.
  if (isEmailValid(email)) result = -3; // email invalido
  if (cpf.length != 11) result = -4; // cpf invalido
  if (telefone.length < 11 || telefone.length > 11) result = -5; // telefone invalido
  if (name.length < 3) result = -6; // nome muito curto
  if (await verifyCPFOnDb(cpf)) result = -7; // cpf ja cadastrado
  if (await verifyEmailOnDb(email)) result = -8; // email ja cadastrado

  return result;
}
