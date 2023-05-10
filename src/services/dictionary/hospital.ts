import { ApiResult, HospitalModel } from '@/models'
import request from '@/utils/request'

const hospitalService = {
    getAll() {
        return request.get<ApiResult<HospitalModel[]>>('api/SHospital/GetAll')
    },
    getById(id: string) {
        return request.get<ApiResult<HospitalModel>>('api/SHospital/GetById?id=' + id);
    },
    createOrEdit(input: HospitalModel) {
        return request.post<ApiResult<HospitalModel>>('api/SHospital/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.post('api/SHospital/Delete', id);
    }
}

export default hospitalService;