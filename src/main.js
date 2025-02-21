import './assets/main.css'
import axios from "axios";
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// Set Axios Base URL and default configs
axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;

// Create axios instance
const api = axios.create({
  baseURL: 'http://localhost:8000',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Make api available globally
app.config.globalProperties.$axios = api;

app.use(router)
app.mount('#app')

// Move API calls to components instead of main.js
