<template>
    <div class="layout">
        <div class="header">
            <div class="parameters">
                <label>Phòng thực hiện:</label>
                <DxSelectBox
                    :search-enabled="true"
                    :data-source="executeRooms"
                    :search-mode="'contains'"
                    :search-expr="'name'"
                    :search-timeout="200"
                    :min-search-length="0"
                    :show-data-before-search="false"
                    :value="executeRoomSelected"
                    placeholder="Chọn phòng thực hiện"
                    display-expr="name"
                    value-expr="id"
                />

                <label>Ngày:</label>
                <DxSelectBox
                    :search-enabled="true"
                    :data-source="executeRooms"
                    :search-mode="'contains'"
                    :search-expr="'name'"
                    :search-timeout="200"
                    :min-search-length="0"
                    :show-data-before-search="false"
                    :value="executeRoomSelected"
                    placeholder="Chọn phòng thực hiện"
                    display-expr="name"
                    value-expr="id"
                />

                <label>Trạng thái:</label>
                <DxSelectBox
                    :search-enabled="true"
                    :data-source="executeRooms"
                    :search-mode="'contains'"
                    :search-expr="'name'"
                    :search-timeout="200"
                    :min-search-length="0"
                    :show-data-before-search="false"
                    :value="executeRoomSelected"
                    placeholder="Chọn phòng thực hiện"
                    display-expr="name"
                    value-expr="id"
                />
            </div>
            <div class="search">
                <label>Từ ngày:</label>
                <!-- <a-date-picker
                    placeholder="dd/MM/yyyy HH:mm:ss"
                    format="DD/MM/YYYY HH:mm:ss"
                    v-model:value="fromDate"
                /> -->
                <DxDateBox
                    :show-clear-button="false"
                    :use-mask-behavior="false"
                    :input-attr="{ 'aria-label': 'Date' }"
                    placeholder="dd/MM/yyyy"
                    display-format="dd/MM/yyyy HH:mm:ss"
                    type="date"
                    v-model:value="fromDate"
                />

                <label>Đến ngày:</label>
                <!-- <a-date-picker
                    placeholder="dd/MM/yyyy HH:mm:ss"
                    format="DD/MM/YYYY HH:mm:ss"
                    v-model:value="toDate"
                /> -->
                <DxDateBox
                    :show-clear-button="false"
                    :use-mask-behavior="false"
                    :input-attr="{ 'aria-label': 'Date' }"
                    placeholder="dd/MM/yyyy"
                    display-format="dd/MM/yyyy HH:mm:ss"
                    type="date"
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
                    :focused-row-enabled="true"
                    :focused-row-index="0"
                    key-expr="id"
                    @selection-changed="onSelectionChanged"
                    @content-ready="selectFirstRow"
                    :selected-row-keys="itemSourcesSelectedRowKeys"
                    @row-dbl-click="onRowDblClick"
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
                    :data-source="source.serviceResultDatas"
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
    <teleport to="body">
        <TestingDetailView
            :visible="visibleDetail"
            :master-source-prop="source"
            @toggle="handleTestingDetail"
        />
    </teleport>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed } from "vue";
import {
    ServiceRequestModel,
    ServiceResultDataModel,
    RoomModel,
    RoomRequestModel,
    ServiceRequestRequestModel,
} from "@/models";
import { RoomType } from "@/enums/roomtypes";
import { testingService, roomService } from "@/services";
import { DxSelectBox } from "devextreme-vue/select-box";
import DxDateBox from "devextreme-vue/date-box";
import datetimeHelper from "@/utils/helpers/datetimeHelper";

import TestingDetailView from "./TestingDetailView.vue";

import {
    DxDataGrid,
    DxScrolling,
    DxPager,
    DxPaging,
    DxColumn,
    DxDataGridTypes,
    DxSelection,
} from "devextreme-vue/data-grid";
import { RowDblClickEvent } from "devextreme/ui/data_grid";

