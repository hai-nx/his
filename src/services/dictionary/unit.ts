import { ApiResult, UnitModel } from '@/models'
import request from '@/utils/request'

const unitService = {
    getAll() {
        return request.get<ApiResult<UnitModel[]>>('api/SUnit/GetAll');
    },
    getById(id: string) {
        return request.get<ApiResult<UnitModel>>('api/SUnit/GetById?id=' + id);
    },
    createOrEdit(input: UnitModel) {
        return request.post<ApiResult<UnitModel>>('api/SUnit/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.delete<ApiResult<UnitModel>>('api/SUnit/Delete?id=' + id);
    }
}

export default unitService;