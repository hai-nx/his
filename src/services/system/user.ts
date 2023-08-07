import { ApiResult, UserModel } from '@/models'
import request from '@/utils/request'

const userService = {
    getAll() {
        return request.get<ApiResult<UserModel[]>>('api/SUser/GetAll');
    },
    getById(id: string) {
        return request.get<ApiResult<UserModel>>('api/SUser/GetById?id=' + id);
    },
    createOrEdit(input: UserModel) {
        return request.post<ApiResult<UserModel>>('api/SUser/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.delete<ApiResult<UserModel>>('api/SUser/Delete?id=' + id);
    }
}

export default userService