import { createApp } from 'vue'
import { createPinia } from 'pinia'
//import axios from 'axios'
import App from './App.vue'
import router from './router'
import { defineAsyncLayoutComponents } from './utils'
//window.axios = axios;

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App);
defineAsyncLayoutComponents(app);
app.use(createPinia());
app.use(router);
app.mount('#app');
