export default interface ServiceRequestDetailResultModel {
    id?: string
    serviceResultIndiceId?: string // Id danh mục kết quả
    serviceRequestId?: string
    serviceRequestDetailId?: string
    serviceId?: string
    result?: string // Kết quả
    normalRange?: string // Khoảng bình thường
    testingMachine?: string // Máy xét nghiệm
    isNumber?: string // Kết quả dạng chữ hoặc số

    serviceCode?: string
    serviceName?: string
    serviceResultIndiceCode?: string
    serviceResultIndiceName?: string
    serviceResultIndiceUnit?: string
}