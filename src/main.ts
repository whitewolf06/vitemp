import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import ElementPlus from 'element-plus'
import { setupLayouts } from 'virtual:generated-layouts'
import App from './App.vue'
import 'element-plus/dist/index.css'
import './style.scss'

const router = createRouter({
  history: createWebHistory(),
  extendRoutes: routes => setupLayouts(routes),
})

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
