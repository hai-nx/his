<template>
    <div class="layout">
        <div class="header">
            <div class="procedure-room">
                <label>Phòng thực hiện:</label>
                <a-select> </a-select>
            </div>
            <div class="search">
                <label>Từ ngày:</label>
                <a-date-picker
                    placeholder="dd/MM/yyyy HH:mm:ss"
                    format="DD/MM/YYYY HH:mm:ss"
                    v-model:value="fromDate"
                />
                <label>Đến ngày:</label>
                <a-date-picker
                    placeholder="dd/MM/yyyy HH:mm:ss"
                    format="DD/MM/YYYY HH:mm:ss"
                    v-model:value="toDate"
                />
                <a-button type="primary" @click="handleLoad">
                    <i class="bi-arrow-clockwise"></i>
                    <label>Cập nhật</label>
                </a-button>
            </div>
        </div>

        <!-- Nội dung tại đây -->
        <div class="content">
            <div class="content-row">
                <DxDataGrid
                    :allow-column-reordering="true"
                    :data-source="itemSources"
                    :show-borders="true"
                    :hover-state-enabled="true"
                    key-expr="id"
                    @selection-changed="onSelectionChanged"
                    @content-ready="selectFirstRow"
                    :selected-row-keys="itemSourcesSelectedRowKeys"
                >
                    <DxSelection mode="single" />
                    <DxScrolling row-rendering-mode="virtual" />
                    <DxPaging :page-size="10" />
                    <DxPager
                        :visible="true"
                        :allowed-page-sizes="pageSizes"
                        :display-mode="displayMode"
                        :show-page-size-selector="showPageSizeSelector"
                        :show-info="showInfo"
                        :show-navigation-buttons="showNavButtons"
                    />
                    <DxColumn
                        caption="Số phiếu"
                        data-field="serviceRequestCode"
                        :visible="true"
                        data-type="string"
                    />
                    <DxColumn
                        caption="Barcode"
                        data-field="barcode"
                        :visible="true"
                        data-type="string"
                    />
                    <DxColumn
                        caption="Mã bệnh nhân"
                        data-field="patientCode"
                        :visible="true"
                        data-type="string"
                    />
                    <DxColumn
                        caption="Mã điều trị"
                        data-field="treatmentCode"
                        :visible="true"
                        data-type="string"
                    />
                    <DxColumn
                        caption="Tên bệnh nhân"
                        data-field="patientName"
                        :visible="true"
                        data-type="string"
                    />
                    <DxColumn
                        caption="Khoa"
                        data-field="departmentName"
                        :visible="true"
                        data-type="string"
                    />
                    <DxColumn
                        caption="Phòng"
                        data-field="roomName"
                        :visible="true"
                        data-type="string"
                    />
                    <DxColumn
                        caption="TG chỉ định"
                        data-field="serviceRequestDate"
                        :visible="true"
                        data-type="date"
                    />
                    <DxColumn
                        caption="BS chỉ định"
                        data-field="userName"
                        :visible="true"
                        data-type="string"
                    />
                    <DxColumn
                        caption="TG thực hiện"
                        data-field="executeDate"
                        :visible="true"
                        data-type="date"
                    />
                    <DxColumn
                        caption="BS thực hiện"
                        data-field="executeUserName"
                        :visible="true"
                        data-type="string"
                    />
                    <DxColumn
                        caption="TG trả KQ"
                        data-field="resultDate"
                        :visible="true"
                        data-type="date"
                    />
                    <DxColumn
                        caption="BS trả KQ"
                        data-field="resultUserName"
                        :visible="true"
                        data-type="string"
                    />
                    <DxColumn
                        caption="Trạng thái"
                        data-field="status"
                        :visible="true"
                        data-type="string"
                    />
                </DxDataGrid>
            </div>
            <!-- <a-divider style="height: 1px; background-color: #f8f8f8" /> -->
            <div class="content-row">
                <DxDataGrid
                    :allow-column-reordering="true"
                    :data-source="serviceResultDatas"
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
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed } from "vue";
import dayjs, { Dayjs } from "dayjs";
import { ServiceRequestModel, ServiceResultDataModel } from "@/models";
import { testingService } from "@/services";

