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
              <a-input v-model="resultIndice.code" />
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
              <a-input-number class="w-100" :value="resultIndice.sortOrder" />
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="row">
            <div class="col-md-4">
              <label>Trị số nam từ</label>
            </div>
            <div class="col-md-8">
              <a-input-number class="w-100" :value="resultIndice.maleFrom" />
            </div>
          </div>
          <div class="row mt-1">
            <div class="col-md-4">
              <label>Trị số nam đến</label>
            </div>
            <div class="col-md-8">
              <a-input-number class="w-100" :value="resultIndice.maleFrom" />
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
                :value="resultIndice.femaleFrom"
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
                :value="resultIndice.femaleTo"
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
      maleFrom: 0,
      maleTo: 0,
      femaleFrom: 0,
      femaleTo: 0,
      serviceId: undefined,
      serviceCode: null,
      inactive: false,
    });

    const show = computed(() => props.visible);

    const handleSave = () => {
      console.log(resultIndice);

      emit("handleSaveResultIndice", resultIndice);
      emit("toggle", isResult.value);
    };

    const handleCancel = () => {
      toggle();
    };

    const toggle = () => {
      emit("toggle", isResult.value);
    };
    watch(show, (value) => {
      if (value) {
        console.log(props.data);
        if (props.data !== undefined) {
          resultIndice = props.data;
        }
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