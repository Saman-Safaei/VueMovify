import axios from "axios";

const api = axios.create({
    baseURL: "https://moviesapi.ir/api/v1",
    timeout: 10000,
});

export { api };
