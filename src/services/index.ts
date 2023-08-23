import authService from './auth-service'

import branchService from './dictionary/branch'
import careerService from './dictionary/career'
import countryService from './dictionary/country'
import departmentService from './dictionary/department'
import departmentTypeService from './dictionary/department-type'
import districtService from './dictionary/district'
import employeeService from './dictionary/employee'
import ethnicService from './dictionary/ethnic'
import genderService from './dictionary/gender'
import hospitalService from './dictionary/hospital'
import icdService from './dictionary/icd'
import provinceService from './dictionary/province'
import roomService from './dictionary/room'
import roomTypeService from './dictionary/room-type'
import wardService from './dictionary/ward'
import chapterService from './dictionary/chapter'

import serviceService from './dictionary/service'
import servicePricePolicyService from './dictionary/servicePricePolicy'
import surgicalProcedureTypeService from './dictionary/surgicalProcedureType'
import serviceGroupService from './dictionary/serviceGroup'
import serviceGroupHeInService from './dictionary/serviceGroupHeIn'
import unitService from './dictionary/unit'
import supplierService from './dictionary/supplier'

import medicineGroupService from './dictionary/medicineGroup'
import medicineTypeService from './dictionary/medicineType'
import medicineLineService from './dictionary/medicineLine'
import medicinePricePolicyService from './dictionary/medicinePricePolicy'

import patientService from './business/patient'

import impMestService from './business/pharmaceuticals/imMest'
import impExpMestTypeService from './business/pharmaceuticals/impExpMestType'
import dMedicineStockService from './business/pharmaceuticals/medicineStock'
import expMestService from './business/pharmaceuticals/expMest'

import userService from './system/user'

export {
    authService,

    branchService,
    careerService,
    countryService,
    departmentService,
    departmentTypeService,
    districtService,
    employeeService,
    ethnicService,
    genderService,
    hospitalService,
    icdService,
    provinceService,
    roomService,
    roomTypeService,
    wardService,
    chapterService,

    serviceService,
    servicePricePolicyService,
    surgicalProcedureTypeService,
    serviceGroupService,
    serviceGroupHeInService,
    unitService,
    supplierService,

    medicineGroupService,
    medicineTypeService,
    medicineLineService,
    medicinePricePolicyService,

    patientService,
    impMestService,
    impExpMestTypeService,
    dMedicineStockService,
    expMestService,

    userService,
}