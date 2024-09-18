export interface XItemType {
    key: string,
    label: string,
    icon?: string,
    path?: string,
    children?: Array<XItemType>,
    type?: string
}


import { defineAsyncComponent, App } from 'vue'

export function defineComponents(app: App<Element>) {
    app.component("DBreadcrumb", defineAsyncComponent(() => import('./breadcrumb/index.vue')));
    app.component("DButton", defineAsyncComponent(() => import('./button/index.vue')));
    app.component("DCard", defineAsyncComponent(() => import('./card/index.vue')));
    app.component("DDivider", defineAsyncComponent(() => import('./divider/index.vue')));
    app.component("DDropdown", defineAsyncComponent(() => import('./dropdown/index.vue')));
    app.component("DInput", defineAsyncComponent(() => import('./input/index.vue')));
    app.component("DMenu", defineAsyncComponent(() => import('./menu/index.vue')));
    app.component("DMenuitem", defineAsyncComponent(() => import('./menuitem/index.vue')));
    app.component("DModal", defineAsyncComponent(() => import('./modal/index.vue')));
    app.component("DPage", defineAsyncComponent(() => import('./page/index.vue')));
    app.component("DPaginator", defineAsyncComponent(() => import('./paginator/index.vue')));
    app.component("DPassword", defineAsyncComponent(() => import('./password/index.vue')));
    app.component("DRadio", defineAsyncComponent(() => import('./radio/index.vue')));
    app.component("DTable", defineAsyncComponent(() => import('./table/index.vue')));
    app.component("DText", defineAsyncComponent(() => import('./text/index.vue')));
    app.component("DTextarea", defineAsyncComponent(() => import('./textarea/index.vue')));
    app.component("DTooltip", defineAsyncComponent(() => import('./tooltip/index.vue')));
    app.component("DTree", defineAsyncComponent(() => import('./tree/index.vue')));
    
    app.component("XLayout", defineAsyncComponent(() => import('@/components/XLayout.vue')));
    app.component("XNav", defineAsyncComponent(() => import('@/components/XNav.vue')));
    app.component("XNavItem", defineAsyncComponent(() => import('@/components/XNavItem.vue')));
}
