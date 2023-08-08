import request from '@/utils/request'
import { ApiResult, DImpExpMestTypeModel } from '@/models'

const impExpMestTypeService = {
    getAll() {
        return request.get<ApiResult<DImpExpMestTypeModel[]>>('api/DImpExpMestType/GetAll');
    },
}

export default impExpMestTypeService