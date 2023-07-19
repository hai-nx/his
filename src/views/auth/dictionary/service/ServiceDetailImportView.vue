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
import { ServiceImportModel } from "@/models";
import { serviceService } from "@/services";

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

        const columnServices = ref([
            {
                title: "Mã DV",
                key: "code",
                dataIndex: "code",
                width: 100,
                className: "column-header-center",
            },
            {
                title: "Tên DV",
                key: "name",
                dataIndex: "name",
                width: 250,
                className: "column-header-center",
            },
            {
                title: "Mã BH",
                key: "heInCode",
                dataIndex: "heInCode",
                width: 100,
                className: "column-header-center",
            },
            {
                title: "Tên BH",
                key: "heInName",
                dataIndex: "heInName",
                width: 250,
                className: "column-header-center",
            },
            {
                title: "ĐVT",
                key: "serviceUnitCode",
                dataIndex: "serviceUnitCode",
                width: 100,
                className: "column-header-center",
            },
            {
                title: "Nhóm BH",
                key: "serviceGroupHeInCode",
                dataIndex: "serviceGroupHeInCode",
                width: 100,
                className: "column-header-center",
            },
            {
                title: "Nhóm DV",
                key: "serviceGroupCode",
                dataIndex: "serviceGroupCode",
                width: 100,
                className: "column-header-center",
            },
            {
                title: "Loại PTTT",
                key: "surgicalProcedureTypeCode",
                dataIndex: "surgicalProcedureTypeCode",
                width: 100,
                className: "column-header-center",
            },
            {
                title: "Giá BH",
                key: "heInPrice",
                dataIndex: "heInPrice",
                width: 120,
                className: "column-header-center",
            },
            {
                title: "Giá DV",
                key: "servicePrice",
                dataIndex: "servicePrice",
                width: 120,
                className: "column-header-center",
            },
            {
                title: "Giá VP",
                key: "peoplePrice",
                dataIndex: "peoplePrice",
                width: 120,
                className: "column-header-center",
            },
            {
                title: "Tỷ lệ TT",
                key: "paymentRate",
                dataIndex: "paymentRate",
                width: 120,
                className: "column-header-center",
            },
            {
                title: "Trần BH",
                key: "ceilingPrice",
                dataIndex: "ceilingPrice",
                width: 120,
                className: "column-header-center",
            },
            {
                title: "Ngày áp dụng",
                key: "executionTimeString",
                dataIndex: "executionTimeString",
                width: 120,
                className: "column-header-center",
            },
            {
                title: "Phòng TT",
                key: "executionRoomCode",
                dataIndex: "executionRoomCode",
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
            {
                title: "Thứ tự",
                key: "softOrder",
                dataIndex: "softOrder",
                width: 120,
                className: "column-header-center",
            },
        ]);

        const handleCancel = () => {
            toggle();
        };

        const handleSave = async () => {
            loading.value = true;

            let isImport = await serviceService.import(datas.value);
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

                            // let headerExcels = json[1].map((item) => String(item)); // Dòng thứ 2 làm header
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
                                    heInPrice:
                                        row[10] === undefined
                                            ? 0
                                            : parseFloat(row[10].toString()),
                                    servicePrice:
                                        row[11] === undefined
                                            ? 0
                                            : parseFloat(row[11].toString()),
                                    peoplePrice:
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
                                    // executionTime:
                                    //   row[15] === undefined
                                    //     ? null
                                    //     : dayjs(row[15].toString(), "DD-MM-YYYY HH:mm:ss"),
                                    executionTimeString:
                                        row[15] === undefined
                                            ? null
                                            : row[15].toString(),
                                    executionRoomCode:
                                        row[16] === undefined
                                            ? ""
                                            : row[16].toString(),
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
            columnServices,
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