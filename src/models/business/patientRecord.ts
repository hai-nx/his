export default interface PatientRecordModel {
    patientRecordCode: string | undefined
    patientRecordDate: Date,
    patientRecordStatusId: number,
    patientId: string,
    patientCode: string | undefined,
    birthDate: Date,
    birthYear: number,
    birthplace: string,

    address: string,
    workplace: string,
    tel: string,
    mobile: string,
    email: string,
    identificationNumber: string,
    issueDate: Date,
    issueBy: string
}

export interface PatientRecordRequestModel {
    patientFilter?: string,
    patientCodeFilter?: string,
    patientNameFilter?: string,
    patientRecordFilter?: string,
    patientRecordCodeFilter?: string,
    maxPatientRecordDateFilter?: Date
    minPatientRecordDateFilter?: Date,
    maxBirthDateFilter?: Date,
    minBirthDateFilter?: Date,
    maxBirthYearFilter?: number,
    minBirthYearFilter?: number,
    departmentFilter?: string,
    rooomFilter?: string,
    userFilter?: string
}