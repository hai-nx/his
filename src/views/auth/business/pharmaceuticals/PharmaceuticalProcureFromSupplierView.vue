<template>
    <form>
        <div class="container">
            <a-modal
                :visible="show"
                :title="title"
                @cancel="handleCancel"
                width="1200px"
                :mask-closable="false"
            >
                <a-tabs
                    class="medicine-card-body"
                    v-model:activeKey="activeKey"
                    type="card"
                >
                    <a-tab-pane key="1" tab="Thông tin chung"></a-tab-pane>
                    <a-tab-pane key="2" tab="Hóa đơn"></a-tab-pane>
                </a-tabs>
            </a-modal>
        </div>
    </form>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from "vue";

export default defineComponent({
    name: "PharmaceuticalProcureFromSupplierView",
    props: {
        visible: {
            type: Boolean,
            required: true,
        },
        // data: {
        //     type: Object as PropType<MedicineTypeModel>,
        // },
    },
    setup(props, { emit }) {
        const title = ref<string>("Nhập thuốc từ nhà cung cấp");
        const loading = ref<boolean>(false);
        const result = ref<boolean>(false);
        const activeKey = ref<string>("1");

        const show = computed(() => props.visible);
        const toggle = function () {
            emit("toggle", result);
        };

        watch(show, (value) => {
            if (value) {
                result.value = false;
                loading.value = true;
                loading.value = false;
            }
        });

        return {
            title,
            loading,
            result,
            activeKey,
            show,
        };
    },
});
</script>

<style scoped>
.medicine-card-body {
    margin: -24px;
    max-height: 650px;
    height: 650px;
    overflow-y: auto;
}
</style>
