import { Dayjs } from 'dayjs'

export default interface ServicePricePolicyModel {
    id: string | undefined,
    serviceId: string | undefined,
    patientTypeId: string | undefined,
    oldUnitPrice: number,
    newUnitPrice: number,
    ceilingPrice: number,
    paymentRate: number,
    executionTime: Date // Dayjs,
    // executionTimeString: string | null,

    isHeIn: boolean,
    patientTypeCode: string,
    patientTypeName: string
}