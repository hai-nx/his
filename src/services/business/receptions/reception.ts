import { PagedResultModel, ResultModel, PatientRecordModel, PatientRecordRequestModel } from '@/models'
import request from '@/utils/request'

const receptionService = {
    getAll(input: PatientRecordRequestModel) {
        return request.get<PagedResultModel<PatientRecordModel>>('api/Reception/GetAll', { params: input });
    },
    getById(id: string) {
        return request.get<ResultModel<PatientRecordModel>>('api/Reception/GetById?id=' + id);
    },
    createOrEdit(input: PatientRecordModel) {
        return request.post<ResultModel<PatientRecordModel>>('api/Reception/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.post<ResultModel<PatientRecordModel>>('api/Reception/Delete?id=' + id);
    }
}

export default receptionService;