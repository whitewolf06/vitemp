import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import App from './App.vue'

import './style.scss'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
})

const app = createApp(App)
app.use(router)
app.mount('#app')
