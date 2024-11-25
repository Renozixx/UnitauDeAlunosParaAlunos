import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

const apiUrl = "/choreo-apis/awbo/backend/rest-api-be2/v1.0";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiUrl,
  headers: {
    'Content-Type': 'application/json',
  }
});

api.interceptors.request.use(
  (config) => {
    // Liste as URLs que não devem incluir o token
    const publicEndpoints = ['/api/Posts/', `/api/Post/`, '/api/public-endpoint/'];

    if (publicEndpoints.some(endpoint => config.url.includes(endpoint))) {
      // Não adiciona o token se a URL estiver na lista de endpoints públicos
      return config;
    }

    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;