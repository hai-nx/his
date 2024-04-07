import { PagedResultModel, ResultModel, ReceptionModel, GetAllReceptionInputModel } from '@/models'
import request from '@/utils/request'

const receptionService = {
    getAll(input: GetAllReceptionInputModel) {
        return request.get<PagedResultModel<ReceptionModel>>('api/Reception/GetAll', { params: input });
    },
    getById(id: string) {
        return request.get<ResultModel<ReceptionModel>>('api/Reception/GetById?id=' + id);
    },
    createOrEdit(input: ReceptionModel) {
        return request.post<ResultModel<ReceptionModel>>('api/Reception/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.delete<ResultModel<ReceptionModel>>('api/Reception/Delete?id=' + id);
    }
}

export default receptionService;