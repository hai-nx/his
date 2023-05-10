import { ApiResult, DepartmentModel } from '@/models'
import request from '@/utils/request'

const departmentService = {
    getAll() {
        return request.get<ApiResult<DepartmentModel[]>>('api/SDepartment/GetAll')
    },
    getById(id: string) {
        return request.get<ApiResult<DepartmentModel>>('api/SDepartment/GetById?id=' + id);
    },
    createOrEdit(input: DepartmentModel) {
        return request.post<ApiResult<DepartmentModel>>('api/SDepartment/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.post('api/SDepartment/Delete', id);
    }
}

export default departmentService;