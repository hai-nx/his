import { ResultModel, SurgicalProcedureTypeModel } from '@/models'
import request from '@/utils/request'

const surgicalProcedureTypeService = {
    getAll() {
        return request.get<ResultModel<SurgicalProcedureTypeModel[]>>('api/SurgicalProcedureType/GetAll');
    },
}

export default surgicalProcedureTypeService;