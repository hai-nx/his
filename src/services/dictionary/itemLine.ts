import { ApiResult, ItemLineModel } from '@/models'
import request from '@/utils/request'

const ItemLineService = {
    getAll() {
        return request.get<ApiResult<ItemLineModel[]>>('api/ItemLine/GetAll')
    },
    getById(id: string) {
        return request.get<ApiResult<ItemLineModel>>('api/ItemLine/GetById?id=' + id);
    },
    createOrEdit(input: ItemLineModel) {
        return request.post<ApiResult<ItemLineModel>>('api/ItemLine/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.delete('api/ItemLine/Delete?id=' + id);
    }
}

export default ItemLineService;