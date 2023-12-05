import { ResultModel, UnitModel } from '@/models'
import request from '@/utils/request'

const unitService = {
    getAll() {
        return request.get<ResultModel<UnitModel[]>>('api/Unit/GetAll');
    },
    getById(id: string) {
        return request.get<ResultModel<UnitModel>>('api/Unit/GetById?id=' + id);
    },
    createOrEdit(input: UnitModel) {
        return request.post<ResultModel<UnitModel>>('api/Unit/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.delete<ResultModel<UnitModel>>('api/Unit/Delete?id=' + id);
    }
}

export default unitService;