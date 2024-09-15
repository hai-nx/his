import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import { useAuth } from "@/store";
import { appLayout } from "../layouts/index"

import dboptionView from "@/views/auth/system/dbOption/DbOptionView.vue";

import branchView from "@/views/auth/dictionary/branch/BranchView.vue";
import careerView from "@/views/auth/dictionary/career/CareerView.vue";
import countryView from "@/views/auth/dictionary/country/CountryView.vue";
import departmentView from "@/views/auth/dictionary/department/DepartmentView.vue";
import departmentTypeView from "@/views/auth/dictionary/department-type/DepartmentTypeView.vue";
import districtView from "@/views/auth/dictionary/district/DistrictView.vue";
import employeeView from "@/views/auth/dictionary/employee/EmployeeView.vue";
import supplierView from "@/views/auth/dictionary/supplier/SupplierView.vue";
import ethnicView from "@/views/auth/dictionary/ethnic/EthnicView.vue";
import genderView from "@/views/auth/dictionary/gender/GenderView.vue";
import hospitalView from "@/views/auth/dictionary/hospital/HospitalView.vue";
import icdView from "@/views/auth/dictionary/icd/ICDView.vue";
import provinceView from "@/views/auth/dictionary/province/ProvinceView.vue";
import roomView from "@/views/auth/dictionary/room/RoomView.vue";
import roomTypeView from "@/views/auth/dictionary/room-type/RoomTypeView.vue";
import wardView from "@/views/auth/dictionary/ward/WardView.vue";
import dictionaryView from "@/views/auth/dictionary/DictionaryView.vue";
import serviceView from "@/views/auth/dictionary/service/ServiceView.vue";
import chapterView from "@/views/auth/dictionary/chapter/ChapterView.vue";
import itemGroupView from "@/views/auth/dictionary/itemGroup/ItemGroupView.vue";
import medicienTypeView from "@/views/auth/dictionary/itemType/medicineType/MedicienTypeView.vue";
import materialTypeView from "@/views/auth/dictionary/itemType/materialType/MaterialTypeView.vue";

import pharmaceuticalView from "@/views/auth/business/pharmaceuticals/PharmaceuticalView.vue";
import diagnosticImagingView from "@/views/auth/business/diagnosticImagings/DiagnosticImagingView.vue";
import testingView from "@/views/auth/business/testings/TestingView.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "home", component: () => import("@/views/public/login/index.vue"), meta: { layout: appLayout.DEFAULT } },
  { path: "/login", name: "login", component: () => import("@/views/public/login/index.vue"), meta: { layout: appLayout.DEFAULT } },

  { path: "/dashboard", name: "dashboard", component: () => import("../views/dashboard/index.vue"), meta: { layout: appLayout.MAIN } },
  { path: "/dboption", name: "dboption", component: dboptionView, meta: { layout: appLayout.MAIN } },

  { path: "/dictionary", name: "dictionary", component: dictionaryView, meta: { layout: appLayout.MAIN } },
  { path: "/branch", name: "branch", component: branchView, meta: { layout: appLayout.MAIN } },
  { path: "/country", name: "country", component: countryView, meta: { layout: appLayout.MAIN } },
  { path: "/department", name: "department", component: departmentView, meta: { layout: appLayout.MAIN } },
  { path: "/department-type", name: "department-type", component: departmentTypeView, meta: { layout: appLayout.MAIN } },
  { path: "/district", name: "district", component: districtView, meta: { layout: appLayout.MAIN } },
  { path: "/employee", name: "employee", component: employeeView, meta: { layout: appLayout.MAIN } },
  { path: "/supplier", name: "supplier", component: supplierView, meta: { layout: appLayout.MAIN } },
  { path: "/ethnic", name: "ethnic", component: ethnicView, meta: { layout: appLayout.MAIN } },
  { path: "/gender", name: "gender", component: genderView, meta: { layout: appLayout.MAIN } },
  { path: "/hospital", name: "hospital", component: hospitalView, meta: { layout: appLayout.MAIN } },
  { path: "/icd", name: "icd", component: icdView, meta: { layout: appLayout.MAIN } },
  { path: "/career", name: "career", component: careerView, meta: { layout: appLayout.MAIN } },
  { path: "/province", name: "province", component: provinceView, meta: { layout: appLayout.MAIN } },
  { path: "/room", name: "room", component: roomView, meta: { layout: appLayout.MAIN } },
  { path: "/room-type", name: "room-type", component: roomTypeView, meta: { layout: appLayout.MAIN } },
  { path: "/ward", name: "ward", component: wardView, meta: { layout: appLayout.MAIN } },
  { path: "/service", name: "service", component: serviceView, meta: { layout: appLayout.MAIN } },
  { path: "/chapter", name: "chapter", component: chapterView, meta: { layout: appLayout.MAIN } },

  { path: "/item-group", name: "item-group", component: itemGroupView, meta: { layout: appLayout.MAIN } },
  { path: "/medicine-type", name: "medicine-type", component: medicienTypeView, meta: { layout: appLayout.MAIN } },
  { path: "/material-type", name: "material-type", component: materialTypeView, meta: { layout: appLayout.MAIN } },

  // bệnh nhân
  { path: "/reception", name: "reception", component: () => import("@/views/business/reception/list.vue"), meta: { layout: appLayout.MAIN } },
  { path: "/reception-detail", name: "reception-detail", component: () => import("@/views/auth/business/reception/detail/index.vue"), meta: { layout: appLayout.MAIN } },
  { path: "/clinical", name: "clinical", component: () => import("@/views/business/clinic/list.vue"), meta: { layout: appLayout.MAIN } },
  { path: "/invoice", name: "invoice", component: () => import("@/views/auth/business/clinical/index.vue"), meta: { layout: appLayout.MAIN } },

  // Dược
  { path: "/pharmaceutical", name: "pharmaceutical", component: pharmaceuticalView, meta: { layout: appLayout.MAIN } },

  // Chẩn đoán hình ảnh - Thăm dò chức năng
  { path: "/diagnosticImaging", name: "diagnosticImaging", component: diagnosticImagingView, meta: { layout: appLayout.MAIN } },

  // Xét nghiệm
  { path: "/testing", name: "testing", component: testingView, meta: { layout: appLayout.MAIN } },

  // hệ thống
  { path: "/sys/user", name: "user", component: () => import("../views/auth/system/user/UserView.vue"), meta: { layout: appLayout.MAIN } },
  { path: "/sys/role", name: "role", component: () => import("../views/auth/system/role/RoleView.vue"), meta: { layout: appLayout.MAIN } },
  { path: "/sys/option", name: "option", component: () => import("../views/auth/system/option/OptionView.vue"), meta: { layout: appLayout.MAIN } },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const store = useAuth();
  // kiểm tra đăng nhập
  const isAuthenticated = store.getAuthenticated;
  // kiểm tra trang có yêu càu quyền đăng nhập
  const isAuthenticationRequired = to.meta.layout === appLayout.MAIN;

  // nếu trang yêu cầu quyền đăng nhập mà chưa đăng nhập thì trả về trang login
  if (!isAuthenticated && isAuthenticationRequired) next({ name: "login" });
  else next();
});

export default router;
