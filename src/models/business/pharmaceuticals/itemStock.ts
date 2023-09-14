import { ItemModel } from "@/models"

export default interface ItemStockModel extends ItemModel {
    stockId: string | null
    itemId: string | null

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
    itemCode?: string
    itemName?: string

    item: ItemModel | null
}
