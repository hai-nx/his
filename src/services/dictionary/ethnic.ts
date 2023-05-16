import { ApiResult, EthnicModel } from '@/models'
import request from '@/utils/request'

const ethnicService = {
    getAll() {
        return request.get<ApiResult<EthnicModel[]>>('api/SEthnic/GetAll');
    },
    getById(id: string) {
        return request.get<ApiResult<EthnicModel>>('api/SEthnic/GetById?id=' + id);
    },
    createOrEdit(input: EthnicModel) {
        return request.post<ApiResult<EthnicModel>>('api/SEthnic/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.post<ApiResult<EthnicModel>>('api/SEthnic/Delete?id=' + id);
    }
}

export default ethnicService