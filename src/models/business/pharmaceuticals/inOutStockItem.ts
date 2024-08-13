import { ItemPricePolicyModel } from "@/models"

export default interface InOutStockItemModel {
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
    itemLineId: string | null
    // Nhóm thuốc
    itemGroupId: string | null
    // Nhóm thuốc
    itemTypeId: string | null
    // Đơn vị tính
    unitId: string | null
    // Hướng dẫn
    tutorial: string | null
    // Nước sản xuất
    countryId: string | null
    // Giá nhập
    impPrice: number
    // Số lượng YC
    requestQuantity: number
    // Số lượng duyệt
    approvedQuantity: number
    // Phần trăm vat giá nhập
    impVatRate: number
    // Phần trăm thuế
    impTaxRate: number
    // Thành tiền
    impAmount: number
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
    dueDate: Date | null
    // Quyệt định thầu
    tenderDecision: string | null
    // Gói thầu
    tenderPackage: string | null
    // Nhóm thầu
    tenderGroup: string | null
    // Năm thầu
    tenderYear: number | null
    // Id lô thuốc
    itemId: string | null
    inOutStockId: string | null
    commodityType: number

    /// <summary>
    /// Số lượng tồn kho
    /// </summary>
    quantity?: number | null

    /// <summary>
    /// Số lượng khả dụng
    /// </summary>
    availableQuantity?: number | null

    itemPricePolicies: ItemPricePolicyModel[]
}