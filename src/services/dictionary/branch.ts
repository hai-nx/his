import { ApiResult, BranchModel } from '@/models'
import request from '@/utils/request'

const branchService = {
    getAll() {
        return request.get<ApiResult<BranchModel[]>>('api/SBranch/GetAll');
    },
    getById(id: string) {
        return request.get<ApiResult<BranchModel>>('api/SBranch/GetById?id=' + id);
    },
    createOrEdit(input: BranchModel) {
        return request.post<ApiResult<BranchModel>>('api/SBranch/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.post<ApiResult<BranchModel>>('api/SBranch/Delete?id=' + id);
    }
}

export default branchService