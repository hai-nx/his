import { Dayjs } from 'dayjs'

export default interface ImpMestModel {
    id: string | null,
    code: string | null,
    name: string | null,
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
    /// Ngày hóa đơn
    invTime: Dayjs | null,
    /// NGười giao
    deliverer: string | null,
}

