import { ServiceRequestDataModel } from "@/models"
import PagedResultRequestModel from "@/models/PagedResultRequestModel"

export default interface ServiceRequestModel {
    id?: string
    serviceRequestCode?: string
    serviceRequestDate?: Date // ngày chỉ định (tạo phiếu)
    serviceRequestUseDate?: string // ngày y lệnh
    barcode?: string
    numOrder?: number // số thứ tự chỉ định trong ngày (số thứ tự thực hiện)
    ssPriority?: boolean // ưu tiên
    icdCode?: string // chẩn đoán
    icdName?: string// tên chẩn đoán
    icdSubCode?: string// bệnh kèm theo
    icdText?: string // danh sách bệnh kèm theo
    serviceRequestTypeId?: string // loại dịch vụ
    serviceRequestStatusId?: string // trạng thái
    patientRecordId?: string
    medicalRecordId?: string
    treatmentId?: string
    departmentId?: string// khoa chỉ định
    roomId?: string // phòng chỉ định
    userId?: string // người chỉ định
    executeDepartmentId?: string // khoa thực hiện
    executeRoomId?: string // phòng thực hiện
    executeUserId?: string // người thực hiện

    userCode?: string
    userName?: string
    patientCode?: string
    patientName?: string
    departmentCode?: string
    departmentName?: string
    roomCode?: string
    roomName?: string
    executeRoomCode?: string
    executeRoomName?: string
    executeUserCode?: string
    executeUserName?: string

    serviceRequestDatas?: ServiceRequestDataModel[]
}

export interface ServiceRequestRequestModel extends PagedResultRequestModel {
    executeRoomIdFilter?: string
    executeDepartmentIdFilter?: string
    serviceRequestStatusIdFilter?: number

    serviceRequestUseDateFromFilter?: Date | string
    serviceRequestUseDateToFilter?: Date | string

    serviceRequestDateFromFilter?: Date | string
    serviceRequestDateToFilter?: Date | string
}