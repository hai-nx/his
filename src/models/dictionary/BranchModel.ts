import BaseDictionaryModel from "./BaseDictionaryModel";

export default interface BranchModel extends BaseDictionaryModel {
    id: string,
    code: string,
    name: string,
    taxCode: string,
    address: string,
    description: string,
    inactive: boolean
}