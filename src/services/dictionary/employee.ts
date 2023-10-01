import { ApiResult, EmployeeModel } from '@/models'
import request from '@/utils/request'

const employeeService = {
    getAll() {
        return request.get<ApiResult<EmployeeModel[]>>('api/Employee/GetAll')
    },
    getById(id: string) {
        return request.get<ApiResult<EmployeeModel>>('api/Employee/GetById?id=' + id);
    },
    createOrEdit(input: EmployeeModel) {
        return request.post<ApiResult<EmployeeModel>>('api/Employee/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.delete('api/Employee/Delete?id=' + id);
    }
}

export default employeeService;