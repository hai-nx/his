import { ApiResult, CountryModel } from '@/models'
import request from '@/utils/request'

const countryService = {
    getAll() {
        return request.get<ApiResult<CountryModel[]>>('api/Country/GetAll');
    },
    getById(id: string) {
        return request.get<ApiResult<CountryModel>>('api/Country/GetById?id=' + id);
    },
    createOrEdit(input: CountryModel) {
        return request.post<ApiResult<CountryModel>>('api/Country/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.delete<ApiResult<CountryModel>>('api/Country/Delete?id=' + id);
    }
}

export default countryService