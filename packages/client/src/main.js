import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'

import router from './router'
import http from './plugins/http'

createApp(App)
  .use(ElementPlus)
  .use(router)
  .use(http)
  .mount('#app')
