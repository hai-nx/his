import DictionaryBase from "./base";

export default interface ItemTypeModel extends DictionaryBase {
    commodityType: number // Loại hàng hóa 
    heInCode: string | null, // Mã BHYT
    serviceGroupHeInId: string | null,
    itemLineId: string | null, //Đường dùng thuốc
    itemGroupId: string | null, // Nhóm thuốc
    unitId: string | null, // Đơn vị tính
    unitCode?: string, // Đơn vị tính
    unitName?: string, // Đơn vị tính
    tutorial: string | null, // Hướng dẫn
    activeSubstance: string | null, // Hoạt chất
    concentration: string | null, // Nồng độ
    content: string | null, // Hàm lượng
    countryId: string | null, // Nước sản xuất
    registrationNumber: string | null, // Số đăng ký
    proprietaryDrug: string | null, // Biệt dược
    manufacturer: string | null, // Hãng sản xuất
    packagingSpecifications: string | null, // Quy cách đóng gói
    impPrice: number | null, // Giá nhập
    impVatRate: number | null, // Phần trăm vat giá nhập
    impTaxRate: number | null, // Phần trăm thuế
    isAntibiotics: boolean, // Thuốc kháng sinh
    isNewDrug: boolean, // Thuốc tân dược
    isPrescriptionDrug: boolean, // Thuốc kê đơn
    isNutraceutical: boolean, // Dược phẩm chức năng
    isSponsoredDrug: boolean, // Thuốc Tài trợ
    isInhalantDrug: boolean, // Thuốc khí dung
    isPrescriptionDrugForChildren: boolean, // Thuốc kê đơn trẻ em
    isTraditionalHerbalDrug: boolean, // Vị thuốc YHCT
    isTraditionalDrugFormulation: boolean, // Chế phẩm YHCT
    isDrugContainerReturnRequest: boolean, // YC trả lại vỏ thuốc
    isAllowZeroQuantity: boolean, // Cho phép kê SL bằng 0
    isRadiolabeledDrug: boolean, // Thuốc phóng xạ

    // Thông tin khác
    pharmaceuticalFormulation: string | null, // Dạng bào chế
    origin: string | null, // Nguồn gốc
    scientificName: string | null, // Tên khoa học vị thuốc
    scientificNameChildren: string | null, // Tên KH của cây con, khoáng vật
    dugStatus: string | null, // Tình trạng dược liệu
    requirementUseDug: string | null, // Yêu cầu sử dụng dược liệu
    pharmaceuticalDivision: string | null, // Bộ phận dược liệu sử dụng
    processingLossRate: number | null, // Tỷ lệ hao hụt chế biến
    otherExpenses: number | null, // Chi phí khác
    preparationMethod: string | null, // Phương pháp chế biến
    qualityStandards: string | null, // Tiêu chuẩn chất lượng
}