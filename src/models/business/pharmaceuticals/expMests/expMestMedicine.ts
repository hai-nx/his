export default interface DExpMestMedicineModel {
    id: string | null,
    /// Mã thuốc
    code: string | null,

    /// Mã BH
    heInCode: string | null,

    /// Tên thuốc
    name: string | null,

    /// Thứ tự sắp xếp
    sortOrder: string | null,

    /// Đường dùng thuốc
    medicineLineId: string | null,

    /// Nhóm thuốc
    medicineGroupId: string | null,

    /// Nhóm thuốc
    medicineTypeId: string | null,

    /// Đơn vị tính
    unitId: string | null,

    /// Hướng dẫn
    tutorial: string | null,

    /// Nước sản xuất
    countryId: string | null,

    /// Giá nhập
    impPrice: string | null,

    /// Số lượng xuất
    expQuantity: string | null,

    /// Phần trăm vat giá nhập
    impVatRate: string | null,

    /// Phần trăm thuế
    taxRate: string | null,

    expAmount: string | null,

    /// Diễn giải
    description: string | null,

    /// Hoạt chất
    activeSubstance: string | null,

    /// Nồng độ
    concentration: string | null,

    /// Hàm lượng
    content: string | null,

    /// Hãng sản xuất
    manufacturer: string | null,

    /// Quy cách đóng gói
    packagingSpecifications: string | null,

    /// Liều dùng
    dosage: string | null,

    /// Lô
    lot: string | null,

    /// Hạn dùng
    dueDate: string | null,

    /// Quyệt định thầu
    tenderDecision: string | null,

    /// Gói thầu
    tenderPackage: string | null,

    /// Nhóm thầu
    tenderGroup: string | null,

    /// Năm thầu
    tenderYear: string | null,

    medicineId: string | null,

    expMestId: string | null,
}