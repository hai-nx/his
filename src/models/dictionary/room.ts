import DictionaryBase from "./base";

export default interface RoomModel extends DictionaryBase {
    mohCode?: string,
    roomTypeId: string,
    roomTypeCode?: string,
    roomTypeName?: string,
    departmentId: string,
    departmentCode?: string,
    departmentName?: string,
}