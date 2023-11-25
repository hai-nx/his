import { ApiResult, DbOptionModel } from '@/models'
import request from '@/utils/request'

const dbOptionService = {
    getAll() {
        return request.get<ApiResult<DbOptionModel[]>>('api/DbOption/GetAll');
    },
    getById(id: string) {
        return request.get<ApiResult<DbOptionModel>>('api/DbOption/GetById?id=' + id);
    },
    createOrEdit(input: DbOptionModel) {
        return request.post<ApiResult<DbOptionModel>>('api/DbOption/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.delete<ApiResult<DbOptionModel>>('api/DbOption/Delete?id=' + id);
    }
}

export default dbOptionService