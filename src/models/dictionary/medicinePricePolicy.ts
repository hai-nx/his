import { Dayjs } from 'dayjs'

export default interface MedicinePricePolicy {
    id: string | undefined,
    medicineId: string | undefined,
    patientTypeId: string | undefined,
    oldUnitPrice: number,
    newUnitPrice: number,
    ceilingPrice: number,
    paymentRate: number,
    executionTime: Dayjs | null,

    isHeIn: boolean,
    patientTypeCode: string,
    patientTypeName: string
}