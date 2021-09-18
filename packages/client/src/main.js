import { createApp } from 'vue'
import App from './App.vue'

import http from './plugins/http'

createApp(App).use(http).mount('#app')
