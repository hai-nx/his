import { ApiResult, DImpMestModel } from '@/models'
import request from '@/utils/request'

const impMestService = {
    getAll() {
        return request.get<ApiResult<DImpMestModel[]>>('api/DImpMest/GetAll');
    },
    getByStock(stockId: string, fromDate: string, toDate: string) {
        return request.get<ApiResult<DImpMestModel[]>>("api/DImpMest/GetByStock?stockId=" + stockId + "&fromDate=" + fromDate + "&toDate=" + toDate);
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