import { Dayjs } from 'dayjs'

export default interface ServiceImportModel {
    code: string,
    name: string
    heInCode: string,
    heInName: string
    sortOrder: Number,
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
    // executionTime: Dayjs | null,
    executionTimeString: string | null,

    executionRoomCode: string
}