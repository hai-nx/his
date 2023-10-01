import { ApiResult, WardModel } from '@/models'
import request from '@/utils/request'

const wardService = {
    getAll() {
        return request.get<ApiResult<WardModel[]>>('api/Ward/GetAll');
    },
    getById(id: string) {
        return request.get<ApiResult<WardModel>>('api/Ward/GetById?id=' + id);
    },
    createOrEdit(input: WardModel) {
        return request.post<ApiResult<WardModel>>('api/Ward/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.post<ApiResult<WardModel>>('api/Ward/Delete?id=' + id);
    }
}

export default wardService