import { ServiceRequestDetailResultModel } from "@/models"

export default interface ServiceRequestDetailModel {
    id?: string
    serviceRequestId?: string // phiếu chỉ định
    insuranceId?: string // bảo hiểm
    serviceId?: string // dịch vụ
    serviceName?: string
    startTime?: string
    endTime?: string
    price?: number// đơn giá
    quantity?: number // số lượng
    amount?: number// thành tiền
    discountAmount?: number // chiết khấu

    patientTypeId?: string // đối tượng
    description?: string

    serviceRequestDetailResults?: ServiceRequestDetailResultModel[]
}