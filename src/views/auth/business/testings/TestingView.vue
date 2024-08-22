<template>
    <x-layout
        :title="title"
        :breadcrumbs="breadcrumbs"
        :show-header="true"
        :showTitle="false"
    >
        <template #action>
            <div class="toolbar">
                <div class="toolbar-param">
                    <label>Phòng thực hiện:</label>
                    <DxSelectBox
                        class="item-width"
                        :search-enabled="true"
                        :data-source="executeRooms"
                        :search-mode="'contains'"
                        :search-expr="'name'"
                        :search-timeout="200"
                        :min-search-length="0"
                        :show-data-before-search="false"
                        v-model="executeRoomSelected"
                        placeholder="Chọn phòng thực hiện"
                        display-expr="name"
                        value-expr="id"
                    />

                    <DxSelectBox
                        class="item-width"
                        :search-enabled="true"
                        :data-source="dateTypes"
                        :search-mode="'contains'"
                        :search-expr="'stringValue'"
                        :search-timeout="200"
                        :min-search-length="0"
                        :show-data-before-search="false"
                        v-model="dateTypeSelected"
                        placeholder="Lọc theo ..."
                        display-expr="stringValue"
                        value-expr="numberValue"
                    />

                    <DxSelectBox
                        class="item-width"
                        :search-enabled="true"
                        :data-source="statusTypes"
                        :search-mode="'contains'"
                        :search-expr="'stringValue'"
                        :search-timeout="200"
                        :min-search-length="0"
                        :show-data-before-search="false"
                        v-model="statusSelected"
                        placeholder="Chọn trạng thái phiếu"
                        display-expr="stringValue"
                        value-expr="numberValue"
                    />
                </div>
                <div class="toolbar-date-range">
                    <label>Từ ngày:</label>
                    <DxDateBox
                        class="item-width"
                        :show-clear-button="false"
                        :use-mask-behavior="false"
                        :input-attr="{ 'aria-label': 'Date' }"
                        placeholder="dd/MM/yyyy"
                        display-format="dd/MM/yyyy"
                        type="date"
                        v-model:value="fromDate"
                    />

                    <label>Đến ngày:</label>
                    <DxDateBox
                        class="item-width"
                        :show-clear-button="false"
                        :use-mask-behavior="false"
                        :input-attr="{ 'aria-label': 'Date' }"
                        placeholder="dd/MM/yyyy"
                        display-format="dd/MM/yyyy"
                        type="date"
                        v-model:value="toDate"
                    />
                    <a-button type="primary" @click="handleLoad">
                        <i class="bi-arrow-clockwise"></i>
                        <label>Cập nhật</label>
                    </a-button>
                </div>
            </div>
        </template>

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
                        data-field="useTime"
                        :visible="true"
                        data-type="date"
                        format="dd/MM/yyyy"
                    />
                    <DxColumn
                        caption="BS chỉ định"
                        data-field="userName"
                        :visible="true"
                        data-type="string"
                    />
                    <DxColumn
                        caption="TG thực hiện"
                        data-field="startTime"
                        :visible="true"
                        data-type="date"
                    />
                    <DxColumn
                        caption="BS thực hiện"
                        data-field="startUserName"
                        :visible="true"
                        data-type="string"
                    />
                    <DxColumn
                        caption="TG trả KQ"
                        data-field="endTime"
                        :visible="true"
                        data-type="date"
                    />
                    <DxColumn
                        caption="BS trả KQ"
                        data-field="endUserName"
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
    </x-layout>
    <teleport to="body">
        <TestingDetailView
            :visible="visibleDetail"
            :master-source-prop="source"
            @toggle="handleTestingDetail"
        />
    </teleport>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import {
    ServiceRequestModel,
    RoomModel,
    RoomRequestModel,
    ServiceRequestRequestModel,
    SimpleModel,
} from "@/models";
import { RoomType } from "@/enums/roomtypes";
import { testingService, roomService } from "@/services";
import { DxSelectBox } from "devextreme-vue/select-box";
import DxDateBox from "devextreme-vue/date-box";
import datetimeHelper from "@/utils/helpers/datetimeHelper";
import { ServiceRequestStatusType } from "@/enums/serviceRequestStatusType";

