import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import * as RootNavigation from '../services/RootNavigation';
import { StatusCodes } from "http-status-codes";

const API_URL = "https://api.themoviedb.org/3/";
const TOKEN_STORAGE_KEY = "movie_app_token";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZmE3YzYxMzgxOGQzZmJmODcxNGI1YmU3ZjhjZjg0OCIsInN1YiI6IjY0ODY4OWUyZTM3NWMwMDBmZjQ5M2M5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4_jRsSRSdkgs-dYAPbx6X5N1zrApYM9fqiLrTBahS0A";

const API = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use(
  async function (config) {
    config.headers.Authorization = `Bearer ${token}`;

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
      //   RootNavigation.resetStackAndNavigate('Login');
    }
    return Promise.reject(error);
  }
);

export default API;
