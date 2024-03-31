export interface XItemType {
    key: string,
    label: string,
    icon?: string,
    path?: string,
    children?: Array<XItemType>,
    type?: string
}


import { defineAsyncComponent, App } from 'vue'

export function defineAsyncComponents(app: App<Element>) {
    app.component("XDateRangePicker", defineAsyncComponent(() => import('@/components/XDateRangePicker.vue')));
    app.component("XLayout", defineAsyncComponent(() => import('@/components/XLayout.vue')));
    app.component("XNav", defineAsyncComponent(() => import('@/components/XNav.vue')));
    app.component("XNavItem", defineAsyncComponent(() => import('@/components/XNavItem.vue')));
    app.component("XPagination", defineAsyncComponent(() => import('@/components/XPagination.vue')));
}