import PatientRecordModel from "../patientRecord";

interface ReceptionModel {
  id?: string;
  patientId?: string;
  patientRecordId?: string;
  medicalRecordId?: string;
  patientCode?: string;
  patientName?: string;
  patientRecordCode?: string;
  medicalRecordCode?: string;
  receptionDate?: Date;
  receptionObjectTypeId?: number;
  receptionObjectTypeName?: string;
  patientObjectTypeId?: number;
  patientObjectTypeName?: string;
  hospitalizationReason?: string;
  description?: string;
  branchId?: string;
  branchName?: string;
  departmentId?: string;
  departmentName?: string;
  roomId?: string;
  roomName?: string;
  gate?: number;
  userId?: string;
  userName?: string;
  serviceId?: string;
  serviceName?: string;
  executeDepartmentId?: string;
  executeDepartmentName?: string;
  executeRoomId?: string;
  executeRoomName?: string;
  executeUserId?: string;
  executeUserName?: string;

  birthDate?: Date;
  birthYear?: Number;
  genderId?: string;
  ethnicId?: string;
  countryId?: string;
  careerId?: string;
  provinceId?: string;
  districtId?: string;
  wardId?: string;
  address?: string;

  insuranceCode?: string;
  insuranceMediOrgCode?: string;
  insuranceMediOrgName?: string;
  insuranceFromDate?: Date;
  insuranceToDate?: Date;
  insuranceAddress?: string;
  liveAreaId?: string;
  rightRouteTypeId?: number;

  patientRecord?: PatientRecordModel;
}

export default ReceptionModel;
