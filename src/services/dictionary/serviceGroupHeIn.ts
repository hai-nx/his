import { ApiResult, ServiceGroupHeInModel } from '@/models'
import request from '@/utils/request'

const serviceGroupHeInService = {
    getAll() {
        return request.get<ApiResult<ServiceGroupHeInModel[]>>('api/SServiceGroupHeIn/GetAll');
    },
    getById(id: string) {
        return request.get<ApiResult<ServiceGroupHeInModel>>('api/SServiceGroupHeIn/GetById?id=' + id);
    },
    createOrEdit(input: ServiceGroupHeInModel) {
        return request.post<ApiResult<ServiceGroupHeInModel>>('api/SServiceGroupHeIn/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.post<ApiResult<ServiceGroupHeInModel>>('api/SServiceGroupHeIn/Delete?id=' + id);
    }
}

export default serviceGroupHeInService;