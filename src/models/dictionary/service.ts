import DictionaryBase from './base'
import ServicePricePolicyModel from './servicePricePolicy'
import SurgicalProcedureTypesModel from './surgicalProcedureType'

export default interface ServiceModel extends DictionaryBase {
    serviceTypeId: string | undefined,
    serviceUnitId: string | undefined,
    serviceGroupId: string | undefined,
    surgicalProcedureTypeId: string | undefined

    serviceUnitName: string,
    serviceGroupName: string,

    servicePricePolicies: ServicePricePolicyModel[],
}