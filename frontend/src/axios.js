import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4444',
})

//Вы можете перехватывать запросы или ответы до того, как они будут then или catch.
// Добавляем перехват запросов//https://axios-http.com/ru/docs/interceptors
instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem('token')
  return config
})

export default instance

//https://axios-http.com/ru/docs/intro


