export default interface ServiceResultIndiceImportModel {
    code: string | null,
    name: string | null,
    unit: string | null,
    maleFrom: number | null,
    maleTo: number | null,
    femaleFrom: number | null,
    femaleTo: number | null,
    serviceId: string | undefined,
    sortOrder?: number
    inactive: boolean,

    serviceCode: string | null,
}