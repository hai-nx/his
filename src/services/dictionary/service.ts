import { ResultModel, ServiceModel, ServiceImportModel, ServiceResultIndiceModel } from '@/models'
import request from '@/utils/request'

const serviceService = {
    getAll() {
        return request.get<ResultModel<ServiceModel[]>>('api/Service/GetAll');
    },
    getById(id: string) {
        return request.get<ResultModel<ServiceModel>>('api/Service/GetById?id=' + id);
    },
    createOrEdit(input: ServiceModel) {
        return request.post<ResultModel<ServiceModel>>('api/Service/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.delete<ResultModel<ServiceModel>>('api/Service/Delete?id=' + id);
    },
    import(input: ServiceImportModel[]) {
        return request.post<ResultModel<boolean>>('api/Service/Import', input);
    },
    importServiceResultIndexs(sServiceResultIndexs: ServiceResultIndiceModel[]) {
        return request.post<ResultModel<boolean>>('api/Service/ImportServiceResultIndices', sServiceResultIndexs);
    }
}

export default serviceService