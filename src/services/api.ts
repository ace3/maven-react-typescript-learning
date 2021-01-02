import axios from 'axios';

export const BASE_URL :string = process.env.BASE_URL || 'https://api.jikan.moe/v3';

const instance = axios.create({
  baseURL:BASE_URL,
  timeout:5000,
});


export default instance;