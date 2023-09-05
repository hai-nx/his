import request from '@/utils/request'
import { ApiResult, ItemStockModel } from '@/models'

const dItemStockService = {
    getAll() {
        return request.get<ApiResult<ItemStockModel[]>>('api/ItemStock/GetAll');
    },
    getItemByStocks(stockId: string) {
        return request.get<ApiResult<ItemStockModel[]>>("api/ItemStock/GetItemByStocks?stockId=" + stockId);
    },
}

export default dItemStockService