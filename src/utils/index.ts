import { defineAsyncComponent, App } from 'vue'
import { LAYOUT_AUTH, LAYOUT_DEFAULT } from './constant'

export function defineAsyncLayoutComponents (app: App<Element>) {
    app.component(LAYOUT_DEFAULT, defineAsyncComponent(() => import('@/layouts/DefaultLayout.vue')));
    app.component(LAYOUT_AUTH, defineAsyncComponent(() => import('@/layouts/AuthLayout.vue')));
}

export function defineAsyncComponents(app: App<Element>) {
    app.component("XDateRangePicker", defineAsyncComponent(() => import('@/components/XDateRangePicker.vue')));
    app.component("XLayout", defineAsyncComponent(() => import('@/components/XLayout.vue')));
    app.component("XNav", defineAsyncComponent(() => import('@/components/Nav.vue')));
    app.component("XNavItem", defineAsyncComponent(() => import('@/components/NavItem.vue')));
    app.component("XPagination", defineAsyncComponent(() => import('@/components/XPagination.vue')));
}

