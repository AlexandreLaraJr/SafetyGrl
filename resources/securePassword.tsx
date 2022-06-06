import * as Crypto from "expo-crypto";

export function encrypt(password: string) {
  return (async () => {
    const digest = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      password
    );
    return digest;
  })();
}
