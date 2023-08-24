import request from '@/utils/request'
import { ApiResult, DMedicineStockModel } from '@/models'

const dMedicineStockService = {
    getAll() {
        return request.get<ApiResult<DMedicineStockModel[]>>('api/DMedicineStock/GetAll');
    },
    getMedicineByStocks(stockId: string) {
        return request.get<ApiResult<DMedicineStockModel[]>>("api/DMedicineStock/GetMedicineByStocks?stockId=" + stockId);
    },
}

export default dMedicineStockService