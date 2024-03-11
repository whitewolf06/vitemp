import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import ElementPlus from 'element-plus'
import App from './App.vue'

import './styles/tailwind.scss'
import 'element-plus/dist/index.css'
import './styles/main.scss'

const router = createRouter({
  history: createWebHistory(),
})

const app = createApp(App)

app.use(router)
app.use(ElementPlus)

app.mount('#app')
