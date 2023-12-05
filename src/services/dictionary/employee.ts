import { ResultModel, EmployeeModel } from '@/models'
import request from '@/utils/request'

const employeeService = {
    getAll() {
        return request.get<ResultModel<EmployeeModel[]>>('api/Employee/GetAll')
    },
    getById(id: string) {
        return request.get<ResultModel<EmployeeModel>>('api/Employee/GetById?id=' + id);
    },
    createOrEdit(input: EmployeeModel) {
        return request.post<ResultModel<EmployeeModel>>('api/Employee/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.delete('api/Employee/Delete?id=' + id);
    }
}

export default employeeService;