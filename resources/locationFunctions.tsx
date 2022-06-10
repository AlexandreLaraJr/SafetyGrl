const db = require("../database/firebase");
import { DataSnapshot } from "@firebase/database";
import { AnyTxtRecord } from "dns";

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

async function verifyLocationOnDB(lat: any, lon: any) {
  let isOnDB: boolean = false;
  await db
    .ref("locations/")
    .once("value")
    .then((snap: DataSnapshot) => {
      snap.forEach((child: any) => {
        if (child.val().latitude == lat && child.val().longitude == lon) {
          incrementWeigth(child.key);
          isOnDB = true;
        }
      });
    });
  return isOnDB;
}

async function incrementWeigth(key: any) {
  const weight = await db
    .ref(`locations/${key}`)
    .once("value")
    .then((snap: DataSnapshot | any) => {
      return snap.val().weight;
    });
  await db.ref(`locations/${key}`).update({ weight: weight + 0.1 });
}

export async function saveLocationDB(lat: any, lon: any) {
  if (!lat || !lon) {
    return;
  }
  lat = parseFloat(lat);
  lon = parseFloat(lon);
  if (!(await verifyLocationOnDB(lat, lon))) {
    db.ref("/utils/")
      .once("value")
      .then((snap: DataSnapshot | any) => {
        db.ref("locations/" + snap.val().locationCounter).update({
          latitude: lat,
          longitude: lon,
          weight: 0.1,
        });
        db.ref("utils/").update({
          locationCounter: snap.val().locationCounter + 1,
        });
      });
  }
}

export async function getPointsFromDB() {
  const points: any[] = [];
  await db
    .ref("/locations/")
    .once("value")
    .then((snap: DataSnapshot | any) => {
      snap.forEach((child: any) => {
        points.push({
          latitude: child.val().latitude,
          longitude: child.val().longitude,
          weight: child.val().weight,
        });
      });
    });
  return points;
}

export async function returnFromDB() {
  return await getPointsFromDB();
}
