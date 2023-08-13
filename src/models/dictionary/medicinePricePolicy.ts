import { Dayjs } from 'dayjs'

export default interface MedicinePricePolicyModel {
    id: string | undefined,
    medicineId: string | undefined,
    patientTypeId: string | undefined,
    oldUnitPrice: number,
    newUnitPrice: number,
    ceilingPrice: number,
    paymentRate: number,
    executionTime: string | null,

    isHeIn: boolean,
    patientTypeCode: string,
    patientTypeName: string
}