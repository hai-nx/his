import { MedicineModel } from '@/models'
import { Dayjs } from 'dayjs'

export default interface DImpMestMedicineModel {
    code?: string,
    // Mã BH
    heInCode?: string,
    // Đường dùng thuốc
    medicineLineId?: string,
    // Nhóm thuốc
    medicineGroupId?: string,
    // Nhóm thuốc
    medicineTypeId?: string,
    // Thuốc
    medicineId?: string,
    // Đơn vị tính
    unitId?: string,
    // Hướng dẫn
    tutorial?: string,
    // Nước sản xuất
    countryId?: string,
    // Giá nhập
    impPrice?: number,
    // Số lượng nhập
    impQuantity?: number,
    // Phần trăm vat giá nhập
    impVatRate?: number,
    // Phần trăm thuế
    taxRate?: number,
    // Phần trăm thuế
    impAmount?: number,
    // Hoạt chất
    activeSubstance?: string,
    // Nồng độ
    concentration?: string,
    // Hàm lượng
    content?: string,
    // Hãng sản xuất
    manufacturer?: string,
    // Quy cách đóng gói
    packagingSpecifications?: string,
    // Số ĐK
    registrationNumber?: string,
    // Lô
    lot?: string,
    // Hạn dùng
    dueDate?: Dayjs,
    // Quyệt định thầu
    tenderDecision?: string,
    // Gói thầu
    tenderPackage?: string,
    // Nhóm thầu
    tenderGroup?: string,
    // Năm thầu
    tenderYear?: number,
}