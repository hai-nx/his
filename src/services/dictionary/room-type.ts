import { ApiResult, RoomTypeModel } from '@/models'
import request from '@/utils/request'

const departmentTypeService = {
    getAll() {
        return request.get<ApiResult<RoomTypeModel[]>>('api/SRoomType/GetAll')
    },
    getById(id: string) {
        return request.get<ApiResult<RoomTypeModel>>('api/SRoomType/GetById?id=' + id);
    },
    createOrEdit(input: RoomTypeModel) {
        return request.post<ApiResult<RoomTypeModel>>('api/SRoomType/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.post('api/SRoomType/Delete', id);
    }
}

export default departmentTypeService;