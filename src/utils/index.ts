import { defineAsyncComponent, App } from 'vue'
import { LAYOUT_AUTH, LAYOUT_DEFAULT } from './constant'

export function defineAsyncLayoutComponents (app: App<Element>) {
    app.component(LAYOUT_DEFAULT, defineAsyncComponent(() => import('@/layouts/Default.vue')));
    app.component(LAYOUT_AUTH, defineAsyncComponent(() => import('@/layouts/Auth.vue')));
}

export function defineAsyncComponents(app: App<Element>) {
    app.component("XDateRangePicker", defineAsyncComponent(() => import('@/components/XDateRangePicker.vue')));
    app.component("XLayout", defineAsyncComponent(() => import('@/components/XLayout.vue')));
    app.component("XMenu", defineAsyncComponent(() => import('@/components/XMenu.vue')));
    app.component("XMenuItem", defineAsyncComponent(() => import('@/components/XMenuItem.vue')));

    app.component("XNav", defineAsyncComponent(() => import('@/components/Nav.vue')));
    app.component("XNavItem", defineAsyncComponent(() => import('@/components/NavItem.vue')));
}

