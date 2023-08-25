import { ApiResult, UserModel } from '@/models'
import request from '@/utils/request'

const userService = {
    getAll() {
        return request.get<ApiResult<UserModel[]>>('api/User/GetAll');
    },
    getById(id: string) {
        return request.get<ApiResult<UserModel>>('api/User/GetById?id=' + id);
    },
    createOrEdit(input: UserModel) {
        return request.post<ApiResult<UserModel>>('api/User/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.delete<ApiResult<UserModel>>('api/User/Delete?id=' + id);
    }
}

export default userService