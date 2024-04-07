import { ResultModel, DictionaryBase, RoomRequestModel } from '@/models'
import request from '@/utils/request'

const liveAreaService = {
    getAll() {
        return request.get<ResultModel<DictionaryBase[]>>('api/LiveArea/GetAll')
    },
}

export default liveAreaService;