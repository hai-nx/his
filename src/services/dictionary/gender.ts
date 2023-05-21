import { ApiResult, GenderModel } from '@/models'
import request from '@/utils/request'

const ethnicService = {
    getAll() {
        return request.get<ApiResult<GenderModel[]>>('api/SGender/GetAll');
    },
    getById(id: string) {
        return request.get<ApiResult<GenderModel>>('api/SGender/GetById?id=' + id);
    },
    createOrEdit(input: GenderModel) {
        return request.post<ApiResult<GenderModel>>('api/SGender/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.post<ApiResult<GenderModel>>('api/SGender/Delete?id=' + id);
    }
}

export default ethnicService