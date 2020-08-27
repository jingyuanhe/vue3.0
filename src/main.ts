import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router/index'
import store from './router/index'
createApp(App).use(router).use(store).mount('#app')
