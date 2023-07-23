import axios from 'axios';

// TODO: move baseUrl to network
export const api = axios.create({
  baseURL: 'http://127.0.0.1:3102/api',
  withCredentials: true
});
