import axios from "axios";

const tmdbClient = axios.create({
  baseURL: import.meta.env.VITE_TMDB_BASE_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
  },
  params: {
    language: "es-ES",
  },
});

export default tmdbClient;
