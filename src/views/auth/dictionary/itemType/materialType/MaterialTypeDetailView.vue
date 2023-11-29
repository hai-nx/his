<template>
    <form>
        <a-modal
            :visible="show"
            :title="title"
            @cancel="handleCancel"
            width="1000px"
            :mask-closable="false"
        >
            <div class="container">
                <a-tabs
                    class="Item-card-body"
                    v-model:activeKey="activeKey"
                    type="card"
                >
                    <a-tab-pane key="1" tab="Thông tin chung">
                        <div class="container">
                            <div class="container-general">
                                <label class="grid-column-1">
                                    <span>Mã vật tư:</span>
                                    <span class="text-danger me-1">*</span>
                                </label>
                                <a-input
                                    class="grid-column-2"
                                    v-model:value="item.code"
                                    :disabled="loading"
                                />
                                <label class="grid-column-3">
                                    <span>Tên vật tư:</span>
                                    <span class="text-danger me-1">*</span>
                                </label>
                                <a-input
                                    class="grid-column-columnspan-4-7"
                                    v-model:value="item.name"
                                    :disabled="loading"
                                />

                                <label class="grid-column-1">
                                    <span>Mã BHYT:</span>
                                    <span class="text-danger me-1"></span>
                                </label>
                                <a-input
                                    class="grid-column-2"
                                    v-model:value="item.heInCode"
                                    :disabled="loading"
                                />
                                <label class="grid-column-3">
                                    <span>Nhóm BHYT:</span>
                                    <span class="text-danger me-1">*</span>
                                </label>
                                <a-select
                                    showSearch
                                    class="grid-column-4"
                                    v-model:value="item.serviceGroupHeInId"
                                    :options="serviceGroupHeIns"
                                    :field-names="fields"
                                    :disabled="loading"
                                >
                                    <template #option="{ name }">
                                        <div class="row">
                                            <span>{{ name }}</span>
                                        </div>
                                    </template>
                                </a-select>
                                <label class="grid-column-5">
                                    <span>Nhóm thuốc:</span>
                                    <span class="text-danger me-1">*</span>
                                </label>
                                <a-select
                                    showSearch
                                    class="grid-column-6"
                                    v-model:value="item.itemGroupId"
                                    :options="itemGroups"
                                    :field-names="fields"
                                    :disabled="loading"
                                >
                                    <template #option="{ name }">
                                        <div class="row">
                                            <span>{{ name }}</span>
                                        </div>
                                    </template>
                                </a-select>

                                <label class="grid-column-1">
                                    <span>Đơn vị tính:</span>
                                    <span class="text-danger me-1">*</span>
                                </label>
                                <a-select
                                    showSearch
                                    class="grid-column-2"
                                    v-model:value="item.unitId"
                                    :options="units"
                                    :field-names="fields"
                                    :disabled="loading"
                                >
                                    <template #option="{ name }">
                                        <div class="row">
                                            <span>{{ name }}</span>
                                        </div>
                                    </template>
                                </a-select>
                                <!-- <label class="grid-column-5">Đóng gói:</label>
                                <a-input
                                    class="grid-column-6"
                                    v-model:value="item.packagingSpecifications"
                                    :disabled="loading"
                                /> -->

                                <label class="grid-column-3">Hướng dẫn:</label>
                                <a-input
                                    class="grid-column-columnspan-4-7"
                                    v-model:value="item.tutorial"
                                    :disabled="loading"
                                />

                                <label class="grid-column-1">Đóng gói:</label>
                                <a-input
                                    class="grid-column-2"
                                    v-model:value="item.packagingSpecifications"
                                    :disabled="loading"
                                />
                                <label class="grid-column-3"
                                    >Hãng sản xuất:</label
                                >
                                <a-input
                                    class="grid-column-4"
                                    v-model:value="item.manufacturer"
                                    :disabled="loading"
                                />
                                <label class="grid-column-5"
                                    >Nước sản xuất:</label
                                >
                                <a-select
                                    class="grid-column-6"
                                    showSearch
                                    v-model:value="item.countryId"
                                    :options="countries"
                                    :field-names="fields"
                                    :disabled="loading"
                                >
                                    <template #option="{ name }">
                                        <div class="row">
                                            <span>{{ name }}</span>
                                        </div>
                                    </template>
                                </a-select>

                                <label class="grid-column-1">Giá nhập:</label>
                                <a-input-number
                                    class="grid-column-2 w-100"
                                    v-model:value="item.impPrice"
                                    :disabled="loading"
                                    min="0"
                                />
                                <label class="grid-column-3"
                                    >VAT nhập(%):</label
                                >
                                <a-input-number
                                    class="grid-column-4 w-100"
                                    v-model:value="item.impVatRate"
                                    :disabled="loading"
                                    min="0"
                                    max="100"
                                />
                                <label class="grid-column-5"
                                    >Thuế nhập(%):</label
                                >
                                <a-input-number
                                    class="grid-column-6 w-100"
                                    v-model:value="item.impTaxRate"
                                    :disabled="loading"
                                    min="0"
                                    max="100"
                                />

                                <label class="grid-column-1">Số đăng ký:</label>
                                <a-input
                                    class="grid-column-2"
                                    v-model:value="item.registrationNumber"
                                    :disabled="loading"
                                />
                                <label class="grid-column-3">Ghi chú:</label>
                                <a-input
                                    class="grid-column-columnspan-4-7"
                                    v-model:value="item.description"
                                    :disabled="loading"
                                />

                                <label class="grid-column-1">Số thứ tự:</label>
                                <a-input-number
                                    class="grid-column-2 w-100"
                                    v-model:value="item.sortOrder"
                                    :disabled="loading"
                                    min="0"
                                />
                                <a-checkbox
                                    class="grid-column-6"
                                    v-model:checked="item.inactive"
                                    :disabled="loading"
                                    >Ngừng sử dụng</a-checkbox
                                >
                            </div>

                            <div class="container-general-other mt-4">
                                <div class="checkbox-wrapper grid-column-1">
                                    <a-checkbox
                                        v-model:checked="item.isAntibiotics"
                                        :disabled="loading"
                                        >Thuốc kháng sinh</a-checkbox
                                    >
                                </div>
                                <div class="checkbox-wrapper grid-column-2">
                                    <a-checkbox
                                        v-model:checked="item.isNewDrug"
                                        :disabled="loading"
                                        >Thuốc tân dược</a-checkbox
                                    >
                                </div>
                                <div class="checkbox-wrapper grid-column-3">
                                    <a-checkbox
                                        v-model:checked="
                                            item.isPrescriptionDrug
                                        "
                                        :disabled="loading"
                                        >Thuốc kê đơn</a-checkbox
                                    >
                                </div>
                                <div class="checkbox-wrapper grid-column-4">
                                    <a-checkbox
                                        v-model:checked="item.isNutraceutical"
                                        :disabled="loading"
                                        >Dược phẩm chức năng</a-checkbox
                                    >
                                </div>
                                <div class="checkbox-wrapper grid-column-1">
                                    <a-checkbox
                                        v-model:checked="item.isSponsoredDrug"
                                        :disabled="loading"
                                        >Thuốc tài trợ</a-checkbox
                                    >
                                </div>
                                <div class="checkbox-wrapper grid-column-2">
                                    <a-checkbox
                                        v-model:checked="item.isInhalantDrug"
                                        :disabled="loading"
                                        >Thuốc khí dung</a-checkbox
                                    >
                                </div>
                                <div class="checkbox-wrapper grid-column-3">
                                    <a-checkbox
                                        v-model:checked="
                                            item.isPrescriptionDrugForChildren
                                        "
                                        :disabled="loading"
                                        >Thuốc kê đơn trẻ em</a-checkbox
                                    >
                                </div>
                                <div class="checkbox-wrapper grid-column-4">
                                    <a-checkbox
                                        v-model:checked="
                                            item.isTraditionalHerbalDrug
                                        "
                                        :disabled="loading"
                                        >Vị thuốc YHCT</a-checkbox
                                    >
                                </div>
                                <div class="checkbox-wrapper grid-column-1">
                                    <a-checkbox
                                        v-model:checked="
                                            item.isTraditionalDrugFormulation
                                        "
                                        :disabled="loading"
                                        >Chế phẩm YHCT</a-checkbox
                                    >
                                </div>
                                <div class="checkbox-wrapper grid-column-2">
                                    <a-checkbox
                                        v-model:checked="
                                            item.isDrugContainerReturnRequest
                                        "
                                        :disabled="loading"
                                        >Yêu cầu trả vỏ thuốc</a-checkbox
                                    >
                                </div>
                                <div class="checkbox-wrapper grid-column-3">
                                    <a-checkbox
                                        v-model:checked="
                                            item.isAllowZeroQuantity
                                        "
                                        :disabled="loading"
                                        >Cho phép kê SL bằng 0</a-checkbox
                                    >
                                </div>
                                <div class="checkbox-wrapper grid-column-4">
                                    <a-checkbox
                                        v-model:checked="
                                            item.isRadiolabeledDrug
                                        "
                                        :disabled="loading"
                                        >Thuốc phóng xạ</a-checkbox
                                    >
                                </div>
                            </div>
                        </div>
                    </a-tab-pane>
                </a-tabs>
            </div>

            <template #footer>
                <a-button
                    class="btn-save"
                    key="submit"
                    type="primary"
                    :loading="loading"
                    @click.prevent="handleSave"
                    >Lưu</a-button
                >
                <a-button
                    class="btn-save-new"
                    type="primary"
                    :loading="loading"
                    @click.prevent="handleSaveAndAddNew"
                    >Lưu và Thêm mới</a-button
                >
                <a-button @click="handleCancel" class="btn-cancel"
                    >Bỏ qua</a-button
                >
            </template>
        </a-modal>
    </form>
