import request from '@/utils/request'
import { ResultModel, ItemStockModel } from '@/models'
import { CommodityType } from "@/enums/commodityType"

const itemStockService = {
    getAll(params: any = null) {
        return request.get<ResultModel<ItemStockModel[]>>('api/ItemStock/GetAll', params);
    },
    getItemByStocks(stockId: string) {
        return request.get<ResultModel<ItemStockModel[]>>("api/ItemStock/GetItemByStocks?stockId=" + stockId);
    },
    getItemStockByStocks(stockId: string, isGroup: boolean, isAvailableQuantity: boolean, commodityType?: CommodityType) {
        let url = "api/ItemStock/GetItemStockByStocks?stockId=" + stockId + "&isGroup=" + isGroup + "&isAvailableQuantity=" + isAvailableQuantity;
        if (commodityType) {
            url += "&commodityType=" + commodityType;
        }
        return request.get<ResultModel<ItemStockModel[]>>(url);
    },
}

export default itemStockService