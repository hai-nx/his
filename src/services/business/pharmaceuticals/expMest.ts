import { ApiResult, DExpMestModel } from '@/models'
import request from '@/utils/request'

const expMestService = {
    getByStock(stockId: string, fromDate: string, toDate: string) {
        return request.get<ApiResult<DExpMestModel[]>>("api/DExpMest/GetByStocks?stockId=" + stockId + "&fromDate=" + fromDate + "&toDate=" + toDate);
    },
}

export default expMestService