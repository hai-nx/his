import { ApiResult, SupplierModel } from '@/models'
import request from '@/utils/request'

const supplierService = {
    getAll() {
        return request.get<ApiResult<SupplierModel[]>>('api/SSupplier/GetAll');
    },
    getById(id: string) {
        return request.get<ApiResult<SupplierModel>>('api/SSupplier/GetById?id=' + id);
    },
    createOrEdit(input: SupplierModel) {
        return request.post<ApiResult<SupplierModel>>('api/SSupplier/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.delete<ApiResult<SupplierModel>>('api/SSupplier/Delete?id=' + id);
    },
}

export default supplierService