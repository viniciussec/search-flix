import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import * as RootNavigation from '../services/RootNavigation';
import { StatusCodes } from "http-status-codes";
import { API_URL, MOVIE_DB_TOKEN, TOKEN_STORAGE_KEY } from "../utils/constants";

const API = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use(
  async function (config) {
    config.headers.Authorization = `Bearer ${MOVIE_DB_TOKEN}`;

    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

API.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const firstLogin = await AsyncStorage.getItem("first_login");
    const currentPage = await AsyncStorage.getItem("current_page");
    if (
      currentPage !== "Login" &&
      firstLogin &&
      firstLogin === "false" &&
      error.response &&
      error.response.status === StatusCodes.UNAUTHORIZED
    ) {
      AsyncStorage.removeItem(TOKEN_STORAGE_KEY);
      AsyncStorage.setItem("session_expired", "true");
    }
    return Promise.reject(error);
  }
);

export default API;
