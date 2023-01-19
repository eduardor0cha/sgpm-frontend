import axios from "axios";

const APIClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default APIClient;
