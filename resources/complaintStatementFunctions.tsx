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
  db.ref("/utils/")
    .once("value")
    .then((snap: DataSnapshot | any) => {
      if (typeof snap.val().complaintCounter == "undefined") {
        db.ref("/utils/").update({
          complaintCounter: 1,
        });
      }
      db.ref("/complaints/" + snap.val().complaintCounter).set({
        crime: crime,
        date: date,
        hour: hour,
        location: location,
        altura: altura,
        idade: idade,
        misc: misc,
      });
      db.ref("/utils/").update({
        complaintCounter: snap.val().complaintCounter + 1,
      });
    });
}

export function createStatementDb(text: string, user: string) {
  db.ref("/utils/")
    .once("value")
    .then((snap: DataSnapshot | any) => {
      if (typeof snap.val().statementCounter == "undefined") {
        db.ref("/utils/").update({
          statementCounter: 1,
        });
      }
      db.ref("/statements/" + snap.val().statementCounter).set({
        text: text,
        user: user,
      });
      db.ref("/utils/").update({
        statementCounter: snap.val().statementCounter + 1,
      });
    });
}
