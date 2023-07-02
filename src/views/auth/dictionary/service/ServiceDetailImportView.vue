<template>
  <a-modal
    :visible="show"
    :title="title"
    @cancel="handleCancel"
    :mask-closable="false"
    width="1000px"
    height="720px"
  >
    <div class="class">
      <a-input />
    </div>
  </a-modal>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from "vue";

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

    // const proRef = ref({
    //   isResult: ref<Boolean>(false),
    //   loading: ref<Boolean>(false),
    //   title: ref<string>("Nhập dữ liệu dịch vụ ký thuật từ file excel"),
    //   erro: ref<string>(),
    // });

    return {
      //   ...proRef,
    };
  },
});
</script>