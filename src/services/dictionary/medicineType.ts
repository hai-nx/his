import { ApiResult, MedicineTypeImportModel, MedicineTypeModel } from '@/models'
import request from '@/utils/request'

const medicineTypeService = {
    getAll() {
        return request.get<ApiResult<MedicineTypeModel[]>>('api/MedicineType/GetAll')
    },
    getById(id: string) {
        return request.get<ApiResult<MedicineTypeModel>>('api/MedicineType/GetById?id=' + id);
    },
    createOrEdit(input: MedicineTypeModel) {
        return request.post<ApiResult<MedicineTypeModel>>('api/MedicineType/CreateOrEdit', input);
    },
    import(input: MedicineTypeImportModel[]) {
        return request.post<ApiResult<boolean>>('api/MedicineType/Import', input);
    },
    delete(id: string) {
        return request.delete('api/MedicineType/Delete?id=' + id);
    }
}

export default medicineTypeService;