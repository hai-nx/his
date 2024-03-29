import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { LAYOUT_DEFAULT, LAYOUT_AUTH } from '@/utils/constant'
import { useAuth } from '@/stores/auth'

import homeView from '@/views/public/HomeView.vue'
import loginView from '@/views/public/LoginView.vue'

import dashboardView from '@/views/auth/system/DashboardView.vue'
import optionView from '@/views/auth/system/OptionView.vue'
import dboptionView from '@/views/auth/system/dbOption/DbOptionView.vue'

import branchView from '@/views/auth/dictionary/branch/BranchView.vue'
import careerView from '@/views/auth/dictionary/career/CareerView.vue'
import countryView from '@/views/auth/dictionary/country/CountryView.vue'
import departmentView from '@/views/auth/dictionary/department/DepartmentView.vue'
import departmentTypeView from '@/views/auth/dictionary/department-type/DepartmentTypeView.vue'
import districtView from '@/views/auth/dictionary/district/DistrictView.vue'
import employeeView from '@/views/auth/dictionary/employee/EmployeeView.vue'
import supplierView from '@/views/auth/dictionary/supplier/SupplierView.vue'
import ethnicView from '@/views/auth/dictionary/ethnic/EthnicView.vue'
import genderView from '@/views/auth/dictionary/gender/GenderView.vue'
import hospitalView from '@/views/auth/dictionary/hospital/HospitalView.vue'
import icdView from '@/views/auth/dictionary/icd/ICDView.vue'
import provinceView from '@/views/auth/dictionary/province/ProvinceView.vue'
import roomView from '@/views/auth/dictionary/room/RoomView.vue'
import roomTypeView from '@/views/auth/dictionary/room-type/RoomTypeView.vue'
import wardView from '@/views/auth/dictionary/ward/WardView.vue'
import dictionaryView from '@/views/auth/dictionary/DictionaryView.vue'
import serviceView from '@/views/auth/dictionary/service/ServiceView.vue'
import chapterView from '@/views/auth/dictionary/chapter/ChapterView.vue'
import itemGroupView from '@/views/auth/dictionary/itemGroup/ItemGroupView.vue'
import medicienTypeView from '@/views/auth/dictionary/itemType/medicineType/MedicienTypeView.vue'
import materialTypeView from '@/views/auth/dictionary/itemType/materialType/MaterialTypeView.vue'

import errorView from '@/views/public/error.vue'

import pharmaceuticalView from '@/views/auth/business/pharmaceuticals/PharmaceuticalView.vue'
import diagnosticImagingView from '@/views/auth/business/diagnosticImagings/DiagnosticImagingView.vue'
import testingView from '@/views/auth/business/testings/TestingView.vue'

