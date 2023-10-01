import request from '@/utils/request'
import { ApiResult, InOutStockTypeModel } from '@/models'

const inOutStockTypeService = {
    getAll() {
        return request.get<ApiResult<InOutStockTypeModel[]>>('api/InOutStockType/GetAll');
    },
}

export default inOutStockTypeService