import DictionaryBase from "../base";

interface WardModel extends DictionaryBase {
  searchText?: string;
  districtId?: string;
  districtName?: string;
  provinceId?: string;
  provinceName?: string;
}

export default WardModel;
