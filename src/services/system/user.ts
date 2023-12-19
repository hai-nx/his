import { ResultModel, UserModel } from '@/models'
import request from '@/utils/request'

const userService = {
    getAll() {
        return request.get<ResultModel<UserModel[]>>('api/User/GetAll');
    },
    getById(id: string) {
        return request.get<ResultModel<UserModel>>('api/User/GetById?id=' + id);
    },
    createOrEdit(input: UserModel) {
        return request.post<ResultModel<UserModel>>('api/User/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.delete<ResultModel<UserModel>>('api/User/Delete?id=' + id);
    }
}

export default userService