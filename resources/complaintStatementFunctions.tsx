const db = require("../database/firebase");
import { DataSnapshot } from "@firebase/database";

export async function createComplaintDb(
  crime: any,
  date: any,
  hour: any,
  location: any,
  altura: any,
  idade: any,
  misc: any
) {
  let uuid = await db
    .ref("/utils/")
    .once("value")
    .then((snap: DataSnapshot | any) => {
      return snap.val().complaintCounter;
    });
  db.ref("/complaints/" + uuid).set({
    crime: crime,
    date: date,
    hour: hour,
    location: location,
    altura: altura,
    idade: idade,
    misc: misc,
  });
}

export async function createStatementDb(text: string, user: string) {
  let uuid = await db
    .ref("/utils/")
    .once("value")
    .then((snap: DataSnapshot | any) => {
      return snap.val().statementCounter;
    });
  db.ref("/statements/" + uuid).set({
    text: text,
    user: user,
  });
}
