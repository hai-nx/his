import { ApiResult, ProvinceModel } from '@/models'
import request from '@/utils/request'

const countryService = {
    getAll() {
        return request.get<ApiResult<ProvinceModel[]>>('api/SProvince/GetAll');
    },
    getById(id: string) {
        return request.get<ApiResult<ProvinceModel>>('api/SProvince/GetById?id=' + id);
    },
    createOrEdit(input: ProvinceModel) {
        return request.post<ApiResult<ProvinceModel>>('api/SProvince/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.post<ApiResult<ProvinceModel>>('api/SProvince/Delete?id=' + id);
    }
}

export default countryService