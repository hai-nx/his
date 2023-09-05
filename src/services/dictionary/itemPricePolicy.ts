import { ApiResult, ItemPricePolicyModel } from '@/models'
import request from '@/utils/request'

const ItemPricePolicyService = {
    getAll() {
        return request.get<ApiResult<ItemPricePolicyModel[]>>('api/ItemPricePolicy/GetAll')
    },
}

export default ItemPricePolicyService;