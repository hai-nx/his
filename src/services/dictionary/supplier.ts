import { ApiResult, SupplierModel } from '@/models'
import request from '@/utils/request'

const supplierService = {
    getAll() {
        return request.get<ApiResult<SupplierModel[]>>('api/Supplier/GetAll');
    },
    getById(id: string) {
        return request.get<ApiResult<SupplierModel>>('api/Supplier/GetById?id=' + id);
    },
    createOrEdit(input: SupplierModel) {
        return request.post<ApiResult<SupplierModel>>('api/Supplier/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.delete<ApiResult<SupplierModel>>('api/Supplier/Delete?id=' + id);
    },
}

export default supplierService