import DictionaryBase from '../base'

interface BranchModel extends DictionaryBase {
    mediOrgCode?: string,
    mediOrgAcceptCode?: string,
    hospitalLevelID?: string,
    hospitalLevelCode?: string,
    hospitalLevelName?: string,
    hospitalLineID?: string,
    hospitalLineCode?: string,
    hospitalLineName?: string,
    hospitalSpecialityID?: string,
    hospitalSpecialityCode?: string,
    hospitalSpecialityName?: string,
    parentOrganizationName?: string,
    phoneNumber?: string,
    email?: string,
    address?: string,
    provinceID?: string,
    provinceName?: string,
    districtID?: string,
    districtName?: string,
    wardID?: string,
    wardName?: string,
    directorID?: string,
    directorName?: string,
}

export default BranchModel