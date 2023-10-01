import DictionaryBase from "./../base";

export default interface MedicineGroupModel extends DictionaryBase {
    isSystem: boolean,
    commodityType: number
}