import {
    DxDataGrid,
    DxScrolling,
    DxPager,
    DxPaging,
    DxColumn,
    DxDataGridTypes,
    DxSelection,
} from "devextreme-vue/data-grid";
import DxSelectBox from "devextreme-vue/select-box";
import DxCheckBox from "devextreme-vue/check-box";

export default defineComponent({
    name: "TestingView",
    setup() {
        const fromDate = ref<Dayjs>(
            dayjs().set("hour", 0).set("minute", 0).set("second", 0)
        );
        const toDate = ref<Dayjs>(
            dayjs().set("hour", 23).set("minute", 59).set("second", 59)
        );

        const displayModes = [
            { text: "Display Mode 'full'", value: "full" },
            { text: "Display Mode 'compact'", value: "compact" },
        ];
        const pageSizes = [5, 10, "all"];

        const displayMode = ref("full");
        const showPageSizeSelector = ref(true);
        const showInfo = ref(true);
        const showNavButtons = ref(true);

        const itemSources = ref<ServiceRequestModel[]>([]);
        const source = ref<ServiceRequestModel>();
        const serviceResultDatas = ref<ServiceResultDataModel[]>([]);

        const itemSourcesSelectedRowKeys = ref<string[]>([]);

        // lấy dữ liệu
        /* eslint-disable */
        const handleLoad = async () => {
            debugger;

            let fromDateString = fromDate.value.format("DD/MM/YYYY HH:mm:ss");
            let toDateString = toDate.value.format("DD/MM/YYYY HH:mm:ss");

            let result = await testingService.getAll();
            itemSources.value = result.data.result;
        };

        const onSelectionChanged = async ({
            selectedRowsData,
        }: DxDataGridTypes.SelectionChangedEvent<ServiceRequestModel>) => {
            source.value = selectedRowsData[0];

            if (source && source.value.id) {
                let dtos =
                    await testingService.getServiceResultDataByServiceRequestId(
                        source.value.id,
                        1
                    );

                serviceResultDatas.value = dtos.data.result;
            } else {
                serviceResultDatas.value = [];
            }
        };

        // const onSelectionChanged = (
        //     e: DxDataGridTypes.SelectionChangedEvent<ServiceRequestModel>
        // ) => {
        //     console.log(e);
        // };

        const selectFirstRow = (e: any) => {
            const rowKey = e.component.getKeyByRowIndex(0);
            if (rowKey) {
                itemSourcesSelectedRowKeys.value = [
                    ...itemSourcesSelectedRowKeys.value,
                    rowKey,
                ];
            }
        };

        return {
            fromDate,
            toDate,
            itemSources,
            source,
            serviceResultDatas,
            itemSourcesSelectedRowKeys,

            handleLoad,

            pageSizes,
            displayMode,
            showPageSizeSelector,
            showInfo,
            showNavButtons,
            displayModes,

            onSelectionChanged,
            selectFirstRow,
        };
    },
    components: {
        DxDataGrid,
        DxColumn,
        DxScrolling,
        DxPager,
        DxPaging,
        DxSelectBox,
        DxCheckBox,
        DxSelection,
    },
});
</script>


<style scoped>
.layout {
    display: flex;
    flex-direction: column;
    /* height: 100%; */
    /* height: 100vh; */
}
.header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.search {
    display: grid;
    grid-template-columns: auto 170px auto 170px 100px;
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    margin-bottom: 10px;
    align-items: center;
    justify-content: center;
}
.procedure-room {
    display: grid;
    grid-template-columns: auto 170px;
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    margin-bottom: 10px;
    align-items: center;
    justify-content: center;
}
.content {
    flex: 1;
    display: flex;
    flex-direction: column;
}
.content-row {
    flex: 1;
    overflow: auto;
}
</style>