</template>

<script lang="ts">
import { CommodityType } from "@/enums/commodityType";
import { defineComponent, ref, computed, watch, PropType, reactive } from "vue";
import { Modal } from "ant-design-vue";
import {
    ItemTypeModel,
    UnitModel,
    ServiceGroupHeInModel,
    ItemGroupModel,
    CountryModel,
} from "@/models";
import {
    itemTypeService,
    unitService,
    serviceGroupHeInService,
    itemGroupService,
    countryService,
} from "@/services";

export default defineComponent({
    name: "MaterialTypeDetailView",
    props: {
        visible: {
            type: Boolean,
            required: true,
        },
        data: {
            type: Object as PropType<ItemTypeModel>,
        },
    },
    setup(props, { emit }) {
        const title = ref<string>("Thêm mới vật tư");
        const item = ref<ItemTypeModel>({
            id: null,
            commodityType: CommodityType.Material,
            code: null,
            heInCode: null,
            name: null,
            sortOrder: undefined,
            description: undefined,
            inactive: false,
            registrationNumber: null, // Số đăng ký
            proprietaryDrug: null, // Biệt dược
            serviceGroupHeInId: null,
            itemLineId: null, //Đường dùng thuốc
            itemGroupId: null, // Nhóm thuốc
            unitId: null, // Đơn vị tính
            tutorial: null, // Hướng dẫn
            activeSubstance: null, // Hoạt chất
            concentration: null, // Nồng độ
            content: null, // Hàm lượng
            countryId: null, // Nước sản xuất
            manufacturer: null, // Hãng sản xuất
            packagingSpecifications: null, // Quy cách đóng gói
            impPrice: 0, // Giá nhập
            impVatRate: 0, // Phần trăm vat giá nhập
            impTaxRate: 0, // Phần trăm thuế
            isAntibiotics: false, // Thuốc kháng sinh
            isNewDrug: false, // Thuốc tân dược
            isPrescriptionDrug: false, // Thuốc kê đơn
            isNutraceutical: false, // Dược phẩm chức năng
            isSponsoredDrug: false, // Thuốc Tài trợ
            isInhalantDrug: false, // Thuốc khí dung
            isPrescriptionDrugForChildren: false, // Thuốc kê đơn trẻ em
            isTraditionalHerbalDrug: false, // Vị thuốc YHCT
            isTraditionalDrugFormulation: false, // Chế phẩm YHCT
            isDrugContainerReturnRequest: false, // YC trả lại vỏ thuốc
            isAllowZeroQuantity: false, // Cho phép kê SL bằng 0
            isRadiolabeledDrug: false, // Thuốc phóng xạ

            // Thông tin khác
            pharmaceuticalFormulation: null, // Dạng bào chế
            origin: null, // Nguồn gốc
            scientificName: null, // Tên khoa học vị thuốc
            scientificNameChildren: null, // Tên KH của cây con, khoáng vật
            dugStatus: null, // Tình trạng dược liệu
            requirementUseDug: null, // Yêu cầu sử dụng dược liệu
            pharmaceuticalDivision: null, // Bộ phận dược liệu sử dụng
            processingLossRate: null, // Tỷ lệ hao hụt chế biến
            otherExpenses: null, // Chi phí khác
            preparationMethod: null, // Phương pháp chế biến
            qualityStandards: null, // Tiêu chuẩn chất lượng
        });
        const errors = ref({ code: "", name: "" });
        const loading = ref<boolean>(false);
        const result = ref<boolean>(false);
        const activeKey = ref<string>("1");

        const units = ref<UnitModel[]>([]);
        const serviceGroupHeIns = ref<ServiceGroupHeInModel[]>([]);
        const itemGroups = ref<ItemGroupModel[]>([]);
        const countries = ref<CountryModel[]>([]);

        const fields = ref({ value: "id", label: "name" });

        async function inItData() {
            units.value = await getUnits();
            serviceGroupHeIns.value = await getServiceGroupHeIns();
            itemGroups.value = await getItemGroups();
            countries.value = await getCountries();
        }

        async function getUnits(): Promise<UnitModel[]> {
            return (await unitService.getAll()).data.result;
        }

        async function getServiceGroupHeIns(): Promise<
            ServiceGroupHeInModel[]
        > {
            return (await serviceGroupHeInService.getAll()).data.result;
        }

        async function getItemGroups(): Promise<ItemGroupModel[]> {
            let params: any = {
                params: {
                    CommodityTypeFilter: 1,
                },
            };

            return (await itemGroupService.getAll(params)).data.result;
        }

        async function getCountries(): Promise<CountryModel[]> {
            return (await countryService.getAll()).data.result;
        }

        const handleSave = async function () {
            loading.value = true;
            let resultSave = await itemTypeService.createOrEdit(item.value);

            if (resultSave.data.isSuccessed) {
                result.value = true;
                toggle();
            } else {
                Modal.error({
                    content: resultSave.data.message,
                    okText: "Đồng ý",
                });
                loading.value = false;
            }
        };

        const handleSaveAndAddNew = async function () {
            loading.value = true;
            result.value = true;

            let resultSave = await itemTypeService.createOrEdit(item.value);
            if (resultSave.data.isSuccessed) {
                result.value = true;
            } else {
                Modal.error({
                    content: resultSave.data.message,
                    okText: "Đồng ý",
                });
                loading.value = false;
            }

            reset();
        };

        const handleCancel = function () {
            toggle();
        };

        const reset = function () {
            item.value = {
                id: null,
                commodityType: CommodityType.Material,
                code: null,
                heInCode: null,
                name: null,
                sortOrder: undefined,
                description: undefined,
                inactive: false,
                registrationNumber: null, // Số đăng ký
                proprietaryDrug: null, // Biệt dược
                serviceGroupHeInId: null,
                itemLineId: null, //Đường dùng thuốc
                itemGroupId: null, // Nhóm thuốc
                unitId: null, // Đơn vị tính
                tutorial: null, // Hướng dẫn
                activeSubstance: null, // Hoạt chất
                concentration: null, // Nồng độ
                content: null, // Hàm lượng
                countryId: null, // Nước sản xuất
                manufacturer: null, // Hãng sản xuất
                packagingSpecifications: null, // Quy cách đóng gói
                impPrice: 0, // Giá nhập
                impVatRate: 0, // Phần trăm vat giá nhập
                impTaxRate: 0, // Phần trăm thuế
                isAntibiotics: false, // Thuốc kháng sinh
                isNewDrug: false, // Thuốc tân dược
                isPrescriptionDrug: false, // Thuốc kê đơn
                isNutraceutical: false, // Dược phẩm chức năng
                isSponsoredDrug: false, // Thuốc Tài trợ
                isInhalantDrug: false, // Thuốc khí dung
                isPrescriptionDrugForChildren: false, // Thuốc kê đơn trẻ em
                isTraditionalHerbalDrug: false, // Vị thuốc YHCT
                isTraditionalDrugFormulation: false, // Chế phẩm YHCT
                isDrugContainerReturnRequest: false, // YC trả lại vỏ thuốc
                isAllowZeroQuantity: false, // Cho phép kê SL bằng 0
                isRadiolabeledDrug: false, // Thuốc phóng xạ

                // Thông tin khác
                pharmaceuticalFormulation: null, // Dạng bào chế
                origin: null, // Nguồn gốc
                scientificName: null, // Tên khoa học vị thuốc
                scientificNameChildren: null, // Tên KH của cây con, khoáng vật
                dugStatus: null, // Tình trạng dược liệu
                requirementUseDug: null, // Yêu cầu sử dụng dược liệu
                pharmaceuticalDivision: null, // Bộ phận dược liệu sử dụng
                processingLossRate: null, // Tỷ lệ hao hụt chế biến
                otherExpenses: null, // Chi phí khác
                preparationMethod: null, // Phương pháp chế biến
                qualityStandards: null, // Tiêu chuẩn chất lượng
            };
        };

        const toggle = function () {
            emit("toggle", result);
        };

        const show = computed(() => props.visible);

        watch(show, (value) => {
            if (value) {
                result.value = false;
                loading.value = true;

                inItData();
                reset();

                if (
                    props.data !== null &&
                    props.data?.id !== null &&
                    props.data?.id !== undefined
                ) {
                    let data = props.data!;
                    itemTypeService
                        .getById(data.id!)
                        .then((res) => {
                            item.value = res.data.result;
                            title.value = "Sửa vật tư";
                            loading.value = false;
                        })
                        .catch((error) => {
                            Modal.error({
                                content: error.message,
                                okText: "Đồng ý",
                            });
                            toggle();
                        });
                } else {
                    loading.value = false;
                }

                loading.value = false;
            }
        });

        return {
            title,
            item,
            errors,
            show,
            loading,
            activeKey,
            fields,
            units,
            serviceGroupHeIns,
            itemGroups,
            countries,
            handleSave,
            handleSaveAndAddNew,
            handleCancel,
        };
    },
});
</script>

