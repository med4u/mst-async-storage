const AsyncStorage = require("@react-native-community/async-storage")
var CryptoJS = require("crypto-js");

export async function save(key: string, snapshot: {},cryptoPassword:string) {
  const data = JSON.stringify(snapshot)
  await AsyncStorage.setItem(key, CryptoJS.AES.encrypt(data,cryptoPassword).toString())
}

export async function load(key: string,cryptoPassword:string) {
  try {
    const raw = await AsyncStorage.getItem(key)
    let bytes = CryptoJS.AES.decrypt(raw,cryptoPassword)
    let data = bytes.toString(CryptoJS.enc.Utf8)
    if (raw) {
      return JSON.parse(data)
    }
  } catch {
    console.log('erreur')
  }

  return undefined
}
