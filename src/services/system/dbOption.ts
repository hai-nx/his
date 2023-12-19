import { ResultModel, DbOptionModel } from '@/models'
import request from '@/utils/request'

const dbOptionService = {
    getAll() {
        return request.get<ResultModel<DbOptionModel[]>>('api/DbOption/GetAll');
    },
    getById(id: string) {
        return request.get<ResultModel<DbOptionModel>>('api/DbOption/GetById?id=' + id);
    },
    createOrEdit(input: DbOptionModel) {
        return request.post<ResultModel<DbOptionModel>>('api/DbOption/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.delete<ResultModel<DbOptionModel>>('api/DbOption/Delete?id=' + id);
    }
}

export default dbOptionService