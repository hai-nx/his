import { ApiResult, MedicinePricePolicyModel } from '@/models'
import request from '@/utils/request'

const medicinePricePolicyService = {
    getAll() {
        return request.get<ApiResult<MedicinePricePolicyModel[]>>('api/MedicinePricePolicy/GetAll')
    },
}

export default medicinePricePolicyService;