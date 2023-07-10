import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home"
import Report from "@/components/Report"
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/Report",
      name: "/Report",
      component: Report,
    },
  ],
});
