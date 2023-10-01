import { ApiResult, SurgicalProcedureTypeModel } from '@/models'
import request from '@/utils/request'

const surgicalProcedureTypeService = {
    getAll() {
        return request.get<ApiResult<SurgicalProcedureTypeModel[]>>('api/SurgicalProcedureType/GetAll');
    },
}

export default surgicalProcedureTypeService;