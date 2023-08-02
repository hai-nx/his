import { Dayjs } from 'dayjs'
import { DImpMestMedicineModel } from '@/models'

export default interface DImpMestModel {
    id: string | null,
    /// Mã phiếu
    code: string | null,
    /// Trạng thái
    imMestStatus: number,
    /// Kho nhập
    imStockId: string | null,
    /// Kho xuất
    exStockId: string | null,
    /// Loại phiếu nhập, xuất
    imExMestTypeId: number,
    /// Người nhận, người nhập
    receiverUserId: string | null,
    /// NGười duyệt
    approverUserId: string | null,
    /// Thời gian nhập, ngày tạo phiếu nhập
    impTime: Dayjs | null,
    /// Ngày duyệt, ngày nhập kho
    approverTime: Dayjs | null,
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
    /// NGười giao
    deliverer: string | null,

    dImpMestMedicines: DImpMestMedicineModel[]
}

