<template>
    <DxPopup
        @hidden="handleCancel"
        :visible="popupVisible"
        :width="1280"
        :height="650"
        :hide-on-outside-click="true"
        :show-close-button="true"
        title="Nhập kết quả xét nghiệm"
    >
        <DxDataGrid
            :allow-column-reordering="true"
            :data-source="detailSources"
            :show-borders="true"
            :hover-state-enabled="true"
            key-expr="id"
        >
            <DxColumn
                caption="Tên dịch vụ"
                data-field="serviceName"
                :visible="true"
                data-type="string"
                :group-index="0"
            />
            <DxColumn
                caption="Mã xét nghiệm"
                data-field="serviceResultIndiceCode"
                :visible="true"
                data-type="string"
            />
            <DxColumn
                caption="Tên xét nghiệm"
                data-field="serviceResultIndiceName"
                :visible="true"
                data-type="string"
            />
            <DxColumn
                caption="Kết quả"
                data-field="result"
                :visible="true"
                data-type="string"
            />
            <DxColumn
                caption="Bình thường"
                data-field="normalRange"
                :visible="true"
                data-type="string"
            />
            <DxColumn
                caption="Máy xét nghiệm"
                data-field="testingMachine"
                :visible="true"
                data-type="string"
            />
        </DxDataGrid>
    </DxPopup>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed, watch, PropType } from "vue";
import { DxPopup } from "devextreme-vue/popup";
import { ServiceRequestModel, ServiceResultDataModel } from "@/models";
import { DxDataGrid, DxColumn } from "devextreme-vue/data-grid";

export default defineComponent({
    name: "TestingDetailView",
    props: {
        visible: {
            type: Boolean,
            required: true,
        },
        masterSourceProp: {
            type: Object as PropType<ServiceRequestModel>,
        },
        detailSourceProp: {
            type: Object as PropType<ServiceResultDataModel[]>,
        },
    },
    setup(props, { emit }) {
        const popupVisible = computed(() => props.visible);
        const masterSource = computed(() => props.masterSourceProp);
        const detailSources = computed(() => props.detailSourceProp);

        const result = ref<boolean>();

        watch(popupVisible, async (value) => {
            // if (value) {
            // }
        });

        const toggle = function () {
            emit("toggle", result);
        };

        const handleCancel = function () {
            toggle();
        };

        return {
            popupVisible,
            masterSource,
            detailSources,

            handleCancel,
        };
    },
    components: {
        DxPopup,
        DxDataGrid,
        DxColumn,
    },
});
</script>