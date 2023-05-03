import BaseDictionaryModel from "./BaseDictionaryModel";

export default interface DepartmentModel extends BaseDictionaryModel {
    id: string,
    code: string,
    name: string,
    description: string,
    inactive: boolean
}