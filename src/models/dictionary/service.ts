import DictionaryBase from './base'
import ServicePricePolicyModel from './servicePricePolicy'
import ExecutionRoomModel from './executionRoom'

export default interface ServiceModel extends DictionaryBase {
    heInCode: string,
    heInName: string
    serviceUnitId: string | undefined,
    serviceGroupHeInId: string | undefined,
    serviceGroupId: string | undefined,
    surgicalProcedureTypeId: string | undefined

    serviceUnitName: string,
    serviceGroupName: string,

    servicePricePolicies: ServicePricePolicyModel[],
    executionRooms: ExecutionRoomModel[]
}