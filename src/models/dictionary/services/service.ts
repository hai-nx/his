import DictionaryBase from "./../base";
import ServicePricePolicyModel from './servicePricePolicy'
import ExecutionRoomModel from './executionRoom'
import ServiceResultIndiceModel from './serviceResultIndice'

export default interface ServiceModel extends DictionaryBase {
    heInCode?: string | null,
    heInName?: string | null,
    unitId?: string | null,
    serviceGroupHeInId?: string | null,
    serviceGroupId?: string | null,
    surgicalProcedureTypeId?: string | null,

    unitName?: string | null,
    serviceGroupName?: string | null,

    sServicePricePolicies: ServicePricePolicyModel[],
    sExecutionRooms: ExecutionRoomModel[],
    sServiceResultIndices: ServiceResultIndiceModel[]
}