import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import { createPinia } from 'pinia'
import clickOutside from './types/click-outside'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.directive('click-outside', clickOutside)

app.mount('#app')
