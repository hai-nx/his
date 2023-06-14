import { ApiResult, ServiceUnitModel } from '@/models'
import request from '@/utils/request'

const serviceUnitService = {
    getAll() {
        return request.get<ApiResult<ServiceUnitModel[]>>('api/SServiceUnit/GetAll');
    },
    getById(id: string) {
        return request.get<ApiResult<ServiceUnitModel>>('api/SServiceUnit/GetById?id=' + id);
    },
    createOrEdit(input: ServiceUnitModel) {
        return request.post<ApiResult<ServiceUnitModel>>('api/SServiceUnit/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.post<ApiResult<ServiceUnitModel>>('api/SServiceUnit/Delete?id=' + id);
    }
}

export default serviceUnitService;