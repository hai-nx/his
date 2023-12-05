import { ResultModel, CountryModel } from '@/models'
import request from '@/utils/request'

const countryService = {
    getAll() {
        return request.get<ResultModel<CountryModel[]>>('api/Country/GetAll');
    },
    getById(id: string) {
        return request.get<ResultModel<CountryModel>>('api/Country/GetById?id=' + id);
    },
    createOrEdit(input: CountryModel) {
        return request.post<ResultModel<CountryModel>>('api/Country/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.delete<ResultModel<CountryModel>>('api/Country/Delete?id=' + id);
    }
}

export default countryService