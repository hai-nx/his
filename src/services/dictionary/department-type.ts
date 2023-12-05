import { ResultModel, DepartmentTypeModel } from '@/models'
import request from '@/utils/request'

const departmentTypeService = {
    getAll() {
        return request.get<ResultModel<DepartmentTypeModel[]>>('api/DepartmentType/GetAll')
    },
    getById(id: string) {
        return request.get<ResultModel<DepartmentTypeModel>>('api/DepartmentType/GetById?id=' + id);
    },
    createOrEdit(input: DepartmentTypeModel) {
        return request.post<ResultModel<DepartmentTypeModel>>('api/DepartmentType/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.delete('api/DepartmentType/Delete?id=' + id);
    }
}

export default departmentTypeService;