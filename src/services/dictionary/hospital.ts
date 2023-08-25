import { ApiResult, HospitalModel } from '@/models'
import request from '@/utils/request'

const hospitalService = {
    getAll() {
        return request.get<ApiResult<HospitalModel[]>>('api/Hospital/GetAll')
    },
    getById(id: string) {
        return request.get<ApiResult<HospitalModel>>('api/Hospital/GetById?id=' + id);
    },
    createOrEdit(input: HospitalModel) {
        return request.post<ApiResult<HospitalModel>>('api/Hospital/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.delete('api/Hospital/Delete?id=' + id);
    }
}

export default hospitalService;