import { DExpMestMedicineModel } from '@/models'

export default interface DExpMestModel {
    id: string | null,

    /// Mã phiếu
    code: string | null,

    /// Trạng thái phiếu nhập
    impMestStatus: number,

    /// Trang thái phiếu xuất
    expMestStatus: number,

    /// Kho nhập
    impStockId: string | null,
    impStockCode?: string | null,
    impStockName?: string | null,

    /// Kho xuất
    expStockId: string | null,
    expStockCode?: string | null,
    expStockName?: string | null,

    /// Loại phiếu nhập, xuất
    impExpMestTypeId: number,
    impExpMestTypeName?: string | null

    /// Người duyệt
    approverUserId: string | null,

    /// Ngày duyệt
    approverTime: string | null,

    /// Ngày tạo phiếu xuất
    expTime: string | null,

    /// Người tạo phiếu xuất
    expUserId: string | null,

    /// Ngày nhập kho
    stockExpTime: string | null,

    /// Người nhập kho
    stockExpUserId: string | null,

    /// Nội dung
    description: string | null,

    /// Phòng yêu cầu
    reqRoomId: string | null,

    /// Khoa yêu cầu
    reqDepartmentId: string | null,

    /// Id điều trị
    patientRecordId: string | null,

    /// Id Bệnh nhân
    patientId: string | null,

    /// Nhà cung cấp
    supplierId: string | null,

    impMestId: string | null,

    dExpMestMedicines: DExpMestMedicineModel[]
}