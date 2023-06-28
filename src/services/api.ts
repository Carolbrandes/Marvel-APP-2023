import axios from "axios"
import Md5 from "md5"

const apikey = import.meta.env.VITE_PUBLIC_API_KEY
const privateKey = import.meta.env.VITE_PRIVATE_API_KEY
const time = Number(new Date())
const hash = Md5(time + privateKey + apikey)
const baseURL = import.meta.env.VITE_BASE_URL


export const ApiMarvel = {
    getCharacters: () => axios.get(`${baseURL}/characters?apikey=${apikey}&ts=${time}&hash=${hash}`)
}