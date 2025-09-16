// src/api/api.ts
import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:4000/api", // ✅ correcto
  headers: {
    "Content-Type": "application/json",
  },
});
