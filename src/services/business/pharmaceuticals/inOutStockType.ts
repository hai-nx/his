import request from '@/utils/request'
import { ResultModel, InOutStockTypeModel } from '@/models'

const inOutStockTypeService = {
    getAll() {
        return request.get<ResultModel<InOutStockTypeModel[]>>('api/InOutStockType/GetAll');
    },
}

export default inOutStockTypeService