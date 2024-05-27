import DictionaryBase from "../base";

export default interface DistrictModel extends DictionaryBase {
  districtCode?: string,
  districtName?: string,
  provinceID?: string;

}
