import request from '@/utils/request'
import { ApiResult, MedicineStockModel } from '@/models'

const dMedicineStockService = {
    getAll() {
        return request.get<ApiResult<MedicineStockModel[]>>('api/MedicineStock/GetAll');
    },
    getMedicineByStocks(stockId: string) {
        return request.get<ApiResult<MedicineStockModel[]>>("api/MedicineStock/GetMedicineByStocks?stockId=" + stockId);
    },
}

export default dMedicineStockService