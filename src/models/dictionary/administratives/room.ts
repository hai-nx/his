import DictionaryBase from "../base";
import PagedResultRequestModel from "@/models/PagedResultRequestModel"

export default interface RoomModel extends DictionaryBase {
    mohCode?: string,
    roomTypeId: number,
    roomTypeCode?: string,
    roomTypeName?: string,
    departmentId: string,
    departmentCode?: string,
    departmentName?: string,
}

export interface RoomRequestModel extends PagedResultRequestModel {
    codeFilter?: string
    nameFilter?: string
    roomTypeIdFilter?: number
    departmentIdFilter?: string
    inactiveFilter?: boolean
}