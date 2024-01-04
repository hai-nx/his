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
        <div class="content">
            <DxLabel :visible="true" :text="'ádasdasdadsadas'"
                >ádadsasd</DxLabel
            >
            <label class="grid-column-1"> Mã bệnh nhân: </label>
            <label class="grid-column-2 bold">
                {{ masterSource?.patientCode }}
            </label>
            <label class="grid-column-3"> Mã điều trị: </label>
            <label class="grid-column-4 bold">
                {{ masterSource?.patientCode }}
            </label>
            <label class="grid-column-5"> Tên bệnh nhân: </label>
            <label class="grid-column-6 bold">
                {{ masterSource?.patientName }}
            </label>

            <label class="grid-column-1"> Số phiếu: </label>
            <label class="grid-column-2 bold">
                {{ masterSource?.serviceRequestCode }}
            </label>
            <label class="grid-column-3"> Barcode: </label>
            <label class="grid-column-4 bold">
                {{ masterSource?.barcode }}
            </label>
            <label class="grid-column-5"> Thời gian chỉ định: </label>
            <label class="grid-column-6">
                {{ masterSource?.serviceRequestDate }}
            </label>

            <label class="grid-column-1"> Bác sỹ chỉ định: </label>
            <label class="grid-column-2">
                {{ masterSource?.userName }}
            </label>
            <label class="grid-column-3"> Khoa chỉ định: </label>
            <label class="grid-column-4">
                {{ masterSource?.departmentName }}
            </label>
            <label class="grid-column-5"> Thời gian trả KQ: </label>
            <label class="grid-column-6">
                {{ masterSource?.serviceRequestDate }}
            </label>

            <label class="grid-column-1"> Chẩn đoán: </label>
            <label class="grid-columnspan-2-7">
                {{ masterSource?.icdName }}
            </label>

            <DxDataGrid
                class="grid-columnspan-1-7"
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
        </div>
    </DxPopup>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed, watch, PropType } from "vue";
import { DxPopup } from "devextreme-vue/popup";
import { ServiceRequestModel, ServiceResultDataModel } from "@/models";
import { DxDataGrid, DxColumn } from "devextreme-vue/data-grid";
import { DxLabel } from "devextreme-vue/chart";

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

        DxLabel,
    },
});
</script>

<style scoped>
.content {
    display: grid;
    grid-template-columns: repeat(3, auto minmax(50px, 1fr));
    grid-row-gap: 5px;
    grid-column-gap: 10px;
    align-items: center;
}

.grid-column-1 {
    grid-column: 1/2;
}

.grid-column-2 {
    grid-column: 2/3;
}

.grid-column-3 {
    grid-column: 3/4;
}

.grid-column-4 {
    grid-column: 4/5;
}

.grid-column-5 {
    grid-column: 5/6;
}

.grid-column-6 {
    grid-column: 6/7;
}

.grid-columnspan-2-7 {
    grid-column: 2/7;
}
.grid-columnspan-1-7 {
    grid-column: 1/7;
}
</style>