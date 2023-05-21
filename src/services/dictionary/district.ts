import { ApiResult, DistrictModel } from '@/models'
import request from '@/utils/request'

const districtService = {
    getAll() {
        return request.get<ApiResult<DistrictModel[]>>('api/SDistrict/GetAll');
    },
    getById(id: string) {
        return request.get<ApiResult<DistrictModel>>('api/SDistrict/GetById?id=' + id);
    },
    createOrEdit(input: DistrictModel) {
        return request.post<ApiResult<DistrictModel>>('api/SDistrict/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.post<ApiResult<DistrictModel>>('api/SDistrict/Delete?id=' + id);
    }
}

export default districtService