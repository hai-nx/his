import { createRouter, createWebHistory } from 'vue-router'
import { layout_auth, layout_default } from '@/utils/constant'
import { useAuth } from '@/stores/auth'

/*public*/
import home from '@/views/public/home'
import login from '@/views/public/user/login'
import forgot_password from '@/views/public/user/forgot_password'
import register from '@/views/public/user/register'

import error from '@/views/public/error'

/*auth*/

import role from '@/views/auth/role'
import role_detail from '@/views/auth/role-detail'

/*auth > admin*/
import dashboard from '@/views/auth/dashboard'
import selDepartment from '@/views/auth/sel-department'

import branchs from '@/views/auth/dictionary/branchs'
import branchDetail from '@/views/auth/dictionary/branchs/detail'
import departments from '@/views/auth/dictionary/departments'
import departmentDetail from '@/views/auth/dictionary/departments/detail'
import rooms from '@/views/auth/dictionary/rooms'
import roomDetail from '@/views/auth/dictionary/rooms/detail'

import system from '@/views/auth/system'
import users from '@/views/auth/system/users'
import user_detail from '@/views/auth/system/users/detail'

import setting from '@/views/auth/setting'

const routes = [
    /*puclic: các trang công khai*/
    { path: '/', name: 'home', component: home, meta: { layout: layout_default } },
    { path: '/login', name: 'login', component: login, meta: { layout: layout_default } },
    { path: '/forgot-password', name: 'forgot_password', component: forgot_password, meta: { layout: layout_default } },
    { path: '/register', name: 'register', component: register, meta: { layout: layout_default } },

    
    { path: '/role', name: 'role', component: role, meta: { layout: layout_auth } },
    { path: '/role-detail/:id', name: 'role_detail', component: role_detail, meta: { layout: layout_auth } },
    { path: '/role-detail/create', name: 'role_detail_create', component: role_detail, meta: { layout: layout_auth } },
    
    /*dashboard: trang chủ và các thông tin liên quan*/
    { path: '/dashboard', name: 'dashboard', component: dashboard, meta: { layout: layout_auth } },

    /*dictionary: danh mục*/
    { path: '/branchs', name: 'branch', component: branchs, meta: { layout: layout_auth } },
    { 
        path: '/branchs/detail', name: 'branch-detail', component: branchDetail, meta: { layout: layout_auth },
        children: [{ 
            path: ':id', name: 'branch-detail-edit', component: branchDetail 
        }],
    },
    { path: '/departments', name: 'department', component: departments, meta: { layout: layout_auth } },
    { 
        path: '/departments/detail', name: 'department-detail', component: departmentDetail, meta: { layout: layout_auth },
        children: [{ 
            path: ':id', name: 'department-detail-edit', component: departmentDetail 
        }],
    },
    { path: '/rooms', name: 'room', component: rooms, meta: { layout: layout_auth } },
    { 
        path: '/rooms/detail', name: 'room-detail', component: roomDetail, meta: { layout: layout_auth },
        children: [{ 
            path: ':id', name: 'room-detail-edit', component: roomDetail 
        }],
    },

    /*system: hệ thống*/
    { path: '/system', name: 'system', component: system, meta: { layout: layout_auth } },
    { path: '/sel-department', name: 'sel-department', component: selDepartment, meta: { layout: layout_auth } },
    { path: '/users', name: 'users', component: users, meta: { layout: layout_auth } },
    { 
        path: '/users/detail', name: 'user-detail', component: user_detail, meta: { layout: layout_auth },
        children: [{ 
            path: ':id', name: 'user-detail-edit', component: user_detail 
        }],
    },

    /*setting: tùy chọn (tách tùy chọn ra khỏi hệ thống)*/
    { path: '/setting', name: 'setting', component: setting, meta: { layout: layout_auth } },

    /*
    error: hiển thị lỗi
        tách thành 2 phần riêng biệt là:
        - thông báo chung
        - thông báo chi tiết
    */
    { path: '/:pathMatch(.*)*', name: 'error', component: error, meta: { layout: layout_default } },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {

    var store = useAuth();
    // kiểm tra đăng nhập
    const isAuthenticated = store.getAuthenticated;
    // kiểm tra trang có yêu càu quyền đăng nhập
    const isAuthenticationRequired = to.meta.layout === layout_auth; 
    
    // nếu trang yêu cầu quyền đăng nhập mà chua đăng nhập thì trả về trang login
    if (!isAuthenticated && isAuthenticationRequired)
        next({ name: 'login' });
    else
        next();
})

export default router
