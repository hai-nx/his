import BaseDictionaryModel from "./BaseDictionaryModel";

export default interface RoomModel extends BaseDictionaryModel {
    id: string,
    code: string,
    name: string,
    description: string,
    inactive: boolean
}