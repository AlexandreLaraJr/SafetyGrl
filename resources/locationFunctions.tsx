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
  db.ref("/utils/")
    .once("value")
    .then((snap: DataSnapshot | any) => {
      db.ref("locations/" + snap.val().locationCounter).update({
        latitude: lat,
        longitude: lon,
        weight: 1,
      });
      db.ref("utils/").update({
        locationCounter: snap.val().locationCounter + 1,
      });
    });
}
