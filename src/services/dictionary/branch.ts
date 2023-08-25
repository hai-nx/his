import { ApiResult, BranchModel } from '@/models'
import request from '@/utils/request'

const branchService = {
    getAll() {
        return request.get<ApiResult<BranchModel[]>>('api/Branch/GetAll');
    },
    getById(id: string) {
        return request.get<ApiResult<BranchModel>>('api/Branch/GetById?id=' + id);
    },
    createOrEdit(input: BranchModel) {
        return request.post<ApiResult<BranchModel>>('api/Branch/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.post<ApiResult<BranchModel>>('api/Branch/Delete?id=' + id);
    }
}

export default branchService