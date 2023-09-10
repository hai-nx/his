// thông tin tiếp nhận bệnh nhân
export default interface ReceptionModel {
    patientId: string | undefined,
    patientCode: string,
    patientName: string,
    patientRecordId: string | undefined,
    patientRecordCode: string | undefined,
    userId: string | undefined,
    branchId: string | undefined,
    departmentId: string | undefined,
    roomId: string | undefined,

    birthDate: Date | undefined,
    birthYear: number | undefined,
    birthPlace: string | undefined,
    genderId: string | undefined,
    ethnicityId: string | undefined
}