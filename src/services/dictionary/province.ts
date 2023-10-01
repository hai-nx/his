import { ApiResult, ProvinceModel } from '@/models'
import request from '@/utils/request'

const countryService = {
    getAll() {
        return request.get<ApiResult<ProvinceModel[]>>('api/Province/GetAll');
    },
    getById(id: string) {
        return request.get<ApiResult<ProvinceModel>>('api/Province/GetById?id=' + id);
    },
    createOrEdit(input: ProvinceModel) {
        return request.post<ApiResult<ProvinceModel>>('api/Province/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.delete<ApiResult<ProvinceModel>>('api/Province/Delete?id=' + id);
    }
}

export default countryService