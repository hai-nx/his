import { ApiResult, EthnicModel } from '@/models'
import request from '@/utils/request'

const ethnicService = {
    getAll() {
        return request.get<ApiResult<EthnicModel[]>>('api/Ethnic/GetAll');
    },
    getById(id: string) {
        return request.get<ApiResult<EthnicModel>>('api/Ethnic/GetById?id=' + id);
    },
    createOrEdit(input: EthnicModel) {
        return request.post<ApiResult<EthnicModel>>('api/Ethnic/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.delete<ApiResult<EthnicModel>>('api/Ethnic/Delete?id=' + id);
    }
}

export default ethnicService