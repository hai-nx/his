import { InOutStockItemModel } from "@/models"

export default interface InOutStockModel {
    id: string | null,
    // Mã phiếu
    code: string | null

    // Trạng thái phiếu
    status: number

    // Loại phiếu: 0 - Nhập, 1 - xuất
    type: number | null

    // Kho nhập
    impStockId: string | null
    impStockCode?: string
    impStockName?: string

    // Kho xuất
    expStockId: string | null
    expStockCode?: string
    expStockName?: string

    // Loại phiếu nhập, xuất
    inOutStockTypeId: number | null
    inOutStockTypeName?: string

    /// Người nhận
    receiverUserId: string | null

    // Người duyệt
    approverUserId: string | null

    // Ngày duyệt
    approverTime: Date | null

    // Ngày tạo phiếu, yêu cầu
    reqTime: Date | null

    // Người tạo phiếu nhập
    creationUserId: string | null

    // Ngày nhập kho
    stockImpTime: Date | null

    // Người nhập kho
    stockImpUserId: string | null

    description: string | null

    // Phòng yêu cầu
    reqRoomId: string | null

    // Khoa yêu cầu
    reqDepartmentId: string | null

    // Id Bệnh nhân
    patientId: string | null

    // Id điều trị
    patientRecordId: string | null

    // Nhà cung cấp
    supplierId: string | null

    // Ngày hóa đơn
    invTime: Date | null

    // Số hóa đơn
    invNo: string | null

    // NGười giao
    deliverer: string | null

    // Ngày xuất kho
    stockExpTime: string | null

    // Người xuất kho
    stockExpUserId: string | null

    // Loại hàng hóa
    commodityType: number

    inOutStockItems: InOutStockItemModel[]
}