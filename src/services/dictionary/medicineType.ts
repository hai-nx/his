import { ApiResult, MedicineTypeModel } from '@/models'
import request from '@/utils/request'

const medicineTypeService = {
    getAll() {
        return request.get<ApiResult<MedicineTypeModel[]>>('api/SMedicineType/GetAll')
    },
    getById(id: string) {
        return request.get<ApiResult<MedicineTypeModel>>('api/SMedicineType/GetById?id=' + id);
    },
    createOrEdit(input: MedicineTypeModel) {
        return request.post<ApiResult<MedicineTypeModel>>('api/SMedicineType/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.delete('api/SMedicineType/Delete?id=' + id);
    }
}

export default medicineTypeService;