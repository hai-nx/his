import { defineAsyncComponent, App } from 'vue'
import { LAYOUT_AUTH, LAYOUT_DEFAULT } from './constant'

export function defineAsyncLayoutComponents (app: App<Element>) {
    app.component(LAYOUT_DEFAULT, defineAsyncComponent(() => import('@/layouts/Default.vue')));
    app.component(LAYOUT_AUTH, defineAsyncComponent(() => import('@/layouts/Auth.vue')));
}

