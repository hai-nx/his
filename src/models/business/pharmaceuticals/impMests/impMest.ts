import { DImpMestMedicineModel } from '@/models'

export default interface DImpMestModel {
    id: string | null,
    /// Mã phiếu
    code: string | null,

    /// Trạng thái phiếu nhập
    impMestStatus: number,

    /// Trạng thái phiếu xuất
    expMestStatus: number,

    /// Kho nhập
    impStockId: string | null,

    /// Kho xuất
    expStockId: string | null,

    /// Loại phiếu nhập, xuất
    impExpMestTypeId: number,
    impExpMestTypeName?: string | null

    /// Người nhận
    receiverUserId: string | null,

    /// Thời gian nhập
    impTime: string | null,

    /// Người lập
    impUserId: string | null,

    /// Ngày duyệt
    approverTime: string | null,

    /// NGười duyệt
    approverUserId: string | null,

    /// Nội dung
    description: string | null,

    /// Phòng yêu cầu
    reqRoomId: string | null,

    /// Khoa yêu cầu
    reqDepartmentId: string | null,

    /// Id điều trị
    treatmentId: string | null,

    /// Id Bệnh nhân
    patientId: string | null,

    /// Nhà cung cấp
    supplierId: string | null,

    /// Nhà cung cấp
    supplierAddress: string | null,

    /// Ngày hóa đơn
    invTime: string | null,

    /// Số hóa đơn
    invNo: string | null,

    /// Người giao
    deliverer: string | null,

    /// Ngày nhập kho
    stockImpTime: string | null

    /// Người nhập kho
    stockImpUserId: string | null,

    dImpMestMedicines: DImpMestMedicineModel[]
}