<style scoped>
.Item-card-body {
    margin: -24px;
    max-height: 650px;
    height: 650px;
    overflow-y: auto;
}

.container-general {
    display: grid;
    grid-template-columns: repeat(3, auto minmax(150px, 1fr));
    grid-row-gap: 5px;
    grid-column-gap: 10px;
    align-items: center;
}

.grid-column-columnspan-4-7 {
    grid-column: 4/7;
}
.grid-column-columnspan-2-7 {
    grid-column: 2/7;
}
.grid-column-1 {
    grid-column: 1/2;
}
.grid-column-2 {
    grid-column: 2/3;
}
.grid-column-3 {
    grid-column: 3/4;
}
.grid-column-4 {
    grid-column: 4/5;
}
.grid-column-5 {
    grid-column: 5/6;
}
.grid-column-6 {
    grid-column: 6/7;
}

.container-general-other {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 10px;
    grid-column-gap: 10px;
    align-items: center;
    justify-content: center;
}

.checkbox-wrapper {
    width: 100%;
}

.container-extent {
    display: grid;
    grid-template-columns: repeat(1, auto 1fr);
    grid-row-gap: 5px;
    grid-column-gap: 10px;
    align-items: center;
    justify-content: center;
}

@media (max-width: 768px) {
    .container-general {
        grid-template-columns: 1fr;
    }
    .grid-column-1 {
        grid-column: 1/1;
    }
    .grid-column-2 {
        grid-column: 1/1;
    }
    .grid-column-3 {
        grid-column: 1/1;
    }
    .grid-column-4 {
        grid-column: 1/1;
    }
    .grid-column-5 {
        grid-column: 1/1;
    }
    .grid-column-6 {
        grid-column: 1/1;
    }
    .grid-column-columnspan-4-7 {
        grid-column: 1/1;
    }
    .grid-column-columnspan-2-7 {
        grid-column: 1/1;
    }
}
</style>