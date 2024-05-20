import { PagedResultRequestModel } from '@/models/base'
import DictionaryBase from '../base'

export default interface GenderModel extends DictionaryBase {
    sortOrder: number
}

export interface GetAllGenderInputModel extends PagedResultRequestModel {
    
}