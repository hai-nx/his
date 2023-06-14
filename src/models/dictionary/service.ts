import DictionaryBase from './base'
import ServicePricePolicyModel from './servicePricePolicy'

export default interface ServiceModel extends DictionaryBase {
    serviceTypeId: string | undefined,
    serviceUnitId: string | undefined,
    serviceGroupHeInId: string | undefined,
    serviceGroupId: string | undefined,
    surgicalProcedureTypeId: string | undefined

    serviceUnitName: string,
    serviceGroupName: string,

    servicePricePolicies: ServicePricePolicyModel[],
}