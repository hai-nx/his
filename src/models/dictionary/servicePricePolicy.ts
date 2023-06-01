import { NumberDecimal } from 'ant-design-vue/lib/input-number/src/utils/MiniDecimal';
import DictionaryBase from './base'

export default interface ServicePricePolicyModel extends DictionaryBase {
    serviceId: string | undefined,
    patientTypeId: string | undefined,
    oldUnitPrice: NumberDecimal,
    newUnitPrice: NumberDecimal,
    ceilingPrice: NumberDecimal,
    executionTime: Date,

    patientTypeCode: string
    patientTypeName: string
}