import { ApiResult, UnitModel } from '@/models'
import request from '@/utils/request'

const unitService = {
    getAll() {
        return request.get<ApiResult<UnitModel[]>>('api/Unit/GetAll');
    },
    getById(id: string) {
        return request.get<ApiResult<UnitModel>>('api/Unit/GetById?id=' + id);
    },
    createOrEdit(input: UnitModel) {
        return request.post<ApiResult<UnitModel>>('api/Unit/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.delete<ApiResult<UnitModel>>('api/Unit/Delete?id=' + id);
    }
}

export default unitService;