const routes: Array<RouteRecordRaw> = [
    { path: '/', name: 'home', component: homeView, meta: { layout: LAYOUT_DEFAULT } },
    { path: '/login', name: 'login', component: loginView, meta: { layout: LAYOUT_DEFAULT } },

    { path: '/dashboard', name: 'dashboard', component: dashboardView, meta: { layout: LAYOUT_AUTH } },
    { path: '/option', name: 'option', component: optionView, meta: { layout: LAYOUT_AUTH } },
    { path: '/dboption', name: 'dboption', component: dboptionView, meta: { layout: LAYOUT_AUTH } },
    { path: '/workplace-option', name: 'workplace-option', component: () => import('@/views/auth/system/SubsystemOptionView.vue'), meta: { layout: LAYOUT_AUTH } },

    { path: '/dictionary', name: 'dictionary', component: dictionaryView, meta: { layout: LAYOUT_AUTH } },
    { path: '/branch', name: 'branch', component: branchView, meta: { layout: LAYOUT_AUTH } },
    { path: '/country', name: 'country', component: countryView, meta: { layout: LAYOUT_AUTH } },
    { path: '/department', name: 'department', component: departmentView, meta: { layout: LAYOUT_AUTH } },
    { path: '/department-type', name: 'department-type', component: departmentTypeView, meta: { layout: LAYOUT_AUTH } },
    { path: '/district', name: 'district', component: districtView, meta: { layout: LAYOUT_AUTH } },
    { path: '/employee', name: 'employee', component: employeeView, meta: { layout: LAYOUT_AUTH } },
    { path: '/supplier', name: 'supplier', component: supplierView, meta: { layout: LAYOUT_AUTH } },
    { path: '/ethnic', name: 'ethnic', component: ethnicView, meta: { layout: LAYOUT_AUTH } },
    { path: '/gender', name: 'gender', component: genderView, meta: { layout: LAYOUT_AUTH } },
    { path: '/hospital', name: 'hospital', component: hospitalView, meta: { layout: LAYOUT_AUTH } },
    { path: '/icd', name: 'icd', component: icdView, meta: { layout: LAYOUT_AUTH } },
    { path: '/career', name: 'career', component: careerView, meta: { layout: LAYOUT_AUTH } },
    { path: '/province', name: 'province', component: provinceView, meta: { layout: LAYOUT_AUTH } },
    { path: '/room', name: 'room', component: roomView, meta: { layout: LAYOUT_AUTH } },
    { path: '/room-type', name: 'room-type', component: roomTypeView, meta: { layout: LAYOUT_AUTH } },
    { path: '/ward', name: 'ward', component: wardView, meta: { layout: LAYOUT_AUTH } },
    { path: '/service', name: 'service', component: serviceView, meta: { layout: LAYOUT_AUTH } },
    { path: '/chapter', name: 'chapter', component: chapterView, meta: { layout: LAYOUT_AUTH } },

    { path: '/item-group', name: 'item-group', component: itemGroupView, meta: { layout: LAYOUT_AUTH } },
    { path: '/medicine-type', name: 'medicine-type', component: medicienTypeView, meta: { layout: LAYOUT_AUTH } },
    { path: '/material-type', name: 'material-type', component: materialTypeView, meta: { layout: LAYOUT_AUTH } },

    // bệnh nhân
    { path: '/reception', name: 'reception', component: () => import('@/views/auth/business/receptions/ReceptionView.vue'), meta: { layout: LAYOUT_AUTH } },
    { path: '/reception-detail', name: 'reception-detail', component: () => import('@/views/auth/business/receptions/ReceptionDetailView.vue'), meta: { layout: LAYOUT_AUTH } },

    { path: '/clinical', name: 'clinical', component: () => import('@/views/auth/business/clinicals/ClinicalView.vue'), meta: { layout: LAYOUT_AUTH } },
    { path: '/clinical-detail', name: 'clinical-detail', component: () => import('@/views/auth/business/clinicals/ClinicalDetailView.vue'), meta: { layout: LAYOUT_AUTH } },

    { path: '/exam', name: 'exam', component: () => import('@/views/auth/business/exams/ExamView.vue'), meta: { layout: LAYOUT_AUTH } },

    { path: '/payment', name: 'payment', component: () => import('@/views/auth/payment/Payment.vue'), meta: { layout: LAYOUT_AUTH } },

    { path: '/error', name: 'error', component: errorView, meta: { layout: LAYOUT_DEFAULT } },

    // Dược
    { path: '/pharmaceutical', name: 'pharmaceutical', component: pharmaceuticalView, meta: { layout: LAYOUT_AUTH } },

    // Chẩn đoán hình ảnh - Thăm dò chức năng
    { path: '/diagnosticImaging', name: 'diagnosticImaging', component: diagnosticImagingView, meta: { layout: LAYOUT_AUTH } },

    // Xét nghiệm
    { path: '/testing', name: 'testing', component: testingView, meta: { layout: LAYOUT_AUTH } },

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

    // nếu trang yêu cầu quyền đăng nhập mà chưa đăng nhập thì trả về trang login
    if (!isAuthenticated && isAuthenticationRequired)
        next({ name: 'login' });
    else
        next();
})

export default router
