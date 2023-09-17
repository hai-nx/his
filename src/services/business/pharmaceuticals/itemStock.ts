import request from '@/utils/request'
import { ApiResult, ItemStockModel } from '@/models'
import { CommodityType } from "@/enums/commodityType"

const dItemStockService = {
    getAll(params: any = null) {
        return request.get<ApiResult<ItemStockModel[]>>('api/ItemStock/GetAll', params);
    },
    getItemByStocks(stockId: string) {
        return request.get<ApiResult<ItemStockModel[]>>("api/ItemStock/GetItemByStocks?stockId=" + stockId);
    },
    getItemStockByStocks(stockId: string, isGroup: boolean, commodityType?: CommodityType) {
        return request.get<ApiResult<ItemStockModel[]>>("api/ItemStock/GetItemStockByStocks?stockId=" + stockId + "&commodityType=" + commodityType + "&isGroup=" + isGroup);
    },
}

export default dItemStockService