import { ApiResult, EmployeeModel } from '@/models'
import request from '@/utils/request'

const employeeService = {
    getAll() {
        return request.get<ApiResult<EmployeeModel[]>>('api/SEmployee/GetAll')
    },
    getById(id: string) {
        return request.get<ApiResult<EmployeeModel>>('api/SEmployee/GetById?id=' + id);
    },
    createOrEdit(input: EmployeeModel) {
        return request.post<ApiResult<EmployeeModel>>('api/SEmployee/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.post('api/SEmployee/Delete', id);
    }
}

export default employeeService;