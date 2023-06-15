import DictionaryBase from './base'
import ServicePricePolicyModel from './servicePricePolicy'
import { ref } from 'vue'

export default interface ServiceModel extends DictionaryBase {
    heInCode: string,
    heInName: string
    serviceTypeId: string | undefined,
    serviceUnitId: string | undefined,
    serviceGroupHeInId: string | undefined,
    serviceGroupId: string | undefined,
    surgicalProcedureTypeId: string | undefined

    serviceUnitName: string,
    serviceGroupName: string,

    servicePricePolicies: ServicePricePolicyModel[],
}