import DictionaryBase from "../base";

export default interface DepartmentModel extends DictionaryBase {
    mediCode?: string,
    departmentTypeId?: number,
    departmentTypeCode?: string,
    departmentTypeName?: string,
    branchId: string,
    branchCode?: string,
    branchName?: string
}
