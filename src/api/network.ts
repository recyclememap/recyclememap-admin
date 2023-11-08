import axios from 'axios';
import { API_URL } from '@common/env';

// TODO: move baseUrl to ENV
export const api = axios.create({
  baseURL: `${API_URL}/api`,
  withCredentials: true
});
