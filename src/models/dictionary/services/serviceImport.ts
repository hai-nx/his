export default interface ServiceImportModel {
    code: string,
    name: string
    heInCode: string,
    heInName: string
    sortOrder: Number,
    inactive: boolean,
    serviceUnitCode?: string,
    serviceGroupHeInCode?: string,
    serviceGroupCode?: string,
    surgicalProcedureTypeCode?: string

    patientTypeCode?: string,
    oldUnitPrice: Number,
    newUnitPrice: Number,
    paymentRate: Number,
    ceilingPrice: Number,
    executionTime?: Date | string

    executionRoomCode?: string
}