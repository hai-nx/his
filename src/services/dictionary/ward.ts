import { ApiResult, WardModel } from '@/models'
import request from '@/utils/request'

const wardService = {
    getAll() {
        return request.get<ApiResult<WardModel[]>>('api/SWard/GetAll');
    },
    getById(id: string) {
        return request.get<ApiResult<WardModel>>('api/SWard/GetById?id=' + id);
    },
    createOrEdit(input: WardModel) {
        return request.post<ApiResult<WardModel>>('api/SWard/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.post<ApiResult<WardModel>>('api/SWard/Delete?id=' + id);
    }
}

export default wardService