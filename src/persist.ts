const AsyncStorage = require("@react-native-community/async-storage")
var CryptoJS = require("crypto-js");

export async function save(key: string, snapshot: {},cryptoPassword:string) {
  const data = JSON.stringify(snapshot)
  await AsyncStorage.setItem(key, CryptoJS.AES.encrypt(data,cryptoPassword).toString())
}

export async function load(key: string,cryptoPassword:string) {
  try {
    const raw = await AsyncStorage.getItem(key)
    if (raw) {
      return JSON.parse(CryptoJS.AES.decrypt(raw,cryptoPassword).toString())
    }
  } catch {}

  return undefined
}
