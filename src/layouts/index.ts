import { defineAsyncComponent, App } from "vue";

export const appLayout = {
    AUTH: 'layout-auth',
    DEFAULT: 'layout-default',
    MAIN: 'layout-main',
}

export function defineAsyncLayoutComponents(app: App<Element>) {
    app.component(appLayout.DEFAULT, defineAsyncComponent(() => import("./default/index.vue")));
    app.component(appLayout.MAIN, defineAsyncComponent(() => import("./main/index.vue")));
    app.component(appLayout.AUTH, defineAsyncComponent(() => import("@/layouts/AuthLayout.vue")));
}