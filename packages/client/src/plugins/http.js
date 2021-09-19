import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8001'

export default {
  install(app) {
    app.config.globalProperties.$http = axios
  }
}