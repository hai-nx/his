import { ApiResult, GenderModel } from '@/models'
import request from '@/utils/request'

const ethnicService = {
    getAll() {
        return request.get<ApiResult<GenderModel[]>>('api/Gender/GetAll');
    },
    getById(id: string) {
        return request.get<ApiResult<GenderModel>>('api/Gender/GetById?id=' + id);
    },
    createOrEdit(input: GenderModel) {
        return request.post<ApiResult<GenderModel>>('api/Gender/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.delete<ApiResult<GenderModel>>('api/Gender/Delete?id=' + id);
    }
}

export default ethnicService