import ApiResult from '@/models/ApiResult'
import { RoomModel } from '@/models'
import request from '@/utils/request'

const roomService = {
    getAll() {
        return request.get<ApiResult<RoomModel[]>>('api/Room/GetAll')
    },
    getById(id: string) {
        return request.get<ApiResult<RoomModel>>('api/Room/GetById?id=' + id);
    },
    createOrEdit(input: RoomModel) {
        return request.post<ApiResult<RoomModel>>('api/Room/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.delete('api/Room/Delete?id=' + id);
    },
    getByStocks() {
        return request.get<ApiResult<RoomModel[]>>('api/Room/GetByStocks')
    }
}

export default roomService;