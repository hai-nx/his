import { ResultModel, RoomModel, RoomRequestModel } from '@/models'
import request from '@/utils/request'

const roomService = {
    // getAll() {
    //     return request.get<ResultModel<RoomModel[]>>('api/Room/GetAll')
    // },
    getById(id: string) {
        return request.get<ResultModel<RoomModel>>('api/Room/GetById?id=' + id);
    },
    createOrEdit(input: RoomModel) {
        return request.post<ResultModel<RoomModel>>('api/Room/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.delete('api/Room/Delete?id=' + id);
    },
    getByStocks() {
        return request.get<ResultModel<RoomModel[]>>('api/Room/GetByStocks')
    },
    getAll(input?: RoomRequestModel) {
        console.log(input);
        return request.get<ResultModel<RoomModel[]>>('api/Room/GetAll', { params: input })
    },
}

export default roomService;