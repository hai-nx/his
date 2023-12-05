import { ResultModel, ProvinceModel } from '@/models'
import request from '@/utils/request'

const countryService = {
    getAll() {
        return request.get<ResultModel<ProvinceModel[]>>('api/Province/GetAll');
    },
    getById(id: string) {
        return request.get<ResultModel<ProvinceModel>>('api/Province/GetById?id=' + id);
    },
    createOrEdit(input: ProvinceModel) {
        return request.post<ResultModel<ProvinceModel>>('api/Province/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.delete<ResultModel<ProvinceModel>>('api/Province/Delete?id=' + id);
    }
}

export default countryService