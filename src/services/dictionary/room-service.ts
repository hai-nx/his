import ApiResult from '@/models/ApiResult'
import RoomModel from '@/models/dictionary/RoomModel'
import request from '@/utils/request'

const roomService = {
    getAll() {
        return request.get<ApiResult<RoomModel[]>>('api/SRoom/GetAll')
    },
    getById(id: string) {
        return request.get<ApiResult<RoomModel>>('api/SRoom/GetById?id=' + id);
    },
    createOrEdit(input: RoomModel) {
        return request.post<ApiResult<RoomModel>>('api/SRoom/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.post('api/SRoom/Delete', id);
    }
}

export default roomService;