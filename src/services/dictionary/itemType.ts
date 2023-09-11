import { ApiResult, ItemTypeImportModel, ItemTypeModel } from '@/models'
import request from '@/utils/request'

const itemTypeService = {
    getAll(params: any = null) {
        return request.get<ApiResult<ItemTypeModel[]>>('api/ItemType/GetAll', params)
    },
    getById(id: string) {
        return request.get<ApiResult<ItemTypeModel>>('api/ItemType/GetById?id=' + id);
    },
    createOrEdit(input: ItemTypeModel) {
        return request.post<ApiResult<ItemTypeModel>>('api/ItemType/CreateOrEdit', input);
    },
    import(input: ItemTypeImportModel[]) {
        return request.post<ApiResult<boolean>>('api/ItemType/Import', input);
    },
    delete(id: string) {
        return request.delete('api/ItemType/Delete?id=' + id);
    }
}

export default itemTypeService;