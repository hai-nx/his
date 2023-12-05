import { ResultModel, ServiceGroupModel } from '@/models'
import request from '@/utils/request'

const serviceGroupService = {
    getAll() {
        return request.get<ResultModel<ServiceGroupModel[]>>('api/ServiceGroup/GetAll');
    },
    getById(id: string) {
        return request.get<ResultModel<ServiceGroupModel>>('api/ServiceGroup/GetById?id=' + id);
    },
    createOrEdit(input: ServiceGroupModel) {
        return request.post<ResultModel<ServiceGroupModel>>('api/ServiceGroup/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.delete<ResultModel<ServiceGroupModel>>('api/ServiceGroup/Delete?id=' + id);
    }
}

export default serviceGroupService;