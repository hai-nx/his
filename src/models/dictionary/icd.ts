import DictionaryBase from "./base";

export default interface ICDModel extends DictionaryBase {
    mohReportCode?: string,
    nameEnglish?: string,
    nameCommon?: string,
    chapterCode?: string,
    chapterName?: string,
    chapterNameEnglish?: string,
    mainGroupCode?: string,
    mainGroupName?: string,
    mainGroupNameEnglish?: string,
    subGroup1Code?: string,
    subGroup1Name?: string,
    subGroup1NameEnglish?: string,
    subGroup2Code?: string,
    subGroup2Name?: string,
    subGroup2NameEnglish?: string,
    typeCode?: string,
    typeName?: string,
    typeNameEnglish?: string
}