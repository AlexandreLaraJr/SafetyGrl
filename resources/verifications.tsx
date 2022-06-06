const db = require("../database/firebase");

export function isEmailValid(email: string) {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return reg.test(email);
}

export function isPasswordValid(password: string) {
  let reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  return reg.test(password);
}

export async function updatePasswordOnDB(cpf: string, password: string) {
  await db.ref("users/" + cpf).update({ senha: password });
}

/***
 * @param {string} password: Must be the hashed password
 *
 * @returns {Promise<boolean>} Promise<boolean>
 */
export async function verifyPasswordOnDB(
  identifier: string,
  password: string
): Promise<boolean> {
  return await db
    .ref("users/" + identifier)
    .once("value")
    .then((snap: any) => {
      if (snap.val().senha == password) {
        return true;
      } else return false;
    });
}

export async function verifyCPFOnDb(cpf: string) {
  return await db
    .ref("users/" + cpf)
    .once("value")
    .then((snap: any) => {
      return snap.child("cpf").exists();
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
