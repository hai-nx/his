import DictionaryBase from './base'

export default interface ServiceModel extends DictionaryBase {
    serviceTypeId: string | undefined,
    serviceUnitId: string | undefined,
    serviceGroupId: string | undefined,

    serviceUnitName: string,
    serviceGroupName: string,
}