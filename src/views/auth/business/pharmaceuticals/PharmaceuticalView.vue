<template>
    <div>
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
                                @click="handlGegenerateDocumentClick(menuItem)"
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
                    placeholder="dd/MM/yyyy"
                    format="DD/MM/YYYY"
                    v-model:value="fromDate"
                />

                <label>Đến ngày:</label>
                <a-date-picker
                    placeholder="dd/MM/yyyy"
                    format="DD/MM/YYYY"
                    v-model:value="toDate"
                />

                <a-button type="primary" @click="handleLoad">
                    Cập nhật
                </a-button>
            </div>
        </div>

        <a-table
            class="ant-table-striped"
            size="middle"
            :columns="columnImps"
            :data-source="itemSources"
            bordered
        >
            <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'status'">
                    <span>
                        <a-tag v-if="record.status === -1" color="error">
                            <span>Đã hủy</span>
                        </a-tag>
                        <a-tag v-else-if="record.status === 0" color="success">
                            <span>Mới tạo</span>
                        </a-tag>
                        <a-tag v-else-if="record.status === 1" color="success">
                            <span>Đã gửi yêu cầu</span>
                        </a-tag>
                        <a-tag v-else-if="record.status === 2" color="success">
                            <span>Đã duyệt</span>
                        </a-tag>
                        <a-tag v-else-if="record.status === 3" color="success">
                            <span>Đã xuất kho</span>
                        </a-tag>
                        <a-tag v-else-if="record.status === 4" color="success">
                            <span>Đã nhập kho</span>
                        </a-tag>
                    </span>
                </template>
                <template v-if="column.key === 'commodityType'">
                    <span v-if="record.commodityType === 0">Thuốc</span>
                    <span v-else-if="record.commodityType === 1">Vật tư</span>
                    <span v-else-if="record.commodityType === 2">Máu</span>
                </template>
                <template v-if="column.key === 'reqTime'">
                    <span>{{
                        record.reqTime === null
                            ? null
                            : new Date(record.reqTime).toLocaleDateString()
                    }}</span>
                </template>
                <template v-if="column.key === 'invTime'">
                    <span>{{
                        record.invTime === null
                            ? null
                            : new Date(record.invTime).toLocaleDateString()
                    }}</span>
                </template>
                <template v-if="column.key === 'stockImpTime'">
                    <span>{{
                        record.stockImpTime === null
                            ? null
                            : new Date(record.stockImpTime).toLocaleDateString()
                    }}</span>
                </template>

                <template v-else-if="column.key === 'action'">
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
            </template>
        </a-table>

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
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, computed, watch } from "vue";
import { RoomModel, InOutStockModel, InOutStockTypeModel } from "@/models";
import {
    roomService,
    inOutStockService,
    inOutStockTypeService,
} from "@/services";
import dayjs, { Dayjs } from "dayjs";
import ImportFromSupplierView from "./ImportFromSupplierView.vue";
import ImportFromAnotherStockView from "./ImportFromAnotherStocksView.vue";

import ExportToSuplierView from "./ExportToSuplierView.vue";

export default defineComponent({
    name: "PharmaceuticalView",
    setup() {
        // const type = ref<string>("0");
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
            // type,
            fromDate,
            toDate,
            columnImps,
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