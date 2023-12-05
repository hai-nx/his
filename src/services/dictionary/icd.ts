import { ResultModel, ICDModel } from '@/models'
import request from '@/utils/request'

const icdService = {
    getAll() {
        return request.get<ResultModel<ICDModel[]>>('api/Icd/GetAll')
    },
    getById(id: string) {
        return request.get<ResultModel<ICDModel>>('api/Icd/GetById?id=' + id);
    },
    createOrEdit(input: ICDModel) {
        return request.post<ResultModel<ICDModel>>('api/Icd/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.delete('api/Icd/Delete?id=' + id);
    }
}

export default icdService;