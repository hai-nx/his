import SimpleModel from "./simple/simple";
import ResultModel from "./ResultModel";
import PagedResultModel from "./PagedResultModel";

import { PatientModel, GetAllPatientInputModel } from "./business/patient";
import PatientRecordModel, { PatientRecordRequestModel } from "./business/patientRecord";
import { ReceptionModel, GetAllReceptionInputModel } from "./business/reception";
import TreatmentModel, { TreatmentFilterModel } from "./business/treatment";

import BranchModel from "./dictionary/administratives/branch";
import CareerModel from "./dictionary/administratives/career";
import CountryModel from "./dictionary/administratives/country";
import DepartmentModel from "./dictionary/administratives/department";
import DepartmentTypeModel from "./dictionary/administratives/department-type";
import DistrictModel from "./dictionary/administratives/district";
import EmployeeModel from "./dictionary/others/employee";
import DictionaryBase from "./dictionary/base";
import EthnicityModel, { EthnicityRequestModel } from "./dictionary/administratives/ethnicity";
import GenderModel, { GetAllGenderInputModel } from "./dictionary/administratives/gender";
import HospitalModel from "./dictionary/administratives/hospital";
import ICDModel from "./dictionary/administratives/icd";
import ProvinceModel from "./dictionary/administratives/province";
import RoomModel, { RoomRequestModel } from "./dictionary/administratives/room";
import RoomTypeModel from "./dictionary/administratives/room-type";
import WardModel from "./dictionary/administratives/ward";
import ChapterIcdModel from "./dictionary/administratives/chapterIcd";
import SupplierModel from "./dictionary/others/supplier";

import ServiceModel from "./dictionary/services/service";
import ServicePricePolicyModel from "./dictionary/services/servicePricePolicy";
import SurgicalProcedureTypeModel from "./dictionary/services/surgicalProcedureType";
import ServiceGroupModel from "./dictionary/services/serviceGroup";
import ServiceGroupHeInModel from "./dictionary/services/serviceGroupHeIn";
import UnitModel from "./dictionary/others/unit";
import ExecutionRoomModel from "./dictionary/services/executionRoom";
import ServiceImportModel from "./dictionary/services/serviceImport";
import ServiceResultIndiceModel from "./dictionary/services/serviceResultIndice";
import ServiceResultIndiceImportModel from "./dictionary/services/serviceResultIndiceImport";

import ItemGroupModel from "./dictionary/items/itemGroup";
import ItemTypeModel from "./dictionary/items/itemType";
import ItemLineModel from "./dictionary/items/itemLine";
import ItemModel from "./dictionary/items/item";
import ItemPricePolicyModel from "./dictionary/items/itemPricePolicy";
import ItemTypeImportModel from "./dictionary/items/itemTypeImport";

import InOutStockTypeModel from "./business/pharmaceuticals/inOutStockType";
import InOutStockItemModel from "./business/pharmaceuticals/inOutStockItem";
import InOutStockModel from "./business/pharmaceuticals/inOutStock";
import ItemStockModel from "./business/pharmaceuticals/itemStock";
import ServiceRequestModel, { ServiceRequestRequestModel } from "./business/serviceRequest";
import ServiceRequestDataModel from "./business/serviceRequestData";
import ServiceResultDataModel from "./business/serviceResultData";

import UserModel from "./system/user";
import DbOptionModel from "./system/dbOption";

export {
  
  SimpleModel,
  ResultModel,
  PagedResultModel,
  // dictionary
  BranchModel,
  CareerModel,
  CountryModel,
  DepartmentModel,
  DepartmentTypeModel,
  DistrictModel,
  EmployeeModel,
  DictionaryBase,
  EthnicityModel,
  EthnicityRequestModel,
  GenderModel,
  GetAllGenderInputModel,
  HospitalModel,
  ICDModel,
  ProvinceModel,
  RoomModel,
  RoomRequestModel,
  RoomTypeModel,
  WardModel,
  ChapterIcdModel,
  SupplierModel,
  ServiceModel,
  UnitModel,
  ServiceGroupModel,
  ServiceGroupHeInModel,
  ServicePricePolicyModel,
  SurgicalProcedureTypeModel,
  ExecutionRoomModel,
  ServiceImportModel,
  ServiceResultIndiceModel,
  ServiceResultIndiceImportModel,
  ItemLineModel,
  ItemGroupModel,
  ItemTypeModel,
  ItemModel,
  ItemPricePolicyModel,
  ItemTypeImportModel,
  InOutStockTypeModel,
  InOutStockItemModel,
  InOutStockModel,
  ItemStockModel,
  ServiceRequestModel,
  ServiceRequestRequestModel,
  ServiceRequestDataModel,
  ServiceResultDataModel,
  UserModel,
  DbOptionModel,
  //business
  PatientModel,
  GetAllPatientInputModel,
  PatientRecordModel,
  PatientRecordRequestModel,
  ReceptionModel,
  GetAllReceptionInputModel,
  TreatmentModel,
  TreatmentFilterModel,
};
