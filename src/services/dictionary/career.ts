import { ApiResult, CareerModel } from '@/models'
import request from '@/utils/request'

const careerService = {
    getAll() {
        return request.get<ApiResult<CareerModel[]>>('api/Career/GetAll')
    },
    getById(id: string) {
        return request.get<ApiResult<CareerModel>>('api/Career/GetById?id=' + id);
    },
    createOrEdit(input: CareerModel) {
        return request.post<ApiResult<CareerModel>>('api/Career/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.delete('api/Career/Delete?id=' + id);
    }
}

export default careerService;