const db = require("../database/firebase");

export function isEmailValid(email: string) {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return reg.test(email) == false;
}

export function isPasswordValid(password: string) {
  let reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  return reg.test(password) == true;
}

export async function updatePasswordOnDB(cpf: string, password: string) {
  await db.ref("users/" + cpf).update({ senha: password });
}
export async function verifyPasswordOnDB(
  cpf: string,
  password: string
): Promise<any> {
  return await db
    .ref("users/" + cpf)
    .once("value")
    .then((snap: any) => {
      if (snap.val().senha == password) {
        return true;
      } else return false;
    });
}

export async function verifyEmailOnDb(email: string): Promise<boolean> {
  let isOnDB: boolean | Promise<any> = false;
  isOnDB = await db
    .ref("users")
    .once("value")
    .then((snap: any[]) => {
      return snap.forEach((child) => {
        if (child.val().email == email) return true;
      });
    });
  return isOnDB;
}

export async function verifyCPFOnDb(cpf: string) {
  if (cpf.length != 11) return -4; // cpf invalido;
  let isOnDB: boolean | Promise<any> = false;
  isOnDB = await db
    .ref("users")
    .once("value")
    .then((snap: any[]) => {
      return snap.forEach((child) => {
        if (child.val().cpf == cpf) return true;
      });
    });
  return isOnDB;
}