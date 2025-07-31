import './style.css'

import { createApp } from 'vue'

// console.log('hello world')
import App from './App.vue'
import router from './router'
createApp(App).use(router).mount('#app')
