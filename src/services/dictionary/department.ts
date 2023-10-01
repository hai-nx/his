import { ApiResult, DepartmentModel } from '@/models'
import request from '@/utils/request'

const departmentService = {
    getAll() {
        return request.get<ApiResult<DepartmentModel[]>>('api/Department/GetAll')
    },
    getById(id: string) {
        return request.get<ApiResult<DepartmentModel>>('api/Department/GetById?id=' + id);
    },
    createOrEdit(input: DepartmentModel) {
        return request.post<ApiResult<DepartmentModel>>('api/Department/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.delete('api/Department/Delete?id=' + id);
    }
}

export default departmentService;