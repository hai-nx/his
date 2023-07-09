import { ApiResult, ServiceModel, ServiceImportModel, ServiceResultIndiceModel } from '@/models'
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
    import(input: ServiceImportModel[]) {
        return request.post<ApiResult<boolean>>('api/SService/Import', input);
    },
    importServiceResultIndexs(sServiceResultIndexs: ServiceResultIndiceModel[]) {
        return request.post<ApiResult<boolean>>('api/SService/ImportServiceResultIndices', sServiceResultIndexs);
    }
}

export default serviceService