import { ApiResult, SurgicalProcedureTypeModel } from '@/models'
import request from '@/utils/request'

const surgicalProcedureTypeService = {
    getAll() {
        return request.get<ApiResult<SurgicalProcedureTypeModel[]>>('api/SSurgicalProcedureType/GetAll');
    },
}

export default surgicalProcedureTypeService;