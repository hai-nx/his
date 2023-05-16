import { ApiResult, CountryModel } from '@/models'
import request from '@/utils/request'

const countryService = {
    getAll() {
        return request.get<ApiResult<CountryModel[]>>('api/SCountry/GetAll');
    },
    getById(id: string) {
        return request.get<ApiResult<CountryModel>>('api/SCountry/GetById?id=' + id);
    },
    createOrEdit(input: CountryModel) {
        return request.post<ApiResult<CountryModel>>('api/SCountry/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.post<ApiResult<CountryModel>>('api/SCountry/Delete?id=' + id);
    }
}

export default countryService