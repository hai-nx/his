import DictionaryBase from "./base";

export default interface EmployeeModel extends DictionaryBase {
    genderId: number,
    dob?: string,
}