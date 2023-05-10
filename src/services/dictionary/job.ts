import { ApiResult, JobModel } from '@/models'
import request from '@/utils/request'

const jobService = {
    getAll() {
        return request.get<ApiResult<JobModel[]>>('api/SJob/GetAll')
    },
    getById(id: string) {
        return request.get<ApiResult<JobModel>>('api/SJob/GetById?id=' + id);
    },
    createOrEdit(input: JobModel) {
        return request.post<ApiResult<JobModel>>('api/SJob/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.post('api/SJob/Delete', id);
    }
}

export default jobService;