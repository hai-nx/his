import DictionaryBase from './base'

export default interface SupplierModel extends DictionaryBase {
    taxtCode?: string // Mã số thuế
    address?: string
}