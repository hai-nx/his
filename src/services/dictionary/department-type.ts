import { ApiResult, DepartmentTypeModel } from '@/models'
import request from '@/utils/request'

const departmentTypeService = {
    getAll() {
        return request.get<ApiResult<DepartmentTypeModel[]>>('api/SDepartmentType/GetAll')
    },
    getById(id: string) {
        return request.get<ApiResult<DepartmentTypeModel>>('api/SDepartmentType/GetById?id=' + id);
    },
    createOrEdit(input: DepartmentTypeModel) {
        return request.post<ApiResult<DepartmentTypeModel>>('api/SDepartmentType/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.post('api/SDepartmentType/Delete', id);
    }
}

export default departmentTypeService;