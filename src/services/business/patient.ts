import { ApiResult, TreatmentModel, TreatmentFilterModel } from '@/models'
import request from '@/utils/request'

const patientService = {
    getAll(input: TreatmentFilterModel) {
        return request.get<ApiResult<TreatmentModel[]>>('api/STreatment/GetAll', { params: { input: input } });
    },
    getById(input: string) {
        return request.get<ApiResult<TreatmentModel>>('api/STreatment/GetById' + input);
    },
    registerOrEdit(input: TreatmentModel) {
        return request.post<ApiResult<TreatmentModel>>('api/STreatment/RegisterOrEdit', input);
    }
}

export default patientService