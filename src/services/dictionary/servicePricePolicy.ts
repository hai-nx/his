import { ApiResult, ServicePricePolicyModel } from '@/models'
import request from '@/utils/request'

const servicePricePolicyService = {
    getAll() {
        return request.get<ApiResult<ServicePricePolicyModel[]>>('api/ServicePricePolicy/GetAll');
    },
    getById(id: string) {
        return request.get<ApiResult<ServicePricePolicyModel>>('api/ServicePricePolicy/GetById?id=' + id);
    },
    createOrEdit(input: ServicePricePolicyModel) {
        return request.post<ApiResult<ServicePricePolicyModel>>('api/ServicePricePolicy/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.delete<ApiResult<ServicePricePolicyModel>>('api/ServicePricePolicy/Delete?id=' + id);
    }
}

export default servicePricePolicyService;