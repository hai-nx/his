<template>
    <DxPopup
        @hidden="handleCancel"
        :visible="popupVisible"
        :width="1280"
        :height="650"
        :hide-on-outside-click="false"
        :show-close-button="true"
        :drag-enabled="true"
        title="Nhập kết quả xét nghiệm"
    >
        <div class="grid-root row-1">
            <div class="content">
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
            </div>

            <div class="row-2">
                <DxDataGrid
                    :allow-column-reordering="true"
                    :data-source="detailSources"
                    :show-borders="true"
                    :hover-state-enabled="true"
                    key-expr="id"
                >
                    <DxEditing
                        :allow-updating="true"
                        :allow-adding="false"
                        :allow-deleting="false"
                        mode="cell"
                    />
                    <!-- 'row' | 'batch' | 'cell' | 'form' | 'popup' -->

                    <DxColumn
                        caption="Tên dịch vụ"
                        data-field="serviceName"
                        :visible="true"
                        data-type="string"
                        :group-index="0"
                        :allow-editing="false"
                    />
                    <DxColumn
                        caption="Mã xét nghiệm"
                        data-field="serviceResultIndiceCode"
                        :visible="true"
                        data-type="string"
                        :allow-editing="false"
                    />
                    <DxColumn
                        caption="Tên xét nghiệm"
                        data-field="serviceResultIndiceName"
                        :visible="true"
                        data-type="string"
                        :allow-editing="false"
                    />
                    <DxColumn
                        caption="Kết quả"
                        data-field="result"
                        :visible="true"
                        :allow-editing="true"
                        data-type="number"
                        alignment="left"
                        format="#,##0.##"
                        edit-cell-template="result-edit-cell-template"
                    />
                    <DxColumn
                        caption="Bình thường"
                        data-field="normalRange"
                        :visible="true"
                        data-type="string"
                        :allow-editing="false"
                    />
                    <DxColumn
                        caption="Máy xét nghiệm"
                        data-field="testingMachine"
                        :visible="true"
                        data-type="string"
                        :allow-editing="false"
                    />
                    <template #result-edit-cell-template="{ data: cell }">
                        <DxTextBox
                            v-if="!cell.data.isNumber"
                            v-model="cell.data.result"
                        />
                        <DxNumberBox
                            v-else
                            format="#,##0.##"
                            v-model="cell.data.result"
                            :twoWayBindingEnabled="false"
                        />
                    </template>
                </DxDataGrid>
            </div>

            <div class="row-3 footer">
                <div class="footer-Col-1"></div>
                <div class="footer-Col-2">
                    <DxButton
                        v-if="masterSource?.status === 1"
                        class="btn-DxButton"
                        text="Tiếp nhận BP"
                        :width="120"
                        type="default"
                        styling-mode="outlined"
                    />
                    <DxButton
                        v-if="masterSource?.status === 2"
                        class="btn-DxButton"
                        text="Hủy tiếp nhận"
                        :width="120"
                        type="danger"
                        styling-mode="outlined"
                    />
                    <DxButton
                        v-if="masterSource?.status === 2"
                        class="btn-DxButton"
                        text="Trả kết quả"
                        :width="120"
                        type="default"
                        styling-mode="outlined"
                    />
                    <DxButton
                        v-if="masterSource?.status === 4"
                        class="btn-DxButton"
                        text="Hủy trả KQ"
                        :width="120"
                        type="danger"
                        styling-mode="outlined"
                    />
                </div>
            </div>
        </div>
    </DxPopup>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed, watch, PropType } from "vue";
import { DxPopup } from "devextreme-vue/popup";
import { ServiceRequestModel, ServiceResultDataModel } from "@/models";
import {
    DxDataGrid,
    DxColumn,
    DxLookup,
    DxEditing,
} from "devextreme-vue/data-grid";
import { DxLabel } from "devextreme-vue/chart";
import { DxTextBox } from "devextreme-vue/text-box";
import DxNumberBox from "devextreme-vue/number-box";
import DxButton from "devextreme-vue/button";

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
        // detailSourceProp: {
        //     type: Object as PropType<ServiceResultDataModel[]>,
        // },
    },
    setup(props, { emit }) {
        const popupVisible = computed(() => props.visible);
        const masterSource = computed(() => props.masterSourceProp);
        const detailSources = computed(
            () => props.masterSourceProp?.serviceResultDatas
        );

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
        DxEditing,
        // DxLookup,
        DxNumberBox,
        DxTextBox,
        DxButton,

        // DxLabel,
    },
});
</script>

<style scoped>
.grid-root {
    display: grid;
    height: 100%;
    grid-template-rows: auto 1fr 30px;
    grid-row-gap: 15px;
}

.content {
    display: grid;
    grid-template-columns: repeat(3, auto minmax(50px, 1fr));
    grid-row-gap: 5px;
    grid-column-gap: 10px;
    align-items: center;
}

.footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
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

.footer-Col-2 {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
}

.footer-Col-2 {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
}

.btn-DxButton {
    width: 120px;
    margin: 0px 0px 0px 10px;
}
</style>