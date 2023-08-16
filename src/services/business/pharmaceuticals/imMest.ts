import { ApiResult, DImpMestModel } from '@/models'
import request from '@/utils/request'

const impMestService = {
    getByStock(stockId: string, fromDate: string, toDate: string) {
        return request.get<ApiResult<DImpMestModel[]>>("api/DImpMest/GetByStock?stockId=" + stockId + "&fromDate=" + fromDate + "&toDate=" + toDate);
    },
    getById(id: string) {
        return request.get<ApiResult<DImpMestModel>>('api/DImpMest/GetById?id=' + id);
    },
    importFromSupplierSaveAsDraft(input: DImpMestModel) {
        return request.post<ApiResult<DImpMestModel>>('api/DImpMest/ImportFromSupplierSaveAsDraft', input);
    },
    importFromSupplierStockIn(input: DImpMestModel) {
        return request.post<ApiResult<DImpMestModel>>('api/DImpMest/ImportFromSupplierStockIn', input);
    },
    delete(id: string) {
        return request.delete<ApiResult<DImpMestModel>>('api/DImpMest/Delete?id=' + id);
    },
    importFromSupplierCanceled(id: string) {
        return request.get<ApiResult<boolean>>('api/DImpMest/ImportFromSupplierCanceled?id=' + id);
    }
}

export default impMestService