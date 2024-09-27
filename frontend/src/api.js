// O axios é um pacote do node que serve para fazer requisições http, isso quer dizer que para usar a nossa API, a 
// Gente vai usar o Axios, que vai facilitar a gnt de pegar as informações da nossa API escrita em python.
// Essas linhas abaixo são basicamente a configuração do axios
import axios from "axios"
import { ACCESS_TOKEN } from "./constants"

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN)
        if (token){
            config.headers.Authorization = `Brearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default api