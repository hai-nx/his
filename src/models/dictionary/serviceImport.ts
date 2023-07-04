import DictionaryBase from './base'

export default interface ServiceImportModel extends DictionaryBase {
    heInCode: string,
    heInName: string
    serviceUnitId: string | undefined,
    serviceGroupHeInId: string | undefined,
    serviceGroupId: string | undefined,
    surgicalProcedureTypeId: string | undefined

    heInPrice: Number,
    servicePrice: Number,
    peoplePrice: Number,
    paymentRate: Number,
    ceilingPrice: Number,

}