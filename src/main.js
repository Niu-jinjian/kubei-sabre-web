import { createApp } from 'vue'
import '@/assets/styles/main.scss'
import App from './App.vue'
import router from './router'
import pinia from '@/stores/index'

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
