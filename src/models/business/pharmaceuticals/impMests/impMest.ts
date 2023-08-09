import { Dayjs } from 'dayjs'
import { DImpMestMedicineModel } from '@/models'

export default interface DImpMestModel {
    id: string | null,
    /// Mã phiếu
    code: string | null,

    /// Trạng thái
    impMestStatus: number,

    /// Kho nhập
    imStockId: string | null,

    /// Kho xuất
    exStockId: string | null,

    /// Loại phiếu nhập, xuất
    imExMestTypeId: number,
    imExMestTypeName?: string | null

    /// Người nhận
    receiverUserId: string | null,

    /// Thời gian nhập
    impTime: Dayjs | null | string,

    /// Người lập
    impUserId: string | null,

    /// Ngày duyệt
    approverTime: Dayjs | null,

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
    invTime: Dayjs | null,

    /// Số hóa đơn
    invNo: string | null,

    /// Người giao
    deliverer: string | null,

    /// Ngày nhập kho
    stockReceiptTime: Dayjs | null

    /// Người nhập kho
    stockReceiptUserId: string | null,

    dImpMestMedicines: DImpMestMedicineModel[]
}

