import { ApiResult, CareerModel } from '@/models'
import request from '@/utils/request'

const careerService = {
    getAll() {
        return request.get<ApiResult<CareerModel[]>>('api/SCareer/GetAll')
    },
    getById(id: string) {
        return request.get<ApiResult<CareerModel>>('api/SCareer/GetById?id=' + id);
    },
    createOrEdit(input: CareerModel) {
        return request.post<ApiResult<CareerModel>>('api/SCareer/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.post('api/SCareer/Delete', id);
    }
}

export default careerService;