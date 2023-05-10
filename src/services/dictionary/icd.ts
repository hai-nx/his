import { ApiResult, ICDModel } from '@/models'
import request from '@/utils/request'

const icdService = {
    getAll() {
        return request.get<ApiResult<ICDModel[]>>('api/SIcd/GetAll')
    },
    getById(id: string) {
        return request.get<ApiResult<ICDModel>>('api/SIcd/GetById?id=' + id);
    },
    createOrEdit(input: ICDModel) {
        return request.post<ApiResult<ICDModel>>('api/SIcd/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.post('api/SIcd/Delete', id);
    }
}

export default icdService;