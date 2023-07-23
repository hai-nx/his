import { ApiResult, MedicineLineModel } from '@/models'
import request from '@/utils/request'

const medicineLineService = {
    getAll() {
        return request.get<ApiResult<MedicineLineModel[]>>('api/SMedicineLine/GetAll')
    },
    getById(id: string) {
        return request.get<ApiResult<MedicineLineModel>>('api/SMedicineLine/GetById?id=' + id);
    },
    createOrEdit(input: MedicineLineModel) {
        return request.post<ApiResult<MedicineLineModel>>('api/SMedicineLine/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.delete('api/SMedicineLine/Delete?id=' + id);
    }
}

export default medicineLineService;