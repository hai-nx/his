import { NumberDecimal } from 'ant-design-vue/lib/input-number/src/utils/MiniDecimal'
import DictionaryBase from './base'

export default interface ServicePricePolicyModel  {
    id: string | undefined,
    serviceId: string | undefined,
    patientTypeId: string | undefined,
    oldUnitPrice: NumberDecimal,
    newUnitPrice: NumberDecimal,
    ceilingPrice: NumberDecimal,
    executionTime: Date | null,

    patientTypeCode: string
    patientTypeName: string
}