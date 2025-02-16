import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/api/v1",
  headers: {
    "Content-type": "application/json"
  }
});

export const axios2 = axios.create({
  baseURL: "http://localhost:8081/api/v2",
  headers: {
    "Content-type": "application/json"
  }
});