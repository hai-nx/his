import { ApiResult, ServicePricePolicyModel } from '@/models'
import request from '@/utils/request'

const servicePricePolicyService = {
    getAll() {
        return request.get<ApiResult<ServicePricePolicyModel[]>>('api/SServicePricePolicy/GetAll');
    },
    getById(id: string) {
        return request.get<ApiResult<ServicePricePolicyModel>>('api/SServicePricePolicy/GetById?id=' + id);
    },
    createOrEdit(input: ServicePricePolicyModel) {
        return request.post<ApiResult<ServicePricePolicyModel>>('api/SServicePricePolicy/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.post<ApiResult<ServicePricePolicyModel>>('api/SServicePricePolicy/Delete?id=' + id);
    }
}

export default servicePricePolicyService;