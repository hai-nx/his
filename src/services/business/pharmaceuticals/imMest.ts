import { ApiResult, DImpMestModel, DMedicineStockModel } from '@/models'
import request from '@/utils/request'

const impMestService = {
    getByStock(stockId: string, fromDate: string, toDate: string) {
        return request.get<ApiResult<DImpMestModel[]>>("api/DImpMest/GetByStocks?stockId=" + stockId + "&fromDate=" + fromDate + "&toDate=" + toDate);
    },

    //#region Nhập từ NCC
    importFromSupplierGetById(id: string) {
        return request.get<ApiResult<DImpMestModel>>('api/DImpMest/ImportFromSupplierGetById?id=' + id);
    },
    importFromSupplierSaveAsDraft(input: DImpMestModel) {
        return request.post<ApiResult<DImpMestModel>>('api/DImpMest/ImportFromSupplierSaveAsDraft', input);
    },
    importFromSupplierStockIn(input: DImpMestModel) {
        return request.post<ApiResult<DImpMestModel>>('api/DImpMest/ImportFromSupplierStockIn', input);
    },
    importFromSupplierCanceled(id: string) {
        return request.get<ApiResult<boolean>>('api/DImpMest/ImportFromSupplierCanceled?id=' + id);
    },
    //#endregion

    //#region Nhập từ kho khác
    importFromAnotherStockGetById(id: string) {
        return request.get<ApiResult<DImpMestModel>>('api/DImpMest/ImportFromAnotherStockGetById?id=' + id);
    },
    importFromAnotherStockSaveAsDraft(input: DImpMestModel) {
        return request.post<ApiResult<DImpMestModel>>('api/DImpMest/ImportFromAnotherStockSaveAsDraft', input);
    },
    importFromAnotherStockRequest(input: DImpMestModel) {
        return request.post<ApiResult<DImpMestModel>>('api/DImpMest/ImportFromAnotherStockRequest', input);
    },
    importFromAnotherStockStockIn(input: DImpMestModel) {
        return request.post<ApiResult<DImpMestModel>>('api/DImpMest/ImportFromAnotherStockStockIn', input);
    },
    //#endregion
}

export default impMestService