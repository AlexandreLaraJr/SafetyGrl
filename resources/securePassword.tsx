import * as Crypto from "expo-crypto";
import { useEffect, useState } from "react";

export function encrypt(password: string) {
  const [encrypted, setEncrypted] = useState("");
  useEffect(() => {
    (async () => {
      const digest = await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA256,
        password
      );
      setEncrypted(digest);
    })();
  }, []);
  return encrypted;
}
