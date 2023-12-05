import { ResultModel, ItemPricePolicyModel } from '@/models'
import request from '@/utils/request'

const ItemPricePolicyService = {
    getAll() {
        return request.get<ResultModel<ItemPricePolicyModel[]>>('api/ItemPricePolicy/GetAll')
    },
}

export default ItemPricePolicyService;