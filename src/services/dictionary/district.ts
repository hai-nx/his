import { ResultModel, DistrictModel } from '@/models'
import request from '@/utils/request'

const districtService = {
    getAll() {
        return request.get<ResultModel<DistrictModel[]>>('api/District/GetAll');
    },
    getById(id: string) {
        return request.get<ResultModel<DistrictModel>>('api/District/GetById?id=' + id);
    },
    createOrEdit(input: DistrictModel) {
        return request.post<ResultModel<DistrictModel>>('api/District/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.delete<ResultModel<DistrictModel>>('api/District/Delete?id=' + id);
    }
}

export default districtService