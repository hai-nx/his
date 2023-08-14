import request from '@/utils/request'
import { ApiResult, DMedicineStockModel } from '@/models'

const dMedicineStockService = {
    getAll() {
        return request.get<ApiResult<DMedicineStockModel[]>>('api/DMedicineStock/GetAll');
    },
}

export default dMedicineStockService