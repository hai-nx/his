import { ApiResult, ServiceGroupHeInModel } from '@/models'
import request from '@/utils/request'

const serviceGroupHeInService = {
    getAll() {
        return request.get<ApiResult<ServiceGroupHeInModel[]>>('api/ServiceGroupHeIn/GetAll');
    },
    getById(id: string) {
        return request.get<ApiResult<ServiceGroupHeInModel>>('api/ServiceGroupHeIn/GetById?id=' + id);
    },
    createOrEdit(input: ServiceGroupHeInModel) {
        return request.post<ApiResult<ServiceGroupHeInModel>>('api/ServiceGroupHeIn/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.delete<ApiResult<ServiceGroupHeInModel>>('api/ServiceGroupHeIn/Delete?id=' + id);
    }
}

export default serviceGroupHeInService;