export default interface ServiceImportModel {
    code: string,
    name: string
    heInCode: string,
    heInName: string
    softOrder: Number,
    inactive: boolean,
    serviceUnitCode: string | undefined,
    serviceGroupHeInCode: string | undefined,
    serviceGroupCode: string | undefined,
    surgicalProcedureTypeCode: string | undefined

    heInPrice: Number,
    servicePrice: Number,
    peoplePrice: Number,
    paymentRate: Number,
    ceilingPrice: Number,
}