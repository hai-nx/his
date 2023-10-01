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

import itemGroupService from './dictionary/itemGroup'
import itemTypeService from './dictionary/itemType'
import itemLineService from './dictionary/itemLine'
import itemPricePolicyService from './dictionary/itemPricePolicy'

import receptionService from './business/receptions/reception'

import inOutStockService from './business/pharmaceuticals/inOutStock'
import inOutStockTypeService from './business/pharmaceuticals/inOutStockType'
import itemStockService from './business/pharmaceuticals/itemStock'

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

    itemGroupService,
    itemTypeService,
    itemLineService,
    itemPricePolicyService,

    receptionService,
    inOutStockService,
    inOutStockTypeService,
    itemStockService,

    userService,
}