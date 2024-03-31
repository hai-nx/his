import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue'
import App from './App.vue'
import router from './router'
import { defineAsyncLayoutComponents } from './utils'
import { defineAsyncComponents } from './components'

// reset css
import './assets/style/reset.css'
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
// ant
import 'ant-design-vue/dist/antd.css'

import './assets/style/global.css'
import './assets/style/ant.css'

import 'devextreme/dist/css/dx.light.css';

const app = createApp(App);
defineAsyncComponents(app);
defineAsyncLayoutComponents(app);
app.use(createPinia());
app.use(router);
app.use(Antd);
app.mount('#app')
