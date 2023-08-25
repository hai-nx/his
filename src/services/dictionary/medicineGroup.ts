import { ApiResult, MedicineGroupModel } from '@/models'
import request from '@/utils/request'

const medicineGroupService = {
    getAll() {
        return request.get<ApiResult<MedicineGroupModel[]>>('api/MedicineGroup/GetAll')
    },
    getById(id: string) {
        return request.get<ApiResult<MedicineGroupModel>>('api/MedicineGroup/GetById?id=' + id);
    },
    createOrEdit(input: MedicineGroupModel) {
        return request.post<ApiResult<MedicineGroupModel>>('api/MedicineGroup/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.delete('api/MedicineGroup/Delete?id=' + id);
    }
}

export default medicineGroupService;