import { ApiResult, ServiceModel, ExecutionRoomModel } from '@/models'
import request from '@/utils/request'

const serviceService = {
    getAll() {
        return request.get<ApiResult<ServiceModel[]>>('api/SService/GetAll');
    },
    getById(id: string) {
        return request.get<ApiResult<ServiceModel>>('api/SService/GetById?id=' + id);
    },
    createOrEdit(input: ServiceModel) {
        return request.post<ApiResult<ServiceModel>>('api/SService/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.delete<ApiResult<ServiceModel>>('api/SService/Delete?id=' + id);
    },
    getExecutionRoomByGroupHeIn(serviceGroupHeInId: string | undefined) {
        return request.get<ApiResult<ExecutionRoomModel[]>>('api/SService/GetExecutionRoomByGroupHeIn?serviceGroupHeInId=' + serviceGroupHeInId);
    }
}

export default serviceService