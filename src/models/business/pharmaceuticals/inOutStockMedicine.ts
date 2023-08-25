import { MedicinePricePolicyModel } from "@/models"

export default interface InOutStockMedicineModel {
    id: string | null,
    // Mã thuốc
    code: string | null
    // Mã BH
    heInCode: string | null
    // Tên thuốc
    name: string | null
    // Thứ tự sắp xếp
    sortOrder: string | null
    // Đường dùng thuốc
    medicineLineId: string | null
    // Nhóm thuốc
    medicineGroupId: string | null
    // Nhóm thuốc
    medicineTypeId: string | null
    // Đơn vị tính
    unitId: string | null
    // Hướng dẫn
    tutorial: string | null
    // Nước sản xuất
    countryId: string | null
    // Giá nhập
    impPrice: number | null
    // Số lượng YC
    requestQuantity: number | null
    // Số lượng duyệt
    approvedQuantity: number | null
    // Phần trăm vat giá nhập
    impVatRate: number | null
    // Phần trăm thuế
    taxRate: number | null
    // Thành tiền
    impAmount: number | null
    // Diễn giải
    description: string | null
    // Hoạt chất
    activeSubstance: string | null
    // Nồng độ
    concentration: string | null
    // Hàm lượng
    content: string | null
    // Hãng sản xuất
    manufacturer: string | null
    // Quy cách đóng gói
    packagingSpecifications: string | null
    // Liều dùng
    dosage: string | null
    // Lô
    lot: string | null
    // Hạn dùng
    registrationNumber: string | null
    dueDate: string | null
    // Quyệt định thầu
    tenderDecision: string | null
    // Gói thầu
    tenderPackage: string | null
    // Nhóm thầu
    tenderGroup: string | null
    // Năm thầu
    tenderYear: number | null
    // Id lô thuốc
    medicineId: string | null
    inOutStockId: string | null
    medicinePricePolicies: MedicinePricePolicyModel[]
}