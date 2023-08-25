import { ApiResult, ServiceGroupModel } from '@/models'
import request from '@/utils/request'

const serviceGroupService = {
    getAll() {
        return request.get<ApiResult<ServiceGroupModel[]>>('api/ServiceGroup/GetAll');
    },
    getById(id: string) {
        return request.get<ApiResult<ServiceGroupModel>>('api/ServiceGroup/GetById?id=' + id);
    },
    createOrEdit(input: ServiceGroupModel) {
        return request.post<ApiResult<ServiceGroupModel>>('api/ServiceGroup/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.delete<ApiResult<ServiceGroupModel>>('api/ServiceGroup/Delete?id=' + id);
    }
}

export default serviceGroupService;