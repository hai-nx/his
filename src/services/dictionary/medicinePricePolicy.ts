import { ApiResult, MedicinePricePolicyModel } from '@/models'
import request from '@/utils/request'

const medicinePricePolicyService = {
    getAll() {
        return request.get<ApiResult<MedicinePricePolicyModel[]>>('api/SMedicinePricePolicy/GetAll')
    },
}

export default medicinePricePolicyService;