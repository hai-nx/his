<template>
    <x-layout
        :title="title"
        :breadcrumbs="breadcrumbs"
        :show-header="true"
        :showTitle="false"
    >
        <template #action>
            <div class="header">
                <a-select
                    class="grid-column-1"
                    :field-names="fields"
                    :options="stocks"
                    showSearch
                    optionFilterProp="label"
                    style="width: 180px"
                    placeholder="Chọn kho"
                    v-model:value="stockId"
                />

                <div class="function grid-col-3">
                    <a-dropdown>
                        <template #overlay>
                            <a-menu>
                                <a-menu-item
                                    @click="
                                        handlGegenerateDocumentClick(menuItem)
                                    "
                                    v-for="menuItem in inOutStockTypes"
                                    :key="menuItem.id"
                                    :data-item="menuItem"
                                >
                                    {{ menuItem.name }}
                                </a-menu-item>
                            </a-menu>
                        </template>
                        <a-button type="primary" class="btn-list">
                            <div class="btn btn-list-dropdown">
                                <PlusOutlined class="text-white" />
                                <span class="text-white">Tạo phiếu</span>
                            </div>
                        </a-button>
                    </a-dropdown>
                </div>

                <div class="search grid-col-6">
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
                        Cập nhật
                    </a-button>
                </div>
            </div>
        </template>

        <div class="content">
            <DxDataGrid
                :allow-column-reordering="true"
                :data-source="itemSources"
                :show-borders="true"
                :hover-state-enabled="true"
                :focused-row-enabled="true"
                :focused-row-index="0"
                key-expr="id"
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
                <!-- <DxColumn
                    caption="Trạng thái"
                    data-field="status"
                    :visible="true"
                    data-type="string"
                    :cell-template="statusCellTemplate"
                /> -->
                <DxColumn
                    caption="Trạng thái"
                    data-field="status"
                    :visible="true"
                    data-type="string"
                >
                    <template #statusTemplate="{ data }">
                        <span>
                            <a-tag v-if="data.status === -1" color="error">
                                <span>Đã hủy</span>
                            </a-tag>
                            <a-tag
                                v-else-if="data.status === 0"
                                color="success"
                            >
                                <span>Mới tạo</span>
                            </a-tag>
                            <a-tag
                                v-else-if="data.status === 1"
                                color="success"
                            >
                                <span>Đã gửi yêu cầu</span>
                            </a-tag>
                            <a-tag
                                v-else-if="data.status === 2"
                                color="success"
                            >
                                <span>Đã duyệt</span>
                            </a-tag>
                            <a-tag
                                v-else-if="data.status === 3"
                                color="success"
                            >
                                <span>Đã xuất kho</span>
                            </a-tag>
                            <a-tag
                                v-else-if="data.status === 4"
                                color="success"
                            >
                                <span>Đã nhập kho</span>
                            </a-tag>
                        </span>
                    </template>
                </DxColumn>

                <DxColumn
                    caption="Mã phiếu"
                    data-field="code"
                    :visible="true"
                    data-type="string"
                />
                <!-- <DxColumn
                    caption="Loại hàng hóa"
                    data-field="commodityType"
                    :visible="true"
                    data-type="string"
                    :cell-template="commodityTypeCellTemplate"
                /> -->
                <!-- <DxColumn
                    caption="Loại hàng hóa"
                    data-field="commodityType"
                    :visible="true"
                    data-type="string"
                    :editor-options="{
                        itemTemplate: 'commodityTypeCellTemplate',
                    }"
                /> -->

                <DxColumn
                    caption="Loại hàng hóa"
                    data-field="commodityType"
                    :visible="true"
                    data-type="string"
                >
                    <template #cellTemplate="{ data }">
                        <!-- <span v-if="data.commodityType === 0">Thuốc</span>
                        <span v-else-if="data.commodityType === 1">Vật tư</span>
                        <span v-else-if="data.commodityType === 2">Máu</span> -->
                        <span>123132123</span>
                        <span>{{ data.commodityType }}</span>
                    </template>
                </DxColumn>

                <DxColumn
                    caption="Loại phiếu"
                    data-field="inOutStockTypeName"
                    :visible="true"
                    data-type="string"
                />
                <DxColumn
                    caption="Kho nhập"
                    data-field="impStockName"
                    :visible="true"
                    data-type="string"
                />
                <DxColumn
                    caption="Kho xuất"
                    data-field="expStockName"
                    :visible="true"
                    data-type="string"
                />
                <DxColumn
                    caption="Ngày tạo"
                    data-field="reqTime"
                    :visible="true"
                    data-type="date"
                />
                <DxColumn
                    caption="Ngày hóa đơn"
                    data-field="invTime"
                    :visible="true"
                    data-type="date"
                />
                <DxColumn
                    caption="Ngày nhập kho"
                    data-field="stockImpTime"
                    :visible="true"
                    data-type="date"
                />
                <DxColumn
                    caption="Xử lý"
                    data-field="action"
                    :visible="true"
                    data-type="string"
                    :editor-options="{
                        itemTemplate: 'actionCellTemplate',
                    }"
                />

                <!-- <template #statusTemplate="{ data }">
                    <span>
                        <a-tag v-if="data.status === -1" color="error">
                            <span>Đã hủy</span>
                        </a-tag>
                        <a-tag v-else-if="data.status === 0" color="success">
                            <span>Mới tạo</span>
                        </a-tag>
                        <a-tag v-else-if="data.status === 1" color="success">
                            <span>Đã gửi yêu cầu</span>
                        </a-tag>
                        <a-tag v-else-if="data.status === 2" color="success">
                            <span>Đã duyệt</span>
                        </a-tag>
                        <a-tag v-else-if="data.status === 3" color="success">
                            <span>Đã xuất kho</span>
                        </a-tag>
                        <a-tag v-else-if="data.status === 4" color="success">
                            <span>Đã nhập kho</span>
                        </a-tag>
                    </span>
                </template> -->
                <template #commodityTypeCellTemplate="{ record }">
                    <span v-if="record.commodityType === 0">Thuốc</span>
                    <span v-else-if="record.commodityType === 1">Vật tư</span>
                    <span v-else-if="record.commodityType === 2">Máu</span>
                </template>
                <template #actionCellTemplate="{ record }">
                    <span>
                        <button
                            class="btn btn-outline-primary border-0 btn-sm me-2"
                            title="Sửa"
                            @click="handleEdit(record)"
                        >
                            <i class="bi bi-pen"></i>
                        </button>
                    </span>
                </template>
            </DxDataGrid>
        </div>
    </x-layout>

    <teleport to="body">
        <ImportFromSupplierView
            :visible="visibleImportFromSupplier"
            :data="source"
            :roomType="roomType"
            @toggle="handleToggleImportFromSupplier"
        />
        <ImportFromAnotherStockView
            :visible="visibleImportFromAnotherStock"
            :isImport="isImport"
            :data="source"
            @toggle="handleToggleImportFromAnotherStock"
        />

        <ExportToSuplierView
            :visible="visibleExportToSuplier"
            :isImport="isImport"
            :data="source"
            @toggle="handleToggleExportFromSupplier"
        />
    </teleport>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, computed, watch } from "vue";
