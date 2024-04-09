import { ResultModel, WardModel } from '@/models'
import request from '@/utils/request'

const wardService = {
    getAll() {
        return request.get<ResultModel<WardModel[]>>('api/Ward/GetAll');
    },
    getById(id: string) {
        return request.get<ResultModel<WardModel>>('api/Ward/GetById?id=' + id);
    },
    createOrEdit(input: WardModel) {
        return request.post<ResultModel<WardModel>>('api/Ward/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.delete<ResultModel<WardModel>>('api/Ward/Delete?id=' + id)
    }
}

export default wardService