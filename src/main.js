import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { defineAsyncLayoutComponents } from './utils'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import './assets/style/global.css'

const app = createApp(App);
defineAsyncLayoutComponents(app);
app.use(createPinia());
app.use(router);
app.use(Antd);
app.mount('#app');