export default defineComponent({
    name: "TestingView",
    setup() {
        const fromDate = ref<Date>(new Date());
        const toDate = ref<Date>(new Date());

        fromDate.value.setHours(0, 0, 0);
        toDate.value.setHours(23, 59, 59);

        const visibleDetail = ref<boolean>(false);

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
        const source = ref<ServiceRequestModel>({});
        const itemSourcesSelectedRowKeys = ref<string[]>([]);
        const executeRooms = ref<RoomModel[]>([]);
        const executeRoomSelected = ref<string>();

        // Lấy dữ liệu danh sách
        const inItData = async () => {
            executeRooms.value = await getExecuteRooms();

            if (executeRooms.value && executeRooms.value[0].id) {
                executeRoomSelected.value = executeRooms.value[0].id;
            }
        };

        async function getExecuteRooms(): Promise<RoomModel[]> {
            const filter: RoomRequestModel = {
                roomTypeIdFilter: RoomType.LaboratoryTesting,
            };
            return (await roomService.getAll(filter)).data.result;
        }

        // lấy dữ liệu
        const handleLoad = async () => {
            console.log(fromDate.value);

            let filter: ServiceRequestRequestModel = {
                executeRoomIdFilter: executeRoomSelected.value,
                serviceRequestDateFromFilter: datetimeHelper.dateToNumber(
                    fromDate.value
                ),
                serviceRequestDateToFilter: datetimeHelper.dateToNumber(
                    toDate.value
                ),
            };

            let result = await testingService.getAll(filter);
            itemSources.value = result.data.result;
        };

        const onSelectionChanged = async ({
            selectedRowsData,
        }: DxDataGridTypes.SelectionChangedEvent<ServiceRequestModel>) => {
            source.value = selectedRowsData[0];
            if (source.value && source.value.id) {
                let dtos =
                    await testingService.getServiceResultDataByServiceRequestId(
                        source.value.id,
                        1
                    );
                source.value.serviceResultDatas = dtos.data.result;
            } else {
                source.value.serviceResultDatas = [];
            }
        };

        const selectFirstRow = (e: any) => {
            const rowKey = e.component.getKeyByRowIndex(0);
            if (rowKey) {
                itemSourcesSelectedRowKeys.value = [
                    ...itemSourcesSelectedRowKeys.value,
                    rowKey,
                ];
            }
        };

        const onRowDblClick = (e: RowDblClickEvent) => {
            visibleDetail.value = true;
        };

        const handleTestingDetail = (result: boolean) => {
            visibleDetail.value = !visibleDetail.value;
            if (result) {
                handleLoad();
            }
        };

        return {
            fromDate,
            toDate,
            itemSources,
            source,
            itemSourcesSelectedRowKeys,
            visibleDetail,
            executeRooms,
            executeRoomSelected,

            pageSizes,
            displayMode,
            showPageSizeSelector,
            showInfo,
            showNavButtons,
            displayModes,

            handleLoad,
            inItData,
            onSelectionChanged,
            selectFirstRow,
            handleTestingDetail,
            onRowDblClick,
        };
    },
    components: {
        DxDataGrid,
        DxColumn,
        DxScrolling,
        DxPager,
        DxPaging,
        DxSelection,
        DxSelectBox,
        DxDateBox,

        TestingDetailView,
    },
    async mounted() {
        await this.inItData();
        await this.handleLoad();
    },
});
</script>


<style scoped>
.layout {
    display: flex;
    flex-direction: column;
    /*height: 100%;  Sử dụng 100vh thay vì flex: 1 để giữ chiều cao 100% của viewport */
    flex: 1;
    height: 100vh;
}

.header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px; /* Thêm padding để tạo khoảng cách với phần nội dung */
}

.content {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden; /* Ẩn overflow để ngăn scroll xuất hiện ở cấp độ cao hơn */
}

.content-row {
    flex: 1;
    overflow: auto;
    margin-bottom: 10px; /* Thêm margin để tạo khoảng cách giữa các phần nội dung */
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
.parameters {
    display: grid;
    grid-template-columns: repeat(3, auto 180px);
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    margin-bottom: 10px;
    align-items: center;
    justify-content: center;
}
</style>
