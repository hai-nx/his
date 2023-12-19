export default interface ServiceRequestModel {
    id?: string
    serviceRequestCode?: string
    serviceRequestDate?: string // ngày chỉ định (tạo phiếu)
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
}