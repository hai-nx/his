import { ResultModel, SupplierModel } from '@/models'
import request from '@/utils/request'

const supplierService = {
    getAll() {
        return request.get<ResultModel<SupplierModel[]>>('api/Supplier/GetAll');
    },
    getById(id: string) {
        return request.get<ResultModel<SupplierModel>>('api/Supplier/GetById?id=' + id);
    },
    createOrEdit(input: SupplierModel) {
        return request.post<ResultModel<SupplierModel>>('api/Supplier/CreateOrEdit', input);
    },
    delete(id: string) {
        return request.delete<ResultModel<SupplierModel>>('api/Supplier/Delete?id=' + id);
    },
}

export default supplierService