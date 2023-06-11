export default interface ServicePricePolicyModel {
    id: string | undefined,
    serviceId: string | undefined,
    patientTypeId: string | undefined,
    oldUnitPrice: number,
    newUnitPrice: number,
    ceilingPrice: number,
    executionTime: Date | null,

    patientTypeCode: string
    patientTypeName: string
}