import DictionaryBase from '../base'

export default interface EthnicityModel extends DictionaryBase {
    ethnicCode?: string,
    ethnicName?: string
}

export interface EthnicityRequestModel {
    ethnicCodeFilter?: string,
    ethnicNameFilter?: string,
    inactiveFilter?: boolean
}