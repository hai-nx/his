import { ApiResult, MedicineTypeImportModel, MedicineTypeModel } from '@/models'
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
    import(input: MedicineTypeImportModel[]) {
        return request.post<ApiResult<boolean>>('api/SMedicineType/Import', input);
    },
    delete(id: string) {
        return request.delete('api/SMedicineType/Delete?id=' + id);
    }
}

export default medicineTypeService;