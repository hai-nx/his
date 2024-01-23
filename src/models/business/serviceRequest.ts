import { ServiceRequestDataModel, ServiceResultDataModel } from "@/models"
import PagedResultRequestModel from "@/models/PagedResultRequestModel"
import { ServiceRequestStatusType } from "@/enums/serviceRequestStatusType"

export default interface ServiceRequestModel {
    id?: string
    serviceRequestCode?: string
    requestTime?: Date | number // ngày chỉ định (tạo phiếu)
    useTime?: Date | number // ngày y lệnh
    startTime?: Date | number
    endTime?: Date | number
    barcode?: string
    numOrder?: number // số thứ tự chỉ định trong ngày (số thứ tự thực hiện)
    ssPriority?: boolean // ưu tiên
    icdCode?: string // chẩn đoán
    icdName?: string// tên chẩn đoán
    icdSubCode?: string// bệnh kèm theo
    icdText?: string // danh sách bệnh kèm theo
    serviceRequestTypeId?: string // loại dịch vụ
    patientRecordId?: string
    medicalRecordId?: string
    treatmentId?: string
    departmentId?: string// khoa chỉ định
    roomId?: string // phòng chỉ định
    userId?: string // người chỉ định
    startUserId?: string // người bắt đầu
    endUserId?: string // người kết thúc (trả kết quả)
    executeDepartmentId?: string // khoa thực hiện
    executeRoomId?: string // phòng thực hiện
    executeUserId?: string // người thực hiện
    status?: ServiceRequestStatusType // Trạng thái phiếu

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
    startUserCode?: string
    startUserName?: string
    endUserCode?: string
    endUserName?: string

    serviceRequestDatas?: ServiceRequestDataModel[]
    serviceResultDatas?: ServiceResultDataModel[]
}

export interface ServiceRequestRequestModel extends PagedResultRequestModel {
    executeRoomIdFilter?: string

    executeDepartmentIdFilter?: string
    serviceRequestStatusIdFilter?: number

    requestTimeFromFilter?: number // Ngày chỉ định
    requestTimeToFilter?: number // Ngày chỉ định

    useTimeFromFilter?: number // Ngày y lệnh
    useTimeToFilter?: number // Ngày y lệnh

    startTimeFromFilter?: number // Ngày bắt đầu (thực hiện)
    startTimeToFilter?: number // Ngày bắt đầu (thực hiện)

    endTimeFromFilter?: number // Ngày kết thúc (kết quả)
    endTimeToFilter?: number // Ngày kết thúc (kết quả)

    statusFilter?: ServiceRequestStatusType // Trạng thái phiếu
}