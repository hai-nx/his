import DictionaryBase from "./base";

export default interface DepartmentModel extends DictionaryBase {
    mohCode: string,
    branchId: string,
    branchCode?: string,
    branchName?: string
}
