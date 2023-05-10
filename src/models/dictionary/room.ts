import DictionaryBase from "./base";

export default interface RoomModel extends DictionaryBase {
    mohCode?: string,
    roomTypeId: number,
    departmentId: string,
    departmentCode?: string,
    departmentName?: string,
}