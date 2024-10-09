import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4444',
})

export default instance

//https://axios-http.com/ru/docs/intro


