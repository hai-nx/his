import { Dayjs } from 'dayjs'

export default interface DImpMestMedicineModel {
    code: string | null | null,
    // Mã BH
    heInCode: string | null,
    // Tên
    name: string | null
    // Đường dùng thuốc
    medicineLineId: string | null,
    // Nhóm thuốc
    medicineGroupId: string | null,
    // Nhóm thuốc
    medicineTypeId: string | null,
    // Thuốc
    medicineId: string | null,
    // Đơn vị tính
    unitId: string | null,
    unitCode?: string,
    unitName?: string,
    // Hướng dẫn
    tutorial: string | null,
    // Nước sản xuất
    countryId: string | null,
    // Giá nhập
    impPrice: number | null,
    // Số lượng nhập
    impQuantity: number | null,
    // Phần trăm vat giá nhập
    impVatRate: number | null,
    // Phần trăm thuế
    taxRate: number | null,
    // Thanh tien
    impAmount: number | null,
    // Hoạt chất
    activeSubstance: string | null,
    // Nồng độ
    concentration: string | null,
    // Hàm lượng
    content: string | null,
    // Hãng sản xuất
    manufacturer: string | null,
    // Quy cách đóng gói
    packagingSpecifications: string | null,
    // Số ĐK
    registrationNumber: string | null,
    // Lô
    lot: string | null,
    // Hạn dùng
    dueDate: Dayjs | null,
    dueDateString?: string,
    // Quyệt định thầu
    tenderDecision: string | null,
    // Gói thầu
    tenderPackage: string | null,
    // Nhóm thầu
    tenderGroup: string | null,
    // Năm thầu
    tenderYear: number | null,
}