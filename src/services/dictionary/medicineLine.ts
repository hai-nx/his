import { ApiResult, MedicineLineModel } from '@/models'
import request from '@/utils/request'

const medicineLineService = {
    getAll() {
        return request.get<ApiResult<MedicineLineModel[]>>('api/MedicineLine/GetAll')
    },
    getById(id: string) {
        return request.get<ApiResult<MedicineLineModel>>('api/MedicineLine/GetById?id=' + id);
    },
    createOrEdit(input: MedicineLineModel) {
        return request.post<ApiResult<MedicineLineModel>>('api/MedicineLine/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.delete('api/MedicineLine/Delete?id=' + id);
    }
}

export default medicineLineService;