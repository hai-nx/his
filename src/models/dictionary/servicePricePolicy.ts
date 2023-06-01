import DictionaryBase from './base'

export default interface ServicePricePolicyModel extends DictionaryBase {
    serviceId: string | undefined,
    patientTypeId: string | undefined,
    oldUnitPrice: Number,
    newUnitPrice: Number,
    ceilingPrice: Number,
    executionTime: Date,

    patientTypeCode: string
    patientTypeName: string
}