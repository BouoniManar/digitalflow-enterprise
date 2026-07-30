import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
  headers: {
    'Content-Type': 'application/json',
  },
  // Si tu utilises des cookies/sessions Django, active ceci :
  // withCredentials: true,
});

export default api;