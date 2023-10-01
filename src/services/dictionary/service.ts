import { ApiResult, ServiceModel, ServiceImportModel, ServiceResultIndiceModel } from '@/models'
import request from '@/utils/request'

const serviceService = {
    getAll() {
        return request.get<ApiResult<ServiceModel[]>>('api/Service/GetAll');
    },
    getById(id: string) {
        return request.get<ApiResult<ServiceModel>>('api/Service/GetById?id=' + id);
    },
    createOrEdit(input: ServiceModel) {
        return request.post<ApiResult<ServiceModel>>('api/Service/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.delete<ApiResult<ServiceModel>>('api/Service/Delete?id=' + id);
    },
    import(input: ServiceImportModel[]) {
        return request.post<ApiResult<boolean>>('api/Service/Import', input);
    },
    importServiceResultIndexs(sServiceResultIndexs: ServiceResultIndiceModel[]) {
        return request.post<ApiResult<boolean>>('api/Service/ImportServiceResultIndices', sServiceResultIndexs);
    }
}

export default serviceService