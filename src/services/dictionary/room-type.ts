import { ApiResult, RoomTypeModel } from '@/models'
import request from '@/utils/request'

const departmentTypeService = {
    getAll() {
        return request.get<ApiResult<RoomTypeModel[]>>('api/RoomType/GetAll')
    },
    getById(id: string) {
        return request.get<ApiResult<RoomTypeModel>>('api/RoomType/GetById?id=' + id);
    },
    createOrEdit(input: RoomTypeModel) {
        return request.post<ApiResult<RoomTypeModel>>('api/RoomType/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.delete('api/RoomType/Delete?id=' + id);
    }
}

export default departmentTypeService;