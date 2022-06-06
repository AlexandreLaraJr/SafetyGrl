const db = require("../database/firebase");
import { DataSnapshot } from "@firebase/database";
export async function getAddFromApi(address: any) {
  address = address.replace(/\s/g, "+");
  try {
    let response = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${address}&format=json`
    );
    let json = await response.json();
    return json[0];
  } catch (error) {}
}

export async function saveLocationDB(lat: string, lon: string) {
  if (!lat || !lon) {
    return;
  }
  let counter = await db
    .ref("/utils/")
    .once("value")
    .then((snap: DataSnapshot | any) => {
      return snap.val().locationCounter;
    });
  db.ref("locations/" + counter)
    .update({
      latitude: lat,
      longitude: lon,
      weight: 1,
    })
    .then(async () => {
      await db.ref("utils/").update({
        locationCounter: counter + 1,
      });
    });
}
