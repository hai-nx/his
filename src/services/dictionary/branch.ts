import { ResultModel, BranchModel } from '@/models'
import request from '@/utils/request'

const branchService = {
    getAll() {
        return request.get<ResultModel<BranchModel[]>>('api/Branch/GetAll');
    },
    getById(id: string) {
        return request.get<ResultModel<BranchModel>>('api/Branch/GetById?id=' + id);
    },
    createOrEdit(input: BranchModel) {
        return request.post<ResultModel<BranchModel>>('api/Branch/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.post<ResultModel<BranchModel>>('api/Branch/Delete?id=' + id);
    }
}

export default branchService