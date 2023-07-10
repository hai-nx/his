import "core-js";
import "regenerator-runtime/runtime";

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
var EventBus = new Vue();
window.EventBus = EventBus;
import App from "./App";
import router from "./router";
import BootstrapVue from "bootstrap-vue";
import Multiselect from "vue-multiselect";
import BootstrapVueIcons from 'bootstrap-vue';

// register globally
Vue.component("multiselect", Multiselect);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(EventBus);

Vue.config.productionTip = false;

//TEMP DATA

import store from "./store/store";
import "./Utils.js";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFileExcel, faList, faCogs } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFileExcel, faList, faCogs)

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
        el: "#app",
        store,
        router,
        components: { App },
        template: "<App/>",
    });
/* eslint-disable no-new */