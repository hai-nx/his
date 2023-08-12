import ApiResult from '@/models/ApiResult'
import { RoomModel } from '@/models'
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
    },
    getByStocks() {
        return request.get<ApiResult<RoomModel[]>>('api/SRoom/GetByStocks')
    }
}

export default roomService;