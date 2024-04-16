import { PagedResultRequestModel } from "../base";

export interface ReceptionModel {
  id?: string;
  patientId?: string;
  patientRecordId?: string;
  medicalRecordId?: string;
  patientCode?: string;
  patientRecordCode?: string;
  medicalRecordCode?: string;
  patientName?: string;
  receptionDate?: Date | string;
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
  gate?: string;
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
}

export interface GetAllReceptionInputModel extends PagedResultRequestModel {
  receptionFromDateFilter?: string;
  receptionToDateFilter?: string;
  receptionObjectTypeFilter?: number;
  patientObjectTypeFilter?: number;
  branchFilter?: string;
  departmentFilter?: string;
  roomFilter?: string;
  userFilter?: string;
  executeDepartmentFilter?: string;
  executeRoomFilter?: string;
  executeUserFilter?: string;
}
