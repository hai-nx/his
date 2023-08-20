import { MedicineModel } from "@/models"

export default interface DMedicineStockModel {
    id: string | null,
    stockId: string | null
    medicineId: string | null

    /// <summary>
    /// Số lượng tồn kho
    /// </summary>
    quantity: number | null

    /// <summary>
    /// Số lượng khả dụng
    /// </summary>
    availableQuantity: number | null

    stockCode?: string
    stockName?: string
    medicineCode?: string
    medicineName?: string

    sMedicine: MedicineModel | null
}