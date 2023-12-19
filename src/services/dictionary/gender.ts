import { ResultModel, GenderModel } from '@/models'
import request from '@/utils/request'

const ethnicService = {
    getAll() {
        return request.get<ResultModel<GenderModel[]>>('api/Gender/GetAll');
    },
    getById(id: string) {
        return request.get<ResultModel<GenderModel>>('api/Gender/GetById?id=' + id);
    },
    createOrEdit(input: GenderModel) {
        return request.post<ResultModel<GenderModel>>('api/Gender/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.delete<ResultModel<GenderModel>>('api/Gender/Delete?id=' + id);
    }
}

export default ethnicService