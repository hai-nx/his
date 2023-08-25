import { ApiResult, DistrictModel } from '@/models'
import request from '@/utils/request'

const districtService = {
    getAll() {
        return request.get<ApiResult<DistrictModel[]>>('api/District/GetAll');
    },
    getById(id: string) {
        return request.get<ApiResult<DistrictModel>>('api/District/GetById?id=' + id);
    },
    createOrEdit(input: DistrictModel) {
        return request.post<ApiResult<DistrictModel>>('api/District/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.delete<ApiResult<DistrictModel>>('api/District/Delete?id=' + id);
    }
}

export default districtService