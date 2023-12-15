import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost/4101',
});

export default api;