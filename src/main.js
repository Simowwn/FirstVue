import './assets/main.css'
import axios from "axios";

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

axios.defaults.baseURL = import.meta.env.VITE_API_URL || "http://localhost:8000";
axios.defaults.withCredentials = true;

axios.get("/api/users/")
    .then(response => console.log(response.data))
    .catch(error => console.log(error));