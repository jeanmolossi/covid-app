import axios from "axios";
import apiConfig from "../config/api";

const api = axios.create({
  baseURL: "https://covid-19-data.p.rapidapi.com",
});

api.defaults.headers = {
  "content-type": "application/octet-stream",
  "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
  "x-rapidapi-key": apiConfig["x-rapidapi-key"],
  useQueryString: true,
};

api.defaults.params = {
  format: "json",
};

export default api;
