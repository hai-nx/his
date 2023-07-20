import { ApiResult, MedicineGroupModel } from '@/models'
import request from '@/utils/request'

const medicineGroupService = {
    getAll() {
        return request.get<ApiResult<MedicineGroupModel[]>>('api/SMedicineGroup/GetAll')
    },
    getById(id: string) {
        return request.get<ApiResult<MedicineGroupModel>>('api/SMedicineGroup/GetById?id=' + id);
    },
    createOrEdit(input: MedicineGroupModel) {
        return request.post<ApiResult<MedicineGroupModel>>('api/SMedicineGroup/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.post('api/SMedicineGroup/Delete', id);
    }
}

export default medicineGroupService;