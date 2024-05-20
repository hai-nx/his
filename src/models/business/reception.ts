import { PagedResultRequestModel } from "../base";
import { MedicalRecordModel } from "./medicalRecord";
import TreatmentModel from "./treatment";

export interface ReceptionModel {
  id?: string;
  receptionDate?: Date,
  patientID?: string;
  medicalRecordID?: string,
  treatmentID?: string,
  userID?: string,
  branchID?: string,
  departmentID?: string,
  roomID?: string,
  gate?: string,
  receptionObjectTypeID?: number,
  patientObjectTypeID?: number,
  chiefComplaint?: string,
  description?: string,

  numOrder?: number,
  patientCode?: string,
  patientName?: string,
  birthDate?: Date,
  birthYear?: number,
  age?: string,
  address?: string,
  roomName?: string,
  departmentName?: string,
  userName?: string,

  medicalRecord?: MedicalRecordModel,
  treatment?: TreatmentModel
}

export interface GetAllReceptionInputModel extends PagedResultRequestModel {
  maxReceptionDateFilter?: Date,
  minReceptionDateFilter?: Date,
  branchFilter?: string,
  userFilter?: string,
  departmentFilter?: string,
  roomFilter?: string,
  receptionObjectTypeFilter?: number,
  patientObjectTypeFilter?: number,
  patientCodeFilter?: string,
  patientNameFilter?: string,
  genderFilter?: string
}
