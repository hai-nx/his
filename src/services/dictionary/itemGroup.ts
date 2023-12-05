import { ResultModel, ItemGroupModel } from '@/models'
import request from '@/utils/request'

const itemGroupService = {
    getAll(params: any = null) {
        return request.get<ResultModel<ItemGroupModel[]>>('api/ItemGroup/GetAll', params)
    },
    getById(id: string) {
        return request.get<ResultModel<ItemGroupModel>>('api/ItemGroup/GetById?id=' + id);
    },
    createOrEdit(input: ItemGroupModel) {
        return request.post<ResultModel<ItemGroupModel>>('api/ItemGroup/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.delete('api/ItemGroup/Delete?id=' + id);
    }
}

export default itemGroupService;