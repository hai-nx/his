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
    app.component("DButton", defineAsyncComponent(() => import('./button/index.vue')));
    app.component("DButtonGroup", defineAsyncComponent(() => import('./button-group/index.vue')));
    app.component("DCard", defineAsyncComponent(() => import('./card/index.vue')));
    app.component("DDivider", defineAsyncComponent(() => import('./divider/index.vue')));
    app.component("DDropdown", defineAsyncComponent(() => import('./dropdown/index.vue')));
    app.component("DDropdownButton", defineAsyncComponent(() => import('./dropdown-button/index.vue')));
    app.component("DInput", defineAsyncComponent(() => import('./input/index.vue')));
    app.component("DInputPassword", defineAsyncComponent(() => import('./input-password/index.vue')));
    app.component("DMenu", defineAsyncComponent(() => import('./menu/index.vue')));
    app.component("DMenuItem", defineAsyncComponent(() => import('./menuitem/index.vue')));
    
    
    app.component("XLayout", defineAsyncComponent(() => import('@/components/XLayout.vue')));
    app.component("XNav", defineAsyncComponent(() => import('@/components/XNav.vue')));
    app.component("XNavItem", defineAsyncComponent(() => import('@/components/XNavItem.vue')));
}