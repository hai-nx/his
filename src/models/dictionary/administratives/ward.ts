import DictionaryBase from "../base";

interface WardModel extends DictionaryBase {
  wardCode?: string,
  wardName?: string,
  searchCode?: string;
  districtID?: string;
  districtCode?: string;
  districtName?: string;
  provinceId?: string;
  provinceCode?: string;
  provinceName?: string;
}

export default WardModel;
