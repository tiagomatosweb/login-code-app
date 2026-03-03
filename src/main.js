import './style.css'
import { createApp } from 'vue'
import ui from '@nuxt/ui/vue-plugin'
import App from './App.vue'
import { router } from './router'
import { useAuth } from './composables/useAuth'

const { fetchUser } = useAuth()
await fetchUser()

const app = createApp(App)
app.use(ui)
app.use(router)
app.mount('#app')
