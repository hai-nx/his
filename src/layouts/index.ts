import { defineAsyncComponent, App } from "vue";

export const appLayout = {
    DEFAULT: 'layout-default',
    MAIN: 'layout-main',
}

export function defineLayouts(app: App) {
    app.component(appLayout.DEFAULT, defineAsyncComponent(() => import("./default/index.vue")));
    app.component(appLayout.MAIN, defineAsyncComponent(() => import("./main/index.vue")));
}
