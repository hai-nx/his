import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { LAYOUT_DEFAULT, LAYOUT_AUTH } from '@/utils/constant'
import { useAuth } from '@/stores/auth'

import homeView from '@/views/public/home.vue'
import loginView from '@/views/public/LoginView.vue'

import dashboardView from '@/views/auth/system/dashboard/index.vue'
import workplaceView from '@/views/auth/WorkplaceView.vue'

import branchView from '@/views/auth/dictionary/BranchView.vue'
import branchDetailView from '@/views/auth/dictionary/BranchDetailView.vue'
import departmentView from '@/views/auth/dictionary/DepartmentView.vue'
import departmentDetailView from '@/views/auth/dictionary/DepartmentDetailView.vue'
import roomView from '@/views/auth/dictionary/RoomView.vue'
import roomDetailView from '@/views/auth/dictionary/RoomDetailView.vue'
import icdView from '@/views/auth/dictionary/ICDView.vue'
import icdDetailView from '@/views/auth/dictionary/ICDDetailView.vue'

import otherView from '@/views/auth/dictionary/OtherView.vue'

import errorView from '@/views/public/error.vue'


const routes: Array<RouteRecordRaw> = [
    { path: '/', name: 'home', component: homeView, meta: { layout: LAYOUT_DEFAULT } },
    { path: '/login', name: 'login', component: loginView, meta: { layout: LAYOUT_DEFAULT } },

    { path: '/dashboard', name: 'dashboard', component: dashboardView, meta: { layout: LAYOUT_AUTH } },
    { path: '/workplace', name: 'workplace', component: workplaceView, meta: { layout: LAYOUT_AUTH } },

    { path: '/dictionary', name: 'dictionary', component: otherView, meta: { layout: LAYOUT_AUTH } },
    { path: '/branch', name: 'branch', component: branchView, meta: { layout: LAYOUT_AUTH } },
    { path: '/branch/detail', name: 'branch-detail', component: branchDetailView, meta: { layout: LAYOUT_AUTH },
        children: [
            { path: ':id', name: 'branch-detail-view', component: branchDetailView },
        ]
    },
    { path: '/department', name: 'department', component: departmentView, meta: { layout: LAYOUT_AUTH } },
    { path: '/department/detail', name: 'department-detail', component: departmentDetailView, meta: { layout: LAYOUT_AUTH },
        children: [
            { path: ':id', name: 'department-detail-view', component: departmentDetailView },
        ]
    },
    { path: '/room', name: 'room', component: roomView, meta: { layout: LAYOUT_AUTH } },
    { path: '/room/detail', name: 'room-detail', component: roomDetailView, meta: { layout: LAYOUT_AUTH },
        children: [
            { path: ':id', name: 'room-detail-view', component: roomDetailView },
        ]
    },
    { path: '/icd', name: 'icd', component: icdView, meta: { layout: LAYOUT_AUTH } },
    { path: '/icd/detail', name: 'icd-detail', component: icdDetailView, meta: { layout: LAYOUT_AUTH },
        children: [
            { path: ':id', name: 'icd-detail-view', component: icdDetailView },
        ]
    },

    { path: '/error', name: 'error', component: errorView, meta: { layout: LAYOUT_DEFAULT } }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    const store = useAuth();
    // kiểm tra đăng nhập
    const isAuthenticated = store.getAuthenticated;
    // kiểm tra trang có yêu càu quyền đăng nhập
    const isAuthenticationRequired = to.meta.layout === LAYOUT_AUTH; 
    
    // nếu trang yêu cầu quyền đăng nhập mà chua đăng nhập thì trả về trang login
    if (!isAuthenticated && isAuthenticationRequired)
        next({ name: 'login' });
    else
        next();
})

export default router
