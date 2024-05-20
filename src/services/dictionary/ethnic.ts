import { ResultModel, PagedResultModel, EthnicityModel } from '@/models'
import request from '@/utils/request'

const ethnicService = {
    getAll() {
        return request.get<PagedResultModel<EthnicityModel>>('api/Ethnic/GetAll');
    },
    getById(id: string) {
        return request.get<ResultModel<EthnicityModel>>('api/Ethnic/GetById?id=' + id);
    },
    createOrEdit(input: EthnicityModel) {
        return request.post<ResultModel<EthnicityModel>>('api/Ethnic/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.delete<ResultModel<EthnicityModel>>('api/Ethnic/Delete?id=' + id);
    }
}

export default ethnicService