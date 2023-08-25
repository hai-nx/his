import { ApiResult, ICDModel } from '@/models'
import request from '@/utils/request'

const icdService = {
    getAll() {
        return request.get<ApiResult<ICDModel[]>>('api/Icd/GetAll')
    },
    getById(id: string) {
        return request.get<ApiResult<ICDModel>>('api/Icd/GetById?id=' + id);
    },
    createOrEdit(input: ICDModel) {
        return request.post<ApiResult<ICDModel>>('api/Icd/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.delete('api/Icd/Delete?id=' + id);
    }
}

export default icdService;