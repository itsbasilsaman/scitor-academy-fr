import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.scitoracademy.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
