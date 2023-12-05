import { ResultModel, ServicePricePolicyModel } from '@/models'
import request from '@/utils/request'

const servicePricePolicyService = {
    getAll() {
        return request.get<ResultModel<ServicePricePolicyModel[]>>('api/ServicePricePolicy/GetAll');
    },
    getById(id: string) {
        return request.get<ResultModel<ServicePricePolicyModel>>('api/ServicePricePolicy/GetById?id=' + id);
    },
    createOrEdit(input: ServicePricePolicyModel) {
        return request.post<ResultModel<ServicePricePolicyModel>>('api/ServicePricePolicy/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.delete<ResultModel<ServicePricePolicyModel>>('api/ServicePricePolicy/Delete?id=' + id);
    }
}

export default servicePricePolicyService;