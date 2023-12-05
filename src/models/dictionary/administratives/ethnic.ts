import DictionaryBase from '../base'

export default interface EthnicModel extends DictionaryBase {
    ethnicCode?: string,
    ethnicName?: string
}

export interface EthnicRequestModel {
    ethnicCodeFilter?: string,
    ethnicNameFilter?: string,
    inactiveFilter?: boolean
}