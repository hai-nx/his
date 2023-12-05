import { ResultModel, PagedResultModel, EthnicModel } from '@/models'
import request from '@/utils/request'

const ethnicService = {
    getAll() {
        return request.get<PagedResultModel<EthnicModel>>('api/Ethnic/GetAll');
    },
    getById(id: string) {
        return request.get<ResultModel<EthnicModel>>('api/Ethnic/GetById?id=' + id);
    },
    createOrEdit(input: EthnicModel) {
        return request.post<ResultModel<EthnicModel>>('api/Ethnic/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.delete<ResultModel<EthnicModel>>('api/Ethnic/Delete?id=' + id);
    }
}

export default ethnicService