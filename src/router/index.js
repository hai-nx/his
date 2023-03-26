import { createRouter, createWebHistory } from 'vue-router'
import { layout_auth, layout_default } from '@/utils/constant'

/*public*/
import home from '@/views/public/home'
import login from '@/views/public/user/login'
import forgot_password from '@/views/public/user/forgot_password'
import register from '@/views/public/user/register'

import error from '@/views/public/error'

/*auth*/
import dashboard from '@/views/auth/dashboard'
import role from '@/views/auth/role'
import role_detail from '@/views/auth/role-detail'
import user from '@/views/auth/user'

import setting from '@/views/auth/setting'


const routes = [
    { path: '/', name: 'home', component: home, meta: { layout: layout_default } },
    { path: '/login', name: 'login', component: login, meta: { layout: layout_default } },
    { path: '/forgot-password', name: 'forgot_password', component: forgot_password, meta: { layout: layout_default } },
    { path: '/register', name: 'register', component: register, meta: { layout: layout_default } },

    { path: '/dashboard', name: 'dashboard', component: dashboard, meta: { layout: layout_auth } },
    { path: '/role', name: 'role', component: role, meta: { layout: layout_auth } },
    { path: '/role-detail/:id', name: 'role_detail', component: role_detail, meta: { layout: layout_auth } },
    { path: '/role-detail/create', name: 'role_detail', component: role_detail, meta: { layout: layout_auth } },
    { path: '/user', name: 'user', component: user, meta: { layout: layout_auth } },

    { path: '/setting', name: 'setting', component: setting, meta: { layout: layout_auth } },

    { path: '/:pathMatch(.*)*', name: 'error', component: error, meta: { layout: layout_default } },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
