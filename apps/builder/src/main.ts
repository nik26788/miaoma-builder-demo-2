import './style.css'

import { createApp } from 'vue'

// console.log('hello world')
import App from './App.vue'
import { initBlocks } from './blocks'
import router from './router'

createApp(App).use(router).use(initBlocks()).mount('#app')
