import { ResultModel, InOutStockModel } from '@/models'
import request from '@/utils/request'

const impMestService = {
    getByStock(stockId: string, fromDate: string, toDate: string) {
        return request.get<ResultModel<InOutStockModel[]>>("api/InOutStock/GetByStocks?stockId=" + stockId + "&fromDate=" + fromDate + "&toDate=" + toDate);
    },

    //#region Nhập từ NCC
    importFromSupplierGetById(id: string) {
        return request.get<ResultModel<InOutStockModel>>('api/InOutStock/ImportFromSupplierGetById?id=' + id);
    },
    importFromSupplierSaveAsDraft(input: InOutStockModel) {
        return request.post<ResultModel<InOutStockModel>>('api/InOutStock/ImportFromSupplierSaveAsDraft', input);
    },
    importFromSupplierStockIn(input: InOutStockModel) {
        return request.post<ResultModel<InOutStockModel>>('api/InOutStock/ImportFromSupplierStockIn', input);
    },
    importFromSupplierCanceled(input: InOutStockModel) {
        return request.post<ResultModel<InOutStockModel>>('api/InOutStock/ImportFromSupplierCanceled', input);
    },
    importFromSupplierDeleted(id: string) {
        return request.delete<ResultModel<boolean>>('api/InOutStock/ImportFromSupplierDeleted?id=' + id);
    },
    //#endregion

    //#region Nhập từ kho khác
    importFromAnotherStockGetById(id: string) {
        return request.get<ResultModel<InOutStockModel>>('api/InOutStock/ImportFromAnotherStockGetById?id=' + id);
    },
    importFromAnotherStockSaveAsDraft(input: InOutStockModel) {
        return request.post<ResultModel<InOutStockModel>>('api/InOutStock/ImportFromAnotherStockSaveAsDraft', input);
    },
    importFromAnotherStockRequest(input: InOutStockModel) {
        return request.post<ResultModel<InOutStockModel>>('api/InOutStock/ImportFromAnotherStockRequest', input);
    },
    importFromAnotherStockCancelRequest(input: InOutStockModel) {
        return request.post<ResultModel<InOutStockModel>>('api/InOutStock/ImportFromAnotherStockCancelRequest', input);
    },
    importFromAnotherStockApproved(input: InOutStockModel) {
        return request.post<ResultModel<InOutStockModel>>('api/InOutStock/ImportFromAnotherStockApproved', input);
    },
    importFromAnotherStockCancelApproved(input: InOutStockModel) {
        return request.post<ResultModel<InOutStockModel>>('api/InOutStock/ImportFromAnotherStockCancelApproved', input);
    },
    importFromAnotherStockStockOut(input: InOutStockModel) {
        return request.post<ResultModel<InOutStockModel>>('api/InOutStock/ImportFromAnotherStockStockOut', input);
    },
    importFromAnotherStockCanCelStockOut(input: InOutStockModel) {
        return request.post<ResultModel<InOutStockModel>>('api/InOutStock/ImportFromAnotherStockCanCelStockOut', input);
    },
    importFromAnotherStockStockIn(input: InOutStockModel) {
        return request.post<ResultModel<InOutStockModel>>('api/InOutStock/ImportFromAnotherStockStockIn', input);
    },
    importFromAnotherStockCancelStockIn(input: InOutStockModel) {
        return request.post<ResultModel<InOutStockModel>>('api/InOutStock/ImportFromAnotherStockCancelStockIn', input);
    },
    importFromAnotherStockDeleted(id:string){
        return request.delete<ResultModel<boolean>>('api/InOutStock/ImportFromAnotherStockDeleted?id=' + id);
    }
    //#endregion
}

export default impMestService