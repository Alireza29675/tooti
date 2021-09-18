import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import http from './plugins/http'

createApp(App).use(router).use(http).mount('#app')
