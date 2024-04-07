import { ResultModel, DictionaryBase } from '@/models'
import request from '@/utils/request'

const rightRouteTypeService = {
    getAll() {
        return request.get<ResultModel<DictionaryBase[]>>('api/RightRouteType/GetAll')
    },
}

export default rightRouteTypeService;