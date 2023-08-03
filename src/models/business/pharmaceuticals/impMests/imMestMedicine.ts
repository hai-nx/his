import { MedicineModel } from '@/models'

export default interface DImpMestMedicineModel {
    id: string | null,
    imMestId: string | null,

    // Thứ tự sắp xếp
    sortOrder: number | null,
    // Thuốc
    medicineId: string | null,
    // Giá nhập
    impPrice: number | null,
    // Số lượng nhập
    impQuantity: number | null,
    // Phần trăm vat giá nhập
    impVatRate: number | null,
    // Phần trăm thuế
    taxRate: number | null,
    // Thành tiền
    impAmount: number | null,

    medicine: MedicineModel | null
}