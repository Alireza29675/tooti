import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8001'

axios.interceptors.response.use((response) => {
  return response.data?.data;
}, (error) => {
  return Promise.reject(error);
})

export default {
  install(app) {
    app.config.globalProperties.$http = axios
  }
}