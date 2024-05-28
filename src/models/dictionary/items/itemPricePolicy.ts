export default interface ItemPricePolicyModel {
    id: string | undefined,
    itemId: string | undefined,
    patientTypeId: string | undefined,
    oldUnitPrice: number,
    newUnitPrice: number,
    ceilingPrice: number,
    paymentRate: number,
    executionTime: Date | null,

    isHeIn: boolean,
    patientTypeCode: string,
    patientTypeName: string
}