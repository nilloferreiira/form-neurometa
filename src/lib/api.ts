import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-neurometa.onrender.com/",
  // baseURL: 'http://localhost:3333/'
});
