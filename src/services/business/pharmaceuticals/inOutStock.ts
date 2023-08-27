import { ApiResult, InOutStockModel } from '@/models'
import request from '@/utils/request'

const impMestService = {
    getByStock(stockId: string, fromDate: string, toDate: string) {
        return request.get<ApiResult<InOutStockModel[]>>("api/InOutStock/GetByStocks?stockId=" + stockId + "&fromDate=" + fromDate + "&toDate=" + toDate);
    },

    //#region Nhập từ NCC
    importFromSupplierGetById(id: string) {
        return request.get<ApiResult<InOutStockModel>>('api/InOutStock/ImportFromSupplierGetById?id=' + id);
    },
    importFromSupplierSaveAsDraft(input: InOutStockModel) {
        return request.post<ApiResult<InOutStockModel>>('api/InOutStock/ImportFromSupplierSaveAsDraft', input);
    },
    importFromSupplierStockIn(input: InOutStockModel) {
        return request.post<ApiResult<InOutStockModel>>('api/InOutStock/ImportFromSupplierStockIn', input);
    },
    importFromSupplierCanceled(input: InOutStockModel) {
        return request.post<ApiResult<InOutStockModel>>('api/InOutStock/ImportFromSupplierCanceled', input);
    },
    importFromSupplierDeleted(id: string) {
        return request.delete<ApiResult<boolean>>('api/InOutStock/ImportFromSupplierDeleted?id=' + id);
    },
    //#endregion

    //#region Nhập từ kho khác
    importFromAnotherStockGetById(id: string) {
        return request.get<ApiResult<InOutStockModel>>('api/InOutStock/ImportFromAnotherStockGetById?id=' + id);
    },
    importFromAnotherStockSaveAsDraft(input: InOutStockModel) {
        return request.post<ApiResult<InOutStockModel>>('api/InOutStock/ImportFromAnotherStockSaveAsDraft', input);
    },
    importFromAnotherStockRequest(input: InOutStockModel) {
        return request.post<ApiResult<InOutStockModel>>('api/InOutStock/ImportFromAnotherStockRequest', input);
    },
    importFromAnotherStockStockIn(input: InOutStockModel) {
        return request.post<ApiResult<InOutStockModel>>('api/InOutStock/ImportFromAnotherStockStockIn', input);
    },
    //#endregion
}

export default impMestService