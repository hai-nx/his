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
                        :columns="columnResultIndices"
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
import { ServiceResultIndiceModel } from "@/models";
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
            "Nhập dữ liệu kết quả dịch vụ kỹ thuật từ file excel"
        );
        const selectedFileName = ref<string>();
        const fileInput = ref<HTMLInputElement | null>(null);
        const show = computed(() => props.visible);
        const datas = ref<ServiceResultIndiceModel[]>([]);

        const columnResultIndices = reactive([
            {
                title: "Mã DV",
                key: "serviceCode",
                dataIndex: "serviceCode",
                width: 100,
                className: "column-header-center",
            },
            {
                title: "Mã chỉ số",
                key: "code",
                dataIndex: "code",
                width: 100,
                className: "column-header-center",
            },
            {
                title: "Tên chỉ số",
                key: "name",
                dataIndex: "name",
                width: 250,
                className: "column-header-center",
            },
            {
                title: "Đơn vị",
                key: "unit",
                dataIndex: "unit",
                width: 100,
                className: "column-header-center",
            },
            {
                title: "TS nam từ",
                key: "maleFrom",
                dataIndex: "maleFrom",
                width: 120,
                className: "column-header-center",
            },
            {
                title: "TS nam đến",
                key: "maleTo",
                dataIndex: "maleTo",
                width: 120,
                className: "column-header-center",
            },
            {
                title: "TS nữ từ",
                key: "femaleFrom",
                dataIndex: "femaleFrom",
                width: 120,
                className: "column-header-center",
            },
            {
                title: "TS nữ đến",
                key: "femaleTo",
                dataIndex: "femaleTo",
                width: 120,
                className: "column-header-center",
            },
            {
                title: "Thứ tự",
                key: "sortOrder",
                dataIndex: "sortOrder",
                width: 100,
                className: "column-header-center",
            },
        ]);

        const handleCancel = () => {
            toggle();
        };

        const handleSave = async () => {
            // loading.value = true;

            console.log(JSON.stringify(datas.value));

            let isImport = await serviceService.importServiceResultIndexs(
                datas.value
            );
            isResult.value = isImport.data.isSucceeded;

            // loading.value = false;

            if (isImport.data.isSucceeded) {
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
                                const excelData: ServiceResultIndiceModel = {
                                    serviceCode:
                                        row[0] == undefined
                                            ? ""
                                            : row[0].toString(),
                                    code:
                                        row[1] == undefined
                                            ? ""
                                            : row[1].toString(),
                                    name:
                                        row[2] == undefined
                                            ? ""
                                            : row[2].toString(),
                                    unit:
                                        row[3] == undefined
                                            ? ""
                                            : row[3].toString(),
                                    maleFrom:
                                        row[4] === undefined
                                            ? 0
                                            : parseFloat(row[4].toString()),
                                    maleTo:
                                        row[5] === undefined
                                            ? 0
                                            : parseFloat(row[5].toString()),
                                    femaleFrom:
                                        row[6] === undefined
                                            ? 0
                                            : parseFloat(row[6].toString()),
                                    femaleTo:
                                        row[7] === undefined
                                            ? 0
                                            : parseFloat(row[7].toString()),
                                    sortOrder:
                                        row[8] === undefined
                                            ? 0
                                            : parseInt(row[8].toString()),
                                    inactive:
                                        row[9] === undefined
                                            ? false
                                            : JSON.parse(row[9].toString()),
                                    serviceId: undefined,
                                    id: null,
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
            columnResultIndices,
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