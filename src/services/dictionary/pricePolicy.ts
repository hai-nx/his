import { ApiResult, PricePolicyModel } from '@/models'
import request from '@/utils/request'

const pricePolicyService = {
    getAll() {
        return request.get<ApiResult<PricePolicyModel[]>>('api/SPricePolicy/GetAll');
    },
    getById(id: string) {
        return request.get<ApiResult<PricePolicyModel>>('api/SPricePolicy/GetById?id=' + id);
    },
    createOrEdit(input: PricePolicyModel) {
        return request.post<ApiResult<PricePolicyModel>>('api/SPricePolicy/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.post<ApiResult<PricePolicyModel>>('api/SPricePolicy/Delete?id=' + id);
    }
}

export default pricePolicyService;