import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

const apiUrl = "/choreo-apis/awbo/backend/rest-api-be2/v1.0";

const api = axios.create({
  baseURL: import.meta.env.LARAVEL_API_BASE_URL ? import.meta.env.LARAVEL_API_BASE_URL : apiUrl,
  headers: {
    'Content-Type': 'application/json',
  }
});

export default api;