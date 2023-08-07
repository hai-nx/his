import { ApiResult, DImpMestModel, DImpMestMedicineModel } from '@/models'
import request from '@/utils/request'

const impMestService = {
    getAll() {
        return request.get<ApiResult<DImpMestModel[]>>('api/DImpMest/GetAll');
    },
    getById(id: string) {
        return request.get<ApiResult<DImpMestModel>>('api/DImpMest/GetById?id=' + id);
    },
    createOrEdit(input: DImpMestModel) {
        return request.post<ApiResult<DImpMestModel>>('api/DImpMest/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.delete<ApiResult<DImpMestModel>>('api/DImpMest/Delete?id=' + id);
    }
}

export default impMestService