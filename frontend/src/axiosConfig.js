import axios from 'axios';

axios.defaults.baseURL =
  process.env.NODE_ENV !== 'production' ? 'https://food-app-4dwl.vercel.app' || "http://localhost:5000" : '/';
