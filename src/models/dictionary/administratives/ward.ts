import DictionaryBase from "../base";

interface WardModel extends DictionaryBase {
  searchCode?: string;
  districtId?: string;
  districtCode?: string;
  districtName?: string;
  provinceId?: string;
  provinceCode?: string;
  provinceName?: string;
}

export default WardModel;
