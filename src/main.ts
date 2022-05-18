import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import { createPinia } from 'pinia'
import clickOutside from './types/click-outside'
import { worker } from './mocks/browser.js'

if (process.env.NODE_ENV === 'development') {
    worker.start()
    console.warn('MSW started!')
}

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.directive('click-outside', clickOutside)

app.mount('#app')
