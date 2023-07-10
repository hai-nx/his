import DictionaryBase from './base'

export default interface ServiceResultIndiceModel extends DictionaryBase {
    unit: string | null,
    maleFrom: number | null,
    maleTo: number | null,
    femaleFrom: number | null,
    femaleTo: number | null,
    serviceId: string | undefined,

    serviceCode: string | null,
}