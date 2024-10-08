import { ServiceRequestDetailModel, ServiceRequestDetailResultModel } from "@/models"
import PagedResultRequestModel from "@/models/PagedResultRequestModel"
import { ServiceRequestStatusType } from "@/enums/serviceRequestStatusType"

export default interface ServiceRequestModel {
    id?: string
    serviceRequestCode?: string
    requestTime?: Date  // ngày chỉ định (tạo phiếu)
    useTime?: Date  // ngày y lệnh
    sampleTime?: Date // thời gian lấy mẫu bệnh phẩm
    sampleReceivingTime?: Date // thời gian tiếp nhận mẫu
    startTime?: Date
    endTime?: Date
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
    sampleUserId?: string // người lấy mẫu
    sampleReceivingUserId?: string // người tiếp nhận mẫu
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

    serviceRequestDetails?: ServiceRequestDetailModel[]
    serviceRequestDetailResults?: ServiceRequestDetailResultModel[]
}

export interface ServiceRequestRequestModel extends PagedResultRequestModel {
    executeRoomIdFilter?: string

    executeDepartmentIdFilter?: string
    serviceRequestStatusIdFilter?: number

    requestTimeFromFilter?: Date // Ngày chỉ định
    requestTimeToFilter?: Date // Ngày chỉ định

    useTimeFromFilter?: Date // Ngày y lệnh
    useTimeToFilter?: Date // Ngày y lệnh

    startTimeFromFilter?: Date // Ngày bắt đầu (thực hiện)
    startTimeToFilter?: Date // Ngày bắt đầu (thực hiện)

    endTimeFromFilter?: Date // Ngày kết thúc (kết quả)
    endTimeToFilter?: Date // Ngày kết thúc (kết quả)

    statusFilter?: ServiceRequestStatusType // Trạng thái phiếu
}