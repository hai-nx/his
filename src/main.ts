import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { defineComponents } from './components'
import { defineLayouts } from './layouts'

// reset css
import './assets/style/reset.css'
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

import './assets/style/global.css'
import './assets/style/dateTime.css'

import 'devextreme/dist/css/dx.light.css';

const app = createApp(App);
defineComponents(app);
defineLayouts(app);
app.use(createPinia());
app.use(router);
app.mount('#app')
