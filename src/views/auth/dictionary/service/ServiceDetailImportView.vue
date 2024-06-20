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
                    <!-- <a-table
                        class="ant-table-striped"
                        size="middle"
                        bordered
                        :columns="columnServices"
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
                        </template>
                    </a-table> -->
                    <DxDataGrid
                        :allow-column-reordering="true"
                        :data-source="datas"
                        :show-borders="true"
                        :hover-state-enabled="true"
                    >
                        <DxColumn
                            caption="Mã DV"
                            data-field="code"
                            data-type="string"
                            :width="100"
                            :visible="true"
                            :allow-editing="false"
                        />
                        <DxColumn
                            caption="Tên DV"
                            data-field="name"
                            data-type="string"
                            :width="250"
                            :visible="true"
                            :allow-editing="false"
                        />
                        <DxColumn
                            caption="Mã BH"
                            data-field="heInCode"
                            data-type="string"
                            :width="100"
                            :visible="true"
                            :allow-editing="false"
                        />
                        <DxColumn
                            caption="Tên BH"
                            data-field="heInName"
                            data-type="string"
                            :width="250"
                            :visible="true"
                            :allow-editing="false"
                        />
                        <DxColumn
                            caption="ĐVT"
                            data-field="serviceUnitCode"
                            data-type="string"
                            :width="100"
                            :visible="true"
                            :allow-editing="false"
                        />
                        <DxColumn
                            caption="Nhóm BH"
                            data-field="serviceGroupHeInCode"
                            data-type="string"
                            :width="100"
                            :visible="true"
                            :allow-editing="false"
                        />
                        <DxColumn
                            caption="Nhóm DV"
                            data-field="serviceGroupCode"
                            data-type="string"
                            :width="100"
                            :visible="true"
                            :allow-editing="false"
                        />
                        <DxColumn
                            caption="Loại PTTT"
                            data-field="surgicalProcedureTypeCode"
                            data-type="string"
                            :width="100"
                            :visible="true"
                            :allow-editing="false"
                        />
                        <DxColumn
                            caption="Đối tượng BN"
                            data-field="patientType"
                            data-type="string"
                            :width="100"
                            :visible="true"
                            :allow-editing="false"
                        />
                        <DxColumn
                            caption="Đơn giá cũ"
                            data-field="oldUnitPrice"
                            data-type="number"
                            :width="120"
                            :visible="true"
                            :allow-editing="false"
                        />
                        <DxColumn
                            caption="Đơn giá mới"
                            data-field="newUnitPrice"
                            data-type="number"
                            :width="120"
                            :visible="true"
                            :allow-editing="false"
                        />
                        <DxColumn
                            caption="Tỷ lệ TT"
                            data-field="paymentRate"
                            data-type="number"
                            :width="120"
                            :visible="true"
                            :allow-editing="false"
                        />
                        <DxColumn
                            caption="Trần BH"
                            data-field="ceilingPrice"
                            data-type="number"
                            :width="120"
                            :visible="true"
                            :allow-editing="false"
                        />
                        <DxColumn
                            caption="Ngày áp dụng"
                            data-field="executionTimeString"
                            data-type="date"
                            :width="120"
                            :visible="true"
                            :allow-editing="false"
                        />
                        <DxColumn
                            caption="Số thự tự"
                            data-field="sortOrder"
                            data-type="number"
                            :width="100"
                            :visible="true"
                            :allow-editing="false"
                        />
                    </DxDataGrid>
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
import { ServiceImportModel } from "@/models";
import { serviceService } from "@/services";
import { parseDate } from "devextreme/localization";
import { DxDataGrid, DxColumn } from "devextreme-vue/data-grid";

export default defineComponent({
    name: "ServiceDetailImportView",
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
        const title = ref<string>(
            "Nhập dữ liệu dịch vụ kỹ thuật từ file excel"
        );
        const selectedFileName = ref<string>();
        const fileInput = ref<HTMLInputElement | null>(null);
        const show = computed(() => props.visible);
        const datas = ref<ServiceImportModel[]>([]);

        const handleCancel = () => {
            toggle();
        };

        const handleSave = async () => {
            loading.value = true;

            console.log(JSON.stringify(datas.value));

            let isImport = await serviceService.import(datas.value);
            isResult.value = isImport.data.isSucceeded;

            loading.value = false;

            if (isImport.data.isSucceeded) {
                console.log("isSuccessed: " + isImport.data.isSucceeded);
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

        function handleFileServiceChange(event: Event) {
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

                            let dataExcels = json.slice(2); // Lấy dữ liệu từ dòng thứ 3 trở đi

                            dataExcels.forEach((row) => {
                                const excelData: ServiceImportModel = {
                                    code:
                                        row[0] == undefined
                                            ? ""
                                            : row[0].toString(),
                                    name:
                                        row[1] == undefined
                                            ? ""
                                            : row[1].toString(),
                                    heInCode:
                                        row[2] == undefined
                                            ? ""
                                            : row[2].toString(),
                                    heInName:
                                        row[3] == undefined
                                            ? ""
                                            : row[3].toString(),
                                    sortOrder:
                                        row[4] === undefined
                                            ? 0
                                            : parseInt(row[4].toString()),
                                    inactive:
                                        row[5] === undefined
                                            ? false
                                            : JSON.parse(row[5].toString()),
                                    serviceUnitCode:
                                        row[6] == undefined
                                            ? ""
                                            : row[6].toString(),
                                    serviceGroupCode:
                                        row[7] == undefined
                                            ? ""
                                            : row[7].toString(),
                                    serviceGroupHeInCode:
                                        row[8] == undefined
                                            ? ""
                                            : row[8].toString(),
                                    surgicalProcedureTypeCode:
                                        row[9] === null || row[9] === undefined
                                            ? ""
                                            : row[9].toString(),
                                    patientTypeCode:
                                        row[10] === undefined
                                            ? undefined
                                            : row[10].toString(),
                                    oldUnitPrice:
                                        row[11] === undefined
                                            ? 0
                                            : parseFloat(row[11].toString()),
                                    newUnitPrice:
                                        row[12] === undefined
                                            ? 0
                                            : parseFloat(row[12].toString()),
                                    paymentRate:
                                        row[13] === undefined
                                            ? 0
                                            : parseFloat(row[13].toString()),
                                    ceilingPrice:
                                        row[14] === undefined
                                            ? 0
                                            : parseFloat(row[14].toString()),
                                    executionTime:
                                        row[15] === undefined
                                            ? undefined
                                            : new Date(row[15].toString()),
                                    // : parseDate(
                                    //       row[15].toString(),
                                    //       "dd/MM/yyyy"
                                    //   ),
                                    executionRoomCode:
                                        row[16] === undefined
                                            ? ""
                                            : row[16].toString(),
                                };

                                datas.value?.push(excelData);
                            });

                            console.log(datas.value);
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
            handleCancel,
            handleSave,
            openFilePicker,
            handleFileChange,
        };
    },
    components: {
        DxDataGrid,
        DxColumn,
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