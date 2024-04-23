import axios, { Axios } from "axios";

const instance: Axios = axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export { instance };
