import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { LAYOUT_DEFAULT, LAYOUT_AUTH } from '@/utils/constant'
import { useAuth } from '@/stores/auth'

import homeView         from '@/views/public/home.vue'
import loginView        from '@/views/public/LoginView.vue'

import dashboardView    from '@/views/auth/system/dashboard/index.vue'
import workplaceView    from '@/views/auth/WorkplaceView.vue'

import branchView       from '@/views/auth/dictionary/branch/BranchView.vue'
import careerView       from '@/views/auth/dictionary/career/CareerView.vue'
import countryView      from '@/views/auth/dictionary/country/CountryView.vue'
import departmentView   from '@/views/auth/dictionary/department/DepartmentView.vue'
import districtView     from '@/views/auth/dictionary/district/DistrictView.vue'
import employeeView     from '@/views/auth/dictionary/employee/EmployeeView.vue'
import ethnicView       from '@/views/auth/dictionary/ethnic/EthnicView.vue'
import hospitalView     from '@/views/auth/dictionary/hospital/HospitalView.vue'
import icdView          from '@/views/auth/dictionary/icd/ICDView.vue'
import provinceView     from '@/views/auth/dictionary/province/ProvinceView.vue'
import roomView         from '@/views/auth/dictionary/room/RoomView.vue'
import wardView         from '@/views/auth/dictionary/ward/WardView.vue'
import otherView        from '@/views/auth/dictionary/OtherView.vue'

import admissionView    from '@/views/auth/admission/AdmissionView.vue'

import errorView        from '@/views/public/error.vue'


const routes: Array<RouteRecordRaw> = [
    { path: '/', name: 'home', component: homeView, meta: { layout: LAYOUT_DEFAULT } },
    { path: '/login', name: 'login', component: loginView, meta: { layout: LAYOUT_DEFAULT } },

    { path: '/dashboard', name: 'dashboard', component: dashboardView, meta: { layout: LAYOUT_AUTH } },
    { path: '/workplace', name: 'workplace', component: workplaceView, meta: { layout: LAYOUT_AUTH } },

    { path: '/dictionary', name: 'dictionary', component: otherView, meta: { layout: LAYOUT_AUTH } },
    { path: '/branch', name: 'branch', component: branchView, meta: { layout: LAYOUT_AUTH } },
    { path: '/country', name: 'country', component: countryView, meta: { layout: LAYOUT_AUTH } },
    { path: '/department', name: 'department', component: departmentView, meta: { layout: LAYOUT_AUTH } },
    { path: '/district', name: 'district', component: districtView, meta: { layout: LAYOUT_AUTH } },
    { path: '/employee', name: 'employee', component: employeeView, meta: { layout: LAYOUT_AUTH } },
    { path: '/ethnic', name: 'ethnic', component: ethnicView, meta: { layout: LAYOUT_AUTH } },
    { path: '/hospital', name: 'hospital', component: hospitalView, meta: { layout: LAYOUT_AUTH } },
    { path: '/icd', name: 'icd', component: icdView, meta: { layout: LAYOUT_AUTH } },
    { path: '/career', name: 'career', component: careerView, meta: { layout: LAYOUT_AUTH } },
    { path: '/province', name: 'province', component: provinceView, meta: { layout: LAYOUT_AUTH } },
    { path: '/room', name: 'room', component: roomView, meta: { layout: LAYOUT_AUTH } },
    { path: '/ward', name: 'ward', component: wardView, meta: { layout: LAYOUT_AUTH } },
    
    { path: '/admission', name: 'admission', component: admissionView, meta: { layout: LAYOUT_AUTH } },

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
