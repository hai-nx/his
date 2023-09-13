<template>
    <a-modal
        :visible="show"
        :title="title"
        @cancel="handleCancel"
        :mask-closable="false"
        max-height="720px"
        max-width="1200px"
        width="1200px"
        height="720px"
    >
        <div class="container">
            <div class="row">
                <div class="col-md-10">
                    <a-input
                        :disabled="loading"
                        v-model:value="selectedFileName"
                        readonly
                    />
                </div>
                <div class="col-md-2">
                    <a-button
                        class="w-100"
                        type="primary"
                        :loading="loading"
                        @click.prevent="openFilePicker"
                    >
                        Chọn file</a-button
                    >
                </div>
                <div>
                    <input
                        type="file"
                        ref="fileInput"
                        style="display: none"
                        accept=".xls, .xlsx"
                        @change="handleFileChange"
                    />
                </div>
            </div>

            <div class="row mt-2">
                <div class="col-md-12 table-container">
                    <a-table
                        class="ant-table-striped"
                        size="middle"
                        bordered
                        :columns="columnitemTypes"
                        :data-source="datas"
                        :pagination="false"
                        :scroll="{ y: 500 }"
                    >
                        <template #bodyCell="{ column, record }">
                            <template v-if="column.key === 'inactive'">
                                <a-checkbox
                                    class="my-0 mx-0 w-100 centered-checkbox"
                                    v-model:checked="record.inactive"
                                />
                            </template>
                            <!-- <template v-else-if="column.key === 'executionTime'">
                <a-date-picker
                  class="my-0 mx-0 w-100"
                  placeholder="dd/MM/yyyy"
                  format="DD/MM/YYYY"
                  v-model:value="record.executionTime"
                  disabled
                />
              </template> -->
                        </template>
                    </a-table>
                </div>
            </div>
        </div>

        <template #footer>
            <a-button
                key="submit"
                type="primary"
                :loading="loading"
                @click.prevent="handleSave"
            >
                Import</a-button
            >
            <a-button @click="handleCancel">Bỏ qua</a-button>
        </template>
    </a-modal>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch, reactive } from "vue";
import * as XLSX from "xlsx";
import {
    ItemTypeImportModel,
    ItemTypeModel,
    UnitModel,
    ServiceGroupHeInModel,
    ItemGroupModel,
    ItemLineModel,
    CountryModel,
} from "@/models";
import {
    itemTypeService,
    unitService,
    serviceGroupHeInService,
    itemGroupService,
    itemLineService,
    countryService,
} from "@/services";

