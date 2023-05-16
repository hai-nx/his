import DictionaryBase from "./base";

export default interface RoomModel extends DictionaryBase {
    mohCode?: string,
    roomTypeId: number,
    roomTypeCode?: string,
    roomTypeName?: string,
    departmentId: string,
    departmentCode?: string,
    departmentName?: string,
}