import { PlusOutlined } from "@ant-design/icons-vue";
import { RoomModel, InOutStockModel, InOutStockTypeModel } from "@/models";
import {
    roomService,
    inOutStockService,
    inOutStockTypeService,
} from "@/services";
import dayjs, { Dayjs } from "dayjs";
import ImportFromSupplierView from "./ImportFromSupplierView.vue";
import ImportFromAnotherStockView from "./ImportFromAnotherStocksView.vue";

import { DxSelectBox } from "devextreme-vue/select-box";
import DxDateBox from "devextreme-vue/date-box";
import datetimeHelper from "@/utils/helpers/datetimeHelper";
import {
    DxDataGrid,
    DxScrolling,
    DxPager,
    DxPaging,
    DxColumn,
    DxDataGridTypes,
    DxSelection,
} from "devextreme-vue/data-grid";
import XLayout from "@/components/XLayout.vue";
import { XItemType } from "@/components";

import ExportToSuplierView from "./ExportToSuplierView.vue";
import { h } from "vue";

export default defineComponent({
    name: "PharmaceuticalView",
    setup() {
        const title = "";

        const displayModes = [
            { text: "Display Mode 'full'", value: "full" },
            { text: "Display Mode 'compact'", value: "compact" },
        ];
        const pageSizes = [5, 10, "all"];

        const displayMode = ref("full");
        const showPageSizeSelector = ref(true);
        const showInfo = ref(true);
        const showNavButtons = ref(true);

        const visibleImportFromSupplier = ref<boolean>(false);
        const visibleImportFromAnotherStock = ref<boolean>(false);
        const visibleExportToSuplier = ref<boolean>(false);
        const source = ref<InOutStockModel>();
        const fields = ref({ value: "id", label: "name" });
        const stocks = ref<RoomModel[]>([]);
        const itemSources = ref<InOutStockModel[]>([]);
        const stockId = ref<string>("");
        const fromDate = ref<Dayjs>(
            dayjs().set("hour", 0).set("minute", 0).set("second", 0)
        );
        const toDate = ref<Dayjs>(
            dayjs().set("hour", 23).set("minute", 59).set("second", 59)
        );
        const breadcrumbs = ref<Array<XItemType>>([
            { key: "1", label: "Xét nghiệm", icon: "", path: "" },
            { key: "2", label: "Danh sách Xét nghiệm", icon: "", path: "" },
        ]);

        const inOutStockTypes = ref<InOutStockTypeModel[]>([]);
        const inOutStockTypeId = ref<number>(0);
        const roomType = ref<number>(0);

        const columnImps = ref([
            {
                title: "Trạng thái phiếu",
                key: "status",
                dataIndex: "status",
                width: 50,
                className: "column-header-center",
            },
            {
                title: "Mã phiếu",
                key: "code",
                dataIndex: "code",
                width: 50,
                className: "column-header-center",
            },
            {
                title: "Loại hàng hóa",
                key: "commodityType",
                dataIndex: "commodityType",
                width: 50,
                className: "column-header-center",
            },
            {
                title: "Loại phiếu nhập xuất",
                key: "inOutStockTypeName",
                dataIndex: "inOutStockTypeName",
                width: 250,
                className: "column-header-center",
            },
            {
                title: "Kho nhập",
                key: "impStockName",
                dataIndex: "impStockName",
                width: 100,
                className: "column-header-center",
            },
            {
                title: "Kho xuất",
                key: "expStockName",
                dataIndex: "expStockName",
                width: 100,
                className: "column-header-center",
            },
            {
                title: "Ngày tạo",
                key: "reqTime",
                dataIndex: "reqTime",
                width: 50,
                className: "column-header-center",
                align: "center",
            },
            {
                title: "Ngày hóa đơn",
                key: "invTime",
                dataIndex: "invTime",
                width: 50,
                className: "column-header-center",
                align: "center",
            },
            {
                title: "Ngày nhập kho",
                key: "stockImpTime",
                dataIndex: "stockImpTime",
                width: 50,
                className: "column-header-center",
                align: "center",
            },

            { title: "Xử lý", key: "action", width: 70, align: "center" },
        ]);

        //#region Function
        async function inItData() {
            stocks.value = await getStocks();
            inOutStockTypes.value = await getInOutStockTypes();

            if (
                stocks.value !== null &&
                stocks.value.length > 0 &&
                stocks.value[0].id
            ) {
                stockId.value = stocks.value[0].id;
            }
        }

        async function getStocks(): Promise<RoomModel[]> {
            return (await roomService.getByStocks()).data.result;
        }

        async function getInOutStockTypes(): Promise<InOutStockTypeModel[]> {
            return (await inOutStockTypeService.getAll()).data.result;
        }

        // lấy dữ liệu
        const handleLoad = async () => {
            let fromDateString = fromDate.value.format("DD/MM/YYYY HH:mm:ss");
            let toDateString = toDate.value.format("DD/MM/YYYY HH:mm:ss");

            itemSources.value = (
                await inOutStockService.getByStock(
                    stockId.value,
                    fromDateString,
                    toDateString
                )
            ).data.result;
        };

        // sửa
        const handleEdit = (item: InOutStockModel) => {
            show(true, item);
        };

        // ẩn, hiện nhập thuốc từ nhà cung cấp
        const handleToggleImportFromSupplier = (result: boolean) => {
            visibleImportFromSupplier.value = !visibleImportFromSupplier.value;

            if (result) {
                handleLoad();
            }
        };

        // Ẩn, hiện nhập thuốc từ kho khác
        const handleToggleImportFromAnotherStock = (result: boolean) => {
            visibleImportFromAnotherStock.value =
                !visibleImportFromAnotherStock.value;

            if (result) {
                handleLoad();
            }
        };

        // ẩn, hiện xuất trả thuốc từ nhà cung cấp
        const handleToggleExportFromSupplier = (result: boolean) => {
            visibleExportToSuplier.value = !visibleExportToSuplier.value;

            if (result) {
                handleLoad();
            }
        };

        //#endregion

        //#region Event
        const handleStocksChanged = (value: string) => {
            handleLoad();
        };
        //#endregion

        const handlGegenerateDocumentClick = (type: InOutStockTypeModel) => {
            inOutStockTypeId.value = type.id;
            show(true, undefined);
        };

        const show = (v: boolean, s: InOutStockModel | undefined) => {
            if (
                (s !== undefined && s.inOutStockTypeId === 1) ||
                inOutStockTypeId.value === 1
            ) {
                visibleImportFromSupplier.value = v;
            } else if (
                (s !== undefined && s.inOutStockTypeId === 2) ||
                inOutStockTypeId.value === 2
            ) {
                visibleExportToSuplier.value = v;
            } else if (
                (s !== undefined && s.inOutStockTypeId === 3) ||
                inOutStockTypeId.value === 3
            ) {
                visibleImportFromAnotherStock.value = v;
            } else if (inOutStockTypeId.value === 18) {
                console.log("Nhập đầu kỳ");
            }

            source.value = s;
        };

        const isImport = computed(() => {
            return source.value?.impStockId === stockId.value;
        });

        watch(stockId, (newValue, oldValue) => {
            if (newValue !== oldValue && newValue !== "") {
                let stock = stocks.value.find((f) => f.id == newValue);
                if (stock) {
                    roomType.value = stock.roomTypeId;
                }
            }
        });

        return {
            title,
            fromDate,
            toDate,
            columnImps,
            breadcrumbs,
            visibleImportFromSupplier,
            visibleImportFromAnotherStock,
            visibleExportToSuplier,
            fields,
            stocks,
            inOutStockTypes,
            itemSources,
            source,
            stockId,
            inOutStockTypeId,
            isImport,
            roomType,

            pageSizes,
            displayMode,
            showPageSizeSelector,
            showInfo,
            showNavButtons,
            displayModes,

            handleLoad,
            handleEdit,
            inItData,
            handleToggleImportFromSupplier,
            handleStocksChanged,
            handlGegenerateDocumentClick,
            handleToggleImportFromAnotherStock,
            handleToggleExportFromSupplier,
        };
    },
    async mounted() {
        await this.inItData();
        await this.handleLoad();
    },
    components: {
        DxDataGrid,
        DxColumn,
        DxScrolling,
        DxPager,
        DxPaging,
        DxSelection,
        // DxSelectBox,
        // DxDateBox,
        XLayout,

        PlusOutlined,
        ImportFromSupplierView,
        ImportFromAnotherStockView,

        ExportToSuplierView,
    },
});
</script>

<style scoped>
.header {
    display: grid;
    grid-template-columns: auto auto auto auto 1fr auto;
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    margin-bottom: 10px;
    align-items: center;
    justify-content: center;
}
.grid-col-1 {
    grid-column: 1/2;
}
.grid-col-2 {
    grid-column: 2/3;
}
.grid-col-3 {
    grid-column: 3/4;
}

.grid-col-4 {
    grid-column: 4/5;
}

.grid-col-5 {
    grid-column: 5/6;
}

.grid-col-6 {
    grid-column: 6/7;
}

.function {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 140px;
}

.btn-list-dropdown {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 32px;
}

.btn.btn-list-dropdown {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px;
}

.btn-list {
    display: inline;
    width: 120px;
    padding: 0px;
    margin: 0px;
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
</style>