export default defineComponent({
    name: "itemTypesDetailImportView",
    props: {
        visible: {
            type: Boolean,
            required: true,
        },
    },
    setup(props, { emit }) {
        //#region Khai báo biến

        const isResult = ref<boolean>(false);
        const loading = ref<boolean>(false);
        const title = ref<string>("Nhập dữ liệu thuốc từ file excel");
        const selectedFileName = ref<string>();
        const fileInput = ref<HTMLInputElement | null>(null);
        const show = computed(() => props.visible);
        const datas = ref<ItemTypeImportModel[]>([]);

        const columnitemTypes = ref([
            {
                title: "Mã thuốc (*)",
                key: "code",
                dataIndex: "code",
                width: 100,
                className: "column-header-center",
            },
            {
                title: "Tên thuốc (*)",
                key: "name",
                dataIndex: "name",
                width: 250,
                className: "column-header-center",
            },
            {
                title: "Mã BHYT (*)",
                key: "heInCode",
                dataIndex: "heInCode",
                width: 100,
                className: "column-header-center",
            },
            {
                title: "Nhóm BHYT (*)",
                key: "serviceGroupHeInId",
                dataIndex: "serviceGroupHeInId",
                width: 250,
                className: "column-header-center",
            },
            {
                title: "Nhóm thuốc (*)",
                key: "itemGroupId",
                dataIndex: "itemGroupId",
                width: 100,
                className: "column-header-center",
            },
            {
                title: "Đơn vị tính (*)",
                key: "unitCode",
                dataIndex: "unitCode",
                width: 100,
                className: "column-header-center",
            },
            {
                title: "Đường dùng (*)",
                key: "itemLineId",
                dataIndex: "itemLineId",
                width: 100,
                className: "column-header-center",
            },
            {
                title: "Hoạt chất",
                key: "activeSubstance",
                dataIndex: "activeSubstance",
                width: 100,
                className: "column-header-center",
            },
            {
                title: "Hàm lượng",
                key: "content",
                dataIndex: "content",
                width: 120,
                className: "column-header-center",
            },
            {
                title: "Nồng độ",
                key: "concentration",
                dataIndex: "concentration",
                width: 120,
                className: "column-header-center",
            },
            {
                title: "Đóng gói",
                key: "packagingSpecifications",
                dataIndex: "packagingSpecifications",
                width: 120,
                className: "column-header-center",
            },
            {
                title: "Hướng dẫn",
                key: "tutorial",
                dataIndex: "tutorial",
                width: 120,
                className: "column-header-center",
            },
            {
                title: "Hãng sản xuất",
                key: "manufacturer",
                dataIndex: "manufacturer",
                width: 120,
                className: "column-header-center",
            },
            {
                title: "Nước sản xuất",
                key: "countryId",
                dataIndex: "countryId",
                width: 120,
                className: "column-header-center",
            },
            {
                title: "Giá nhập",
                key: "impPrice",
                dataIndex: "impPrice",
                width: 120,
                className: "column-header-center",
            },
            {
                title: "VAT nhập(%)",
                key: "impVatRate",
                dataIndex: "impVatRate",
                width: 120,
                className: "column-header-center",
            },
            {
                title: "Thuế nhập(%)",
                key: "taxRate",
                dataIndex: "taxRate",
                width: 120,
                className: "column-header-center",
            },
            {
                title: "Số đăng ký",
                key: "registrationNumber",
                dataIndex: "registrationNumber",
                width: 120,
                className: "column-header-center",
            },
            {
                title: "Ghi chú",
                key: "description",
                dataIndex: "description",
                width: 120,
                className: "column-header-center",
            },
            {
                title: "Số thứ tự",
                key: "sortOrder",
                dataIndex: "sortOrder",
                width: 120,
                className: "column-header-center",
            },
            {
                title: "Biệt dược",
                key: "proprietaryDrug",
                dataIndex: "proprietaryDrug",
                width: 120,
                className: "column-header-center",
            },
            {
                title: "Thuốc kháng sinh",
                key: "isAntibiotics",
                dataIndex: "isAntibiotics",
                width: 120,
                className: "column-header-center",
            },
            {
                title: "Thuốc kê đơn",
                key: "isPrescriptionDrug",
                dataIndex: "isPrescriptionDrug",
                width: 120,
                className: "column-header-center",
            },
            {
                title: "Dược phẩm chức năng",
                key: "isNutraceutical",
                dataIndex: "isNutraceutical",
                width: 120,
                className: "column-header-center",
            },
            {
                title: "Thuốc tài trợ",
                key: "isSponsoredDrug",
                dataIndex: "isSponsoredDrug",
                width: 120,
                className: "column-header-center",
            },
            {
                title: "Thuốc kê đơn trẻ em",
                key: "isPrescriptionDrugForChildren",
                dataIndex: "isPrescriptionDrugForChildren",
                width: 120,
                className: "column-header-center",
            },
            {
                title: "Vị thuốc YHCT",
                key: "isTraditionalHerbalDrug",
                dataIndex: "isTraditionalHerbalDrug",
                width: 120,
                className: "column-header-center",
            },
            {
                title: "Chế phẩm YHCT",
                key: "isTraditionalDrugFormulation",
                dataIndex: "isTraditionalDrugFormulation",
                width: 120,
                className: "column-header-center",
            },
            {
                title: "Yêu cầu trả vỏ thuốc",
                key: "isDrugContainerReturnRequest",
                dataIndex: "isDrugContainerReturnRequest",
                width: 120,
                className: "column-header-center",
            },
            {
                title: "Cho phép kê SL bằng 0",
                key: "isAllowZeroQuantity",
                dataIndex: "isAllowZeroQuantity",
                width: 120,
                className: "column-header-center",
            },
            {
                title: "Thuốc phóng xạ",
                key: "isRadiolabeledDrug",
                dataIndex: "isRadiolabeledDrug",
                width: 120,
                className: "column-header-center",
            },
            {
                title: "Dạng bào chế",
                key: "pharmaceuticalFormulation",
                dataIndex: "pharmaceuticalFormulation",
                width: 120,
                className: "column-header-center",
            },
            {
                title: "Nguồn gốc",
                key: "origin",
                dataIndex: "origin",
                width: 120,
                className: "column-header-center",
            },
            {
                title: "Tên khoa học vị thuốc",
                key: "scientificName",
                dataIndex: "scientificName",
                width: 120,
                className: "column-header-center",
            },
            {
                title: "Tên KH của cây con, khoáng vật",
                key: "scientificNameChildren",
                dataIndex: "scientificNameChildren",
                width: 120,
                className: "column-header-center",
            },
            {
                title: "Tình trạng dược liệu",
                key: "dugStatus",
                dataIndex: "dugStatus",
                width: 120,
                className: "column-header-center",
            },
            {
                title: "Yêu cầu sử dụng dược liệu",
                key: "requirementUseDug",
                dataIndex: "requirementUseDug",
                width: 120,
                className: "column-header-center",
            },
            {
                title: "Bộ phận dược liệu sử dụng",
                key: "pharmaceuticalDivision",
                dataIndex: "pharmaceuticalDivision",
                width: 120,
                className: "column-header-center",
            },
            {
                title: "Tỷ lệ hao hụt chế biến (%)",
                key: "processingLossRate",
                dataIndex: "processingLossRate",
                width: 120,
                className: "column-header-center",
            },
            {
                title: "Chi phí khác",
                key: "otherExpenses",
                dataIndex: "otherExpenses",
                width: 120,
                className: "column-header-center",
            },
            {
                title: "Phương pháp chế biến",
                key: "preparationMethod",
                dataIndex: "preparationMethod",
                width: 120,
                className: "column-header-center",
            },
            {
                title: "Tiêu chuẩn chất lượng",
                key: "qualityStandards",
                dataIndex: "qualityStandards",
                width: 120,
                className: "column-header-center",
            },
            {
                title: "Ngưng sử dụng",
                key: "inactive",
                dataIndex: "inactive",
                width: 120,
                className: "column-header-center",
            },
        ]);

        const handleCancel = () => {
            toggle();
        };

        const handleSave = async () => {
            loading.value = true;

            let isImport = await itemTypeService.import(datas.value);
            isResult.value = isImport.data.isSuccessed;

            loading.value = false;

            if (isImport.data.isSuccessed) {
                console.log("isSuccessed: " + isImport.data.isSuccessed);
                toggle();
            }
        };

        const openFilePicker = () => {
            if (fileInput.value) {
                fileInput.value.click();
            }
        };

        const handleFileChange = (event: Event) => {
            handleFileServiceChange(event);
        };

        const units = ref<UnitModel[]>([]);
        const serviceGroupHeIns = ref<ServiceGroupHeInModel[]>([]);
        const itemGroups = ref<ItemGroupModel[]>([]);
        const itemLines = ref<ItemLineModel[]>([]);
        const countries = ref<CountryModel[]>([]);

        const fields = ref({ value: "id", label: "name" });

        // Dạng bào chế
        const optionPharmaceuticalFormulations = reactive<
            { value: string; label: string }[]
        >([
            { value: "", label: "-- Chọn --" },
            { value: "Dạng cao", label: "Dạng cao" },
            { value: "Hoàn cứng", label: "Hoàn cứng" },
            { value: "Hoàn mềm", label: "Hoàn mềm" },
            { value: "Bột thuốc", label: "Bột thuốc" },
            { value: "Trà thuốc", label: "Trà thuốc" },
            { value: "Rượu thuốc", label: "Rượu thuốc" },
            { value: "Cồn thuốc", label: "Cồn thuốc" },
            { value: "Viên nén", label: "Viên nén" },
            { value: "Bột hòa tan", label: "Bột hòa tan" },
            { value: "Cốm hòa tan", label: "Cốm hòa tan" },
            { value: "Hoàn nhỏ giọt", label: "Hoàn nhỏ giọt" },
            { value: "Siro", label: "Siro" },
            { value: "Viên nang cứng", label: "Viên nang cứng" },
            { value: "Viên nang mềm", label: "Viên nang mềm" },
            { value: "Thuốc phun sương mù", label: "Thuốc phun sương mù" },
            { value: "Dung dịch", label: "Dung dịch" },
            { value: "Viên", label: "Viên" },
            { value: "Viên nén bao phim", label: "Viên nén bao phim" },
            { value: "Khác", label: "Khác" },
        ]);

        // Phương pháp chế biến
        const preparationMethods = reactive<{ value: string; label: string }[]>(
            [
                { value: "", label: "-- Chọn --" },
                { value: "Sơ chế", label: "Sơ chế" },
                { value: "Phức chế", label: "Phức chế" },
                { value: "Khác", label: "Khác" },
            ]
        );

        async function inItData() {
            units.value = await getUnits();
            serviceGroupHeIns.value = await getServiceGroupHeIns();
            itemGroups.value = await getitemGroups();
            itemLines.value = await getitemLines();
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

        async function getitemGroups(): Promise<ItemGroupModel[]> {
            let params: any = {
                params: {
                    CommodityTypeFilter: 0,
                },
            };
            return (await itemGroupService.getAll(params)).data.result;
        }

        async function getitemLines(): Promise<ItemLineModel[]> {
            return (await itemLineService.getAll()).data.result;
        }

        async function getCountries(): Promise<CountryModel[]> {
            return (await countryService.getAll()).data.result;
        }

        function handleFileServiceChange(event: Event) {
            inItData();
            const target = event.target as HTMLInputElement;
            if (target.files && target.files.length > 0) {
                const selectedFile = target.files[0];
                selectedFileName.value = selectedFile.name;

                const fileReader = new FileReader();
                fileReader.onload = (e) => {
                    loading.value = true;

                    const result = e.target?.result;
                    if (result instanceof ArrayBuffer) {
                        const arrayBuffer = arrayBufferToUint8Array(result);
                        const workbook = XLSX.read(arrayBuffer, {
                            type: "array",
                        });
                        const worksheetName = workbook.SheetNames[0];
                        const worksheet = workbook.Sheets[worksheetName];

                        const json: Array<Array<string | number>> =
                            XLSX.utils.sheet_to_json(worksheet, { header: 1 });

                        if (json.length > 2) {
                            datas.value = [];

                            // let headerExcels = json[1].map((item) => String(item)); // Dòng thứ 2 làm header
                            let dataExcels = json.slice(2); // Lấy dữ liệu từ dòng thứ 3 trở đi

                            dataExcels.forEach((row) => {                                
                                const excelData: ItemTypeImportModel = {
                                    code:
                                        row[0] == undefined? "": row[0].toString(),
                                    name:
                                        row[1] == undefined? "": row[1].toString(),
                                    heInCode:
                                        row[2] == undefined? "": row[2].toString(),
                                    serviceGroupHeInId:
                                        row[3] == undefined? "": serviceGroupHeIns.value.find(f => f.code === row[3].toString())?.id ?? "",
                                    itemGroupId:
                                        row[4] == undefined? "": itemGroups.value.find(f => f.code === row[4].toString())?.id ?? "",
                                    unitCode:
                                        row[5] == undefined? "": units.value.find(f => f.code === row[5].toString())?.id ?? "",
                                    itemLineId:
                                        row[6] == undefined? "": itemLines.value.find(f => f.code === row[6].toString())?.id ?? "",
                                    activeSubstance:
                                        row[7] == undefined? "": row[7].toString(),
                                    content:
                                        row[8] == undefined? "": row[8].toString(),
                                    concentration:
                                        row[9] == undefined? "": row[9].toString(),
                                    packagingSpecifications:
                                        row[10] == undefined? "": row[10].toString(),
                                    tutorial:
                                        row[11] == undefined? "": row[11].toString(),
                                    manufacturer:
                                        row[12] == undefined? "": row[12].toString(),
                                    countryId:
                                        row[13] == undefined? "": countries.value.find(f => f.code === row[13].toString())?.id ?? "",
                                    impPrice:
                                        row[14] === undefined? 0 : parseFloat(row[14].toString()),
                                    impVatRate:
                                        row[15] === undefined? 0 : parseFloat(row[15].toString()),
                                    taxRate:
                                        row[16] === undefined? 0 : parseFloat(row[16].toString()),
                                    registrationNumber:
                                        row[17] == undefined? "": row[17].toString(),
                                    description:
                                        row[18] == undefined? "": row[18].toString(),
                                    sortOrder:
                                        row[19] === undefined? 0 : parseInt(row[19].toString()),
                                    proprietaryDrug:
                                        row[20] == undefined? "": row[20].toString(),
                                    isAntibiotics:
                                        row[21] === undefined? false : JSON.parse(row[21].toString()),
                                    isPrescriptionDrug:
                                        row[22] === undefined? false : JSON.parse(row[22].toString()),
                                    isNutraceutical:
                                        row[23] === undefined? false : JSON.parse(row[23].toString()),
                                    isSponsoredDrug:
                                        row[24] === undefined? false : JSON.parse(row[24].toString()),
                                    isPrescriptionDrugForChildren:
                                        row[25] === undefined? false : JSON.parse(row[25].toString()),
                                    isTraditionalHerbalDrug:
                                        row[26] === undefined? false : JSON.parse(row[26].toString()),
                                    isTraditionalDrugFormulation:
                                        row[27] === undefined? false : JSON.parse(row[27].toString()),
                                    isDrugContainerReturnRequest:
                                        row[28] === undefined? false : JSON.parse(row[28].toString()),
                                    isAllowZeroQuantity:
                                        row[29] === undefined? false : JSON.parse(row[29].toString()),
                                    isRadiolabeledDrug:
                                        row[30] === undefined? false : JSON.parse(row[30].toString()),
                                    pharmaceuticalFormulation:
                                        row[31] == undefined? "": optionPharmaceuticalFormulations.find(f => f.value === row[31].toString())?.label ?? "",
                                    origin:
                                        row[32] == undefined? "": row[32].toString(),
                                    scientificName:
                                        row[33] == undefined? "": row[33].toString(),
                                    scientificNameChildren:
                                        row[34] == undefined? "": row[34].toString(),
                                    dugStatus:
                                        row[35] == undefined? "": row[35].toString(),
                                    requirementUseDug:
                                        row[36] == undefined? "": row[36].toString(),
                                    pharmaceuticalDivision:
                                        row[37] == undefined? "": row[37].toString(),
                                    processingLossRate:
                                        row[38] == undefined? "": row[38].toString(),
                                    otherExpenses:
                                        row[39] === undefined? 0 : parseFloat(row[39].toString()),
                                    preparationMethod:
                                        row[40] == undefined? "": preparationMethods.find(f => f.value === row[40].toString())?.label ?? "",
                                    qualityStandards:
                                        row[41] == undefined? "": row[41].toString(),
                                    inactive:
                                        row[42] === undefined? false : JSON.parse(row[42].toString()),
                                    unitId: 
                                        row[43] === undefined? "": row[43].toString(), 
                                    isNewDrug: 
                                        row[44] === undefined?  false : JSON.parse(row[44].toString()),
                                    isInhalantDrug: 
                                        row[45] === undefined?  false : JSON.parse(row[45].toString()),
                                };

                                datas.value?.push(excelData);
                            });
                        }
                    }

                    loading.value = false;
                };

                fileReader.readAsArrayBuffer(selectedFile);
            }
        }

        const arrayBufferToUint8Array = (buffer: ArrayBuffer): Uint8Array => {
            const array = new Uint8Array(buffer);
            return array;
        };

        const toggle = () => {
            emit("toggle", isResult.value);
        };

        return {
            show,
            isResult,
            loading,
            title,
            selectedFileName,
            fileInput,
            datas,
            columnitemTypes,
            units,
            serviceGroupHeIns,
            itemGroups,
            itemLines,
            countries,
            optionPharmaceuticalFormulations,
            preparationMethods,
            handleCancel,
            handleSave,
            openFilePicker,
            handleFileChange,
        };
    },
});
</script>

<style>
td.column-center,
th.column-header-center {
    text-align: center !important;
}
</style>

<style scoped>
.centered-checkbox {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>