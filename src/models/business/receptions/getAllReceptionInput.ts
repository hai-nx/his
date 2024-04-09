interface GetAllReceptionInputModel {
  receptionFromDateFilter?: Date;
  receptionToDateFilter?: Date;
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

export default GetAllReceptionInputModel;
