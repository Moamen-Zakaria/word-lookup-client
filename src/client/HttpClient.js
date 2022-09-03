import { default as standardAxios } from "axios";

const axios = standardAxios;
// axios.defaults.baseURL = process.env.LOOKUP_API_URI;
axios.defaults.baseURL = 'http://localhost:8080';

export default axios;
