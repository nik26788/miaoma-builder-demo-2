import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

// console.log('hello world')
import App from './App.vue'
import { initBlocks } from './blocks'
import directives from './directives'
import router from './router'

const pinia = createPinia()
const blocks = initBlocks()

createApp(App).use(router).use(pinia).use(directives).use(blocks).mount('#app')
