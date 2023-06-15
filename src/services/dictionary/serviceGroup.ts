import { ApiResult, ServiceGroupModel } from '@/models'
import request from '@/utils/request'

const serviceGroupService = {
    getAll() {
        return request.get<ApiResult<ServiceGroupModel[]>>('api/SServiceGroup/GetAll');
    },
    getById(id: string) {
        return request.get<ApiResult<ServiceGroupModel>>('api/SServiceGroup/GetById?id=' + id);
    },
    createOrEdit(input: ServiceGroupModel) {
        return request.post<ApiResult<ServiceGroupModel>>('api/SServiceGroup/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.delete<ApiResult<ServiceGroupModel>>('api/SServiceGroup/Delete?id=' + id);
    }
}

export default serviceGroupService;