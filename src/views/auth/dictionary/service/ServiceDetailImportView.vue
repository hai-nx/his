<template>
  <a-modal
    :visible="show"
    :title="title"
    @cancel="handleCancel"
    :mask-closable="false"
    width="1000px"
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
        <input />
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
    const title = ref<string>("Nhập dữ liệu dịch vụ kỹ thuật từ file excel");
    const selectedFileName = ref<string>();
    const fileInput = ref<HTMLInputElement | null>(null);
    const show = computed(() => props.visible);
    const datas = ref<ServiceImportModel[]>([]);

    const handleCancel = () => {
      toggle();
    };

    const handleSave = () => {
      toggle();
    };

    const openFilePicker = () => {
      if (fileInput.value) {
        fileInput.value.click();
      }
    };

    const handleFileChange = (event: Event) => {
      loading.value = true;

      const target = event.target as HTMLInputElement;
      if (target.files && target.files.length > 0) {
        const selectedFile = target.files[0];
        selectedFileName.value = selectedFile.name;

        const fileReader = new FileReader();
        fileReader.onload = (e) => {
          const result = e.target?.result;
          if (result instanceof ArrayBuffer) {
            const arrayBuffer = arrayBufferToUint8Array(result);
            const workbook = XLSX.read(arrayBuffer, { type: "array" });
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
                  code: row[0] == undefined ? "" : row[0].toString(),
                  name: row[1] == undefined ? "" : row[1].toString(),
                  heInCode: row[2] == undefined ? "" : row[2].toString(),
                  heInName: row[3] == undefined ? "" : row[3].toString(),
                  softOrder:
                    row[4] === undefined ? 0 : parseInt(row[4].toString()),
                  inactive:
                    row[5] === undefined
                      ? false
                      : JSON.parse(row[5].toString()),
                  serviceUnitCode: row[6] == undefined ? "" : row[6].toString(),
                  serviceGroupCode:
                    row[7] == undefined ? "" : row[7].toString(),
                  serviceGroupHeInCode:
                    row[8] == undefined ? "" : row[8].toString(),
                  surgicalProcedureTypeCode:
                    row[9] === null || row[9] === undefined
                      ? ""
                      : row[9].toString(),
                  heInPrice:
                    row[10] === undefined ? 0 : parseFloat(row[10].toString()),
                  servicePrice:
                    row[11] === undefined ? 0 : parseFloat(row[11].toString()),
                  peoplePrice:
                    row[12] === undefined ? 0 : parseFloat(row[12].toString()),
                  paymentRate:
                    row[13] === undefined ? 0 : parseFloat(row[13].toString()),
                  ceilingPrice:
                    row[14] === undefined ? 0 : parseFloat(row[14].toString()),
                };

                datas.value?.push(excelData);
              });

              console.log(datas.value);
            }
          }
        };

        fileReader.readAsArrayBuffer(selectedFile);
      }

      loading.value = false;
    };

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
});
</script>