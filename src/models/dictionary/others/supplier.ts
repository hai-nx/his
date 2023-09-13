import DictionaryBase from "./../base";

export default interface SupplierModel extends DictionaryBase {
    taxCode?: string // Mã số thuế
    address?: string
}