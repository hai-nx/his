import { defineAsyncComponent } from 'vue'
import { layout_default, layout_auth } from '@/utils/constant'

export function defineAsyncLayoutComponents (app) {
    app.component(layout_default, defineAsyncComponent(() => import('@/layouts/default')));
    app.component(layout_auth, defineAsyncComponent(() => import('@/layouts/auth')));
}