import { ServiceResultDataModel } from "@/models"

export default interface ServiceRequestDataModel {
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

    serviceResultDatas?: ServiceResultDataModel[]
}