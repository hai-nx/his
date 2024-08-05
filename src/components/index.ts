export interface XItemType {
    key: string,
    label: string,
    icon?: string,
    path?: string,
    children?: Array<XItemType>,
    type?: string
}

export type DataTypes = {
    key: string,
    label: string,
    value?: string,
    icon?: string,
    children?: Array<DataTypes>,
    dataType?: string
}


import { defineAsyncComponent, App } from 'vue'

export function defineAsyncComponents(app: App<Element>) {
    app.component("VMenu", defineAsyncComponent(() => import('./menu/Menu.vue')));
    app.component("VMenuItem", defineAsyncComponent(() => import('./menu/MenuItem.vue')));

    app.component("VDropdown", defineAsyncComponent(() => import('./dropdown/Dropdown.vue')));

    app.component("VButton", defineAsyncComponent(() => import('@/components/VButton.vue')));
    app.component("VInputNumber", defineAsyncComponent(() => import('@/components/VInputNumber.vue')));
    app.component("VInput", defineAsyncComponent(() => import('@/components/VInput.vue')));
    app.component("VText", defineAsyncComponent(() => import('@/components/VText.vue')));

    app.component("XLayout", defineAsyncComponent(() => import('@/components/XLayout.vue')));
    app.component("XNav", defineAsyncComponent(() => import('@/components/XNav.vue')));
    app.component("XNavItem", defineAsyncComponent(() => import('@/components/XNavItem.vue')));
}