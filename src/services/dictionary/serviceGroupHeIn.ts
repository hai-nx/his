import { ResultModel, ServiceGroupHeInModel } from '@/models'
import request from '@/utils/request'

const serviceGroupHeInService = {
    getAll() {
        return request.get<ResultModel<ServiceGroupHeInModel[]>>('api/ServiceGroupHeIn/GetAll');
    },
    getById(id: string) {
        return request.get<ResultModel<ServiceGroupHeInModel>>('api/ServiceGroupHeIn/GetById?id=' + id);
    },
    createOrEdit(input: ServiceGroupHeInModel) {
        return request.post<ResultModel<ServiceGroupHeInModel>>('api/ServiceGroupHeIn/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.delete<ResultModel<ServiceGroupHeInModel>>('api/ServiceGroupHeIn/Delete?id=' + id);
    }
}

export default serviceGroupHeInService;