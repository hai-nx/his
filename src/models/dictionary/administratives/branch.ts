import DictionaryBase from '../base'

interface BranchModel extends DictionaryBase {
    mediOrgCode?: string,
    mediOrgAcceptCode?: string,
    level?: string,
    specialty?: string,
    line?: string,
    parentOrganizationName?: string,
    tel?: string,
    email?: string,
    address?: string,
    provinceId?: string,
    provinceName?: string,
    districtId?: string,
    districtName?: string,
    wardId?: string,
    wardName?: string,
}

export default BranchModel