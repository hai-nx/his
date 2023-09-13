import DictionaryBase from "./../base";

export default interface itemModel extends DictionaryBase {
    commodityType: number // Loại hàng hóa
    // Mã BH
    heInCode: string | null,
    // Đường dùng thuốc
    itemLineId: string | null,
    // Nhóm thuốc
    itemGroupId: string | null,
    // Nhóm thuốc
    itemTypeId: string | null,
    // Thuốc
    itemId: string | null,
    // Đơn vị tính
    unitId: string | null,
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
    impTaxRate: number | null,
    // Phần trăm thuế
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
    dueDate: string | null,
    // Quyệt định thầu
    tenderDecision: string | null,
    // Gói thầu
    tenderPackage: string | null,
    // Nhóm thầu
    tenderGroup: string | null,
    // Năm thầu
    tenderYear: number | null,
}