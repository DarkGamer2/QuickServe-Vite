// FILE: src/services/api.js
import axios from 'axios';

const API_URL = 'https://quickserve-api-production.up.railway.app/api';

const register = (email: string, password: string, role: string,skillset:string[]) => {
  return axios.post(`${API_URL}/auth/register`, { email, password, role,skillset });
};

const login = (email: string, password: string) => {
  return axios.post(`${API_URL}/auth/login`, { email, password });
};

const getJobs = (token: string) => {
  return axios.get(`${API_URL}/jobs`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export default {
  register,
  login,
  getJobs,
};