import AsyncStorage from "@react-native-async-storage/async-storage";
import db from "../database/firebase";
import { encrypt } from "./securePassword";
import { verifyCPFOnDb } from "./verifications";
import {
  isEmailValid,
  isPasswordValid,
  verifyEmailOnDb,
} from "./verifications";

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

export async function getUserFromDB() {
  let cpf: any = AsyncStorage.getItem("cpf").then((value) => {
    return value;
  });
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

async function makeVerifications(
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
