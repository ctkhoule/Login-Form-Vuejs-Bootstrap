import { createApp } from 'vue'
import App from './App.vue'

// Chemin Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

// Chemin CSS global
import '@/assets/css/main.css'

import router from './router'

createApp(App).use(router).mount('#app')
