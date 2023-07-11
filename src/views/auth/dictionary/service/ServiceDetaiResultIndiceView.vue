<template>
  <a-modal
    :visible="show"
    :title="title"
    @cancel="handleCancel"
    :mask-closable="false"
    width="800px"
    height="720px"
    class="modal_container"
  >
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="row">
            <div class="col-md-3">
              <label>Mã trị số</label>
            </div>
            <div class="col-md-9">
              <a-input v-model:value="resultIndice.code" />
            </div>
          </div>
          <div class="row mt-1">
            <div class="col-md-3">
              <label>Tên trị số</label>
            </div>
            <div class="col-md-9">
              <a-input v-model:value="resultIndice.name" />
            </div>
          </div>
          <div class="row mt-1">
            <div class="col-md-3">
              <label>Đơn vị</label>
            </div>
            <div class="col-md-9">
              <a-input v-model:value="resultIndice.unit" />
            </div>
          </div>
          <div class="row mt-1">
            <div class="col-md-3">
              <label>Thứ tự</label>
            </div>
            <div class="col-md-9">
              <a-input-number
                class="w-100"
                v-model:value="resultIndice.sortOrder"
              />
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="row">
            <div class="col-md-4">
              <label>Trị số nam từ</label>
            </div>
            <div class="col-md-8">
              <a-input-number
                class="w-100"
                v-model:value="resultIndice.maleFrom"
              />
            </div>
          </div>
          <div class="row mt-1">
            <div class="col-md-4">
              <label>Trị số nam đến</label>
            </div>
            <div class="col-md-8">
              <a-input-number
                class="w-100"
                v-model:value="resultIndice.maleTo"
              />
            </div>
          </div>
          <div class="row mt-1">
            <div class="col-md-4">
              <label>Trị số nữ từ</label>
            </div>
            <div class="col-md-8">
              <a-input-number
                class="w-100"
                min="0"
                v-model:value="resultIndice.femaleFrom"
              />
            </div>
          </div>
          <div class="row mt-1">
            <div class="col-md-4">
              <label>Trị số nữ đến</label>
            </div>
            <div class="col-md-8">
              <a-input-number
                class="w-100"
                min="0"
                v-model:value="resultIndice.femaleTo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <template #footer>
      <a-button key="submit" type="primary" @click.prevent="handleSave">
        Lưu</a-button
      >
      <a-button @click="handleCancel">Bỏ qua</a-button>
    </template>
  </a-modal>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch, PropType, reactive } from "vue";
import { ServiceResultIndiceModel } from "@/models";

export default defineComponent({
  name: "ServiceDetaiResultIndiceView",
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
    data: {
      type: Object as PropType<ServiceResultIndiceModel>,
    },
  },
  setup(props, { emit }) {
    const isResult = ref<boolean>(false);
    const title = ref<string>("Trị số");
    let resultIndice = reactive<ServiceResultIndiceModel>({
      id: undefined,
      code: "",
      name: "",
      unit: "",
      maleFrom: null,
      maleTo: null,
      femaleFrom: null,
      femaleTo: null,
      serviceId: undefined,
      serviceCode: null,
      inactive: false,
    });

    const show = computed(() => props.visible);

    const handleSave = () => {
      emit("handleSaveResultIndice", resultIndice);
      emit("toggle", isResult.value);
    };

    const handleCancel = () => {
      toggle();
    };

    const toggle = () => {
      emit("toggle", isResult.value);
    };

    const reset = () => {
      resultIndice.id = undefined;
      resultIndice.code = "";
      resultIndice.name = "";
      resultIndice.unit = "";
      resultIndice.maleFrom = null;
      resultIndice.maleTo = null;
      resultIndice.femaleFrom = null;
      resultIndice.femaleTo = null;
      resultIndice.serviceId = undefined;
      resultIndice.serviceCode = null;
      resultIndice.sortOrder = undefined;
      resultIndice.inactive = false;
    };

    const setData = (data: ServiceResultIndiceModel) => {
      resultIndice.id = data.id;
      resultIndice.code = data.code;
      resultIndice.name = data.name;
      resultIndice.unit = data.unit;
      resultIndice.maleFrom = data.maleFrom;
      resultIndice.maleTo = data.maleTo;
      resultIndice.femaleFrom = data.femaleFrom;
      resultIndice.femaleTo = data.femaleTo;
      resultIndice.serviceId = data.serviceId;
      resultIndice.serviceCode = data.serviceCode;
      resultIndice.sortOrder = data.sortOrder;
      resultIndice.inactive = data.inactive;
    };

    watch(show, (value) => {
      if (value && props.data !== undefined) {
        reset();
        setData(props.data);
      }
    });

    return {
      show,
      title,
      isResult,
      resultIndice,
      handleSave,
      handleCancel,
    };
  },
});
</script>