import DictionaryBase from "./base";

export default interface DepartmentModel extends DictionaryBase {
    mohCode: string,
    departmentTypeId: string,
    departmentTypeCode?: string,
    departmentTypeName?: string,
    branchId: string,
    branchCode?: string,
    branchName?: string
}