import TestingDetailView from "./TestingDetailView.vue";
import XLayout from "@/components/XLayout.vue";
import { XItemType } from "@/components";

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
        const title = "";
        const breadcrumbs = ref<Array<XItemType>>([
            { key: "1", label: "Xét nghiệm", icon: "", path: "" },
            { key: "2", label: "Danh sách Xét nghiệm", icon: "", path: "" },
        ]);

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
        const dateTypes = ref<SimpleModel[]>([]);
        const statusTypes = ref<SimpleModel[]>([]);

        const executeRoomSelected = ref<string>();
        const dateTypeSelected = ref<number>(0);
        const statusSelected = ref<ServiceRequestStatusType>(0);

        // Lấy dữ liệu danh sách
        const inItData = async () => {
            executeRooms.value = await getExecuteRooms();
            dateTypes.value = await getDateTypes();
            statusTypes.value = await getStatusTypes();

            if (executeRooms.value && executeRooms.value[0].id) {
                executeRoomSelected.value = executeRooms.value[0].id;
            }
        };

        async function getExecuteRooms(): Promise<RoomModel[]> {
            const filter: RoomRequestModel = {
                roomTypeFilter: RoomType.LaboratoryTesting,
            };
            return (await roomService.getAll(filter)).data.result;
        }

        async function getDateTypes(): Promise<SimpleModel[]> {
            const dateTypes: SimpleModel[] = [
                { numberValue: 0, stringValue: "Ngày y lệnh" },
                { numberValue: 1, stringValue: "Ngày thực hiện" },
                { numberValue: 2, stringValue: "Ngày kết quả" },
            ];

            return dateTypes;
        }

        async function getStatusTypes(): Promise<SimpleModel[]> {
            const dateTypes: SimpleModel[] = [
                {
                    numberValue: ServiceRequestStatusType.AddNew,
                    stringValue: "Tất cả",
                },
                {
                    numberValue: ServiceRequestStatusType.Request,
                    stringValue: "Đang thực hiện",
                },
                {
                    numberValue: ServiceRequestStatusType.ProvideResults,
                    stringValue: "Đã trả kết quả",
                },
            ];

            return dateTypes;
        }

        // lấy dữ liệu
        const handleLoad = async () => {
            fromDate.value.setHours(0, 0, 0);
            toDate.value.setHours(23, 59, 59);

            let filter: ServiceRequestRequestModel = {
                executeRoomIdFilter: executeRoomSelected.value,

                useTimeFromFilter:
                    dateTypeSelected.value === 0 ? fromDate.value : undefined,
                useTimeToFilter:
                    dateTypeSelected.value === 0 ? toDate.value : undefined,

                startTimeFromFilter:
                    dateTypeSelected.value === 1 ? fromDate.value : undefined,
                startTimeToFilter:
                    dateTypeSelected.value === 1 ? toDate.value : undefined,

                endTimeFromFilter:
                    dateTypeSelected.value === 2 ? fromDate.value : undefined,
                endTimeToFilter:
                    dateTypeSelected.value === 2 ? toDate.value : undefined,

                statusFilter:
                    statusSelected.value === ServiceRequestStatusType.AddNew
                        ? undefined
                        : statusSelected.value,
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
            title,
            breadcrumbs,
            fromDate,
            toDate,
            itemSources,
            source,
            itemSourcesSelectedRowKeys,
            visibleDetail,
            executeRooms,
            dateTypes,
            statusTypes,
            executeRoomSelected,
            dateTypeSelected,
            statusSelected,

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
        XLayout,
    },
    async mounted() {
        await this.inItData();
        await this.handleLoad();
    },
});
</script>


<style scoped>
.toolbar {
    display: flex;
    justify-content: space-between;

    /* display: grid;
    grid-template-columns: 1fr 1fr; */
}

.content {
    display: flex;
    flex-direction: column;
    overflow: hidden; /* Ẩn overflow để ngăn scroll xuất hiện ở cấp độ cao hơn */
    margin-top: 15px;
}

.content-row {
    flex: 1;
    overflow: auto;
    margin-bottom: 10px; /* Thêm margin để tạo khoảng cách giữa các phần nội dung */
}

.toolbar-date-range {
    /* display: grid;
    grid-template-columns: auto 170px auto 170px 100px;
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    margin-bottom: 10px;
    align-items: center;
    justify-content: center; */

    display: flex;
    align-items: center;
    row-gap: 10px;
    column-gap: 10px;
}
.toolbar-param {
    /* display: grid;
    grid-template-columns: repeat(3, auto 180px);
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    margin-bottom: 10px;
    align-items: center;
    justify-content: center; */

    display: flex;
    align-items: center;
    row-gap: 10px;
    column-gap: 10px;
}

.item-width {
    width: 180px;
    padding: auto;
}
</style>
