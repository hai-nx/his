import DictionaryBase from "./../base";
import ServicePricePolicyModel from './servicePricePolicy'
import ExecutionRoomModel from './executionRoom'
import ServiceResultIndiceModel from './serviceResultIndice'

export default interface ServiceModel extends DictionaryBase {
    heInCode: string,
    heInName: string
    unitId: string | undefined,
    serviceGroupHeInId: string | undefined,
    serviceGroupId: string | undefined,
    surgicalProcedureTypeId: string | undefined

    unitName: string,
    serviceGroupName: string,

    sServicePricePolicies: ServicePricePolicyModel[],
    sExecutionRooms: ExecutionRoomModel[],
    sServiceResultIndices: ServiceResultIndiceModel[]
}