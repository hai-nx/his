<template>
    <div>
        <div class="header">
            <div class="function grid-col-1">
                <a-dropdown>
                    <template #overlay>
                        <a-menu>
                            <a-menu-item
                                @click="handlGegenerateDocumentClick(menuItem)"
                                v-for="menuItem in dImpExpMestTypes"
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

            <a-select
                class="grid-column-3"
                :field-names="fields"
                :options="sStocks"
                showSearch
                style="width: 180px"
                placeholder="Chọn kho"
                v-model:value="sStockId"
            />

            <a-radio-group
                name="radioGroup"
                class="grid-column-4 mx-3"
                v-model:value="type"
            >
                <a-radio value="0">Nhập</a-radio>
                <a-radio value="1">Xuất</a-radio>
            </a-radio-group>

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

        <a-table
            v-if="isImport"
            class="ant-table-striped"
            size="middle"
            :columns="columnImps"
            :data-source="impSources"
            bordered
        >
            <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'impMestStatus'">
                    <span>
                        <a-tag
                            v-if="record.impMestStatus === 0"
                            color="success"
                        >
                            <span>Mới tạo</span>
                        </a-tag>
                        <a-tag
                            v-else-if="record.impMestStatus === 1"
                            color="success"
                        >
                            <span>Đã gửi yêu cầu</span>
                        </a-tag>
                        <a-tag
                            v-else-if="record.impMestStatus === 2"
                            color="success"
                        >
                            <span>Đã duyệt</span>
                        </a-tag>
                        <a-tag
                            v-else-if="record.impMestStatus === 3"
                            color="success"
                        >
                            <span>Đã nhập kho</span>
                        </a-tag>
                        <a-tag
                            v-else-if="record.impMestStatus === 4"
                            color="error"
                        >
                            <span>Đã hủy</span>
                        </a-tag>
                    </span>
                </template>
                <template v-if="column.key === 'impTime'">
                    <span>{{
                        record.impTime === null
                            ? null
                            : new Date(record.impTime).toLocaleDateString()
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

        <a-table
            v-if="!isImport"
            class="ant-table-striped"
            size="middle"
            :columns="columnExps"
            :data-source="expSources"
            bordered
        >
            <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'expMestStatus'">
                    <span>
                        <a-tag
                            v-if="record.impMestStatus === 0"
                            color="success"
                        >
                            <span>Mới tạo</span>
                        </a-tag>
                        <a-tag
                            v-else-if="record.impMestStatus === 1"
                            color="success"
                        >
                            <span>Đã gửi yêu cầu</span>
                        </a-tag>
                        <a-tag
                            v-else-if="record.impMestStatus === 2"
                            color="success"
                        >
                            <span>Đã duyệt</span>
                        </a-tag>
                        <a-tag
                            v-else-if="record.impMestStatus === 3"
                            color="success"
                        >
                            <span>Đã xuất kho</span>
                        </a-tag>
                        <a-tag
                            v-else-if="record.impMestStatus === 4"
                            color="error"
                        >
                            <span>Đã hủy</span>
                        </a-tag>
                    </span>
                </template>

                <template v-if="column.key === 'impMestStatus'">
                    <span>
                        <a-tag
                            v-if="record.impMestStatus === 0"
                            color="success"
                        >
                            <span>Mới tạo</span>
                        </a-tag>
                        <a-tag
                            v-else-if="record.impMestStatus === 1"
                            color="success"
                        >
                            <span>Đã gửi yêu cầu</span>
                        </a-tag>
                        <a-tag
                            v-else-if="record.impMestStatus === 2"
                            color="success"
                        >
                            <span>Đã duyệt</span>
                        </a-tag>
                        <a-tag
                            v-else-if="record.impMestStatus === 3"
                            color="success"
                        >
                            <span>Đã nhập kho</span>
                        </a-tag>
                        <a-tag
                            v-else-if="record.impMestStatus === 4"
                            color="error"
                        >
                            <span>Đã hủy</span>
                        </a-tag>
                    </span>
                </template>

                <template v-if="column.key === 'expTime'">
                    <span>{{
                        record.expTime === null
                            ? null
                            : new Date(record.expTime).toLocaleDateString()
                    }}</span>
                </template>
                <template v-if="column.key === 'stockExpTime'">
                    <span>{{
                        record.stockExpTime === null
                            ? null
                            : new Date(record.stockExpTime).toLocaleDateString()
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
                :impExMestTypeId="impExMestTypeId"
                :data="impSource"
                @toggle="handleToggleImportFromSupplier"
            />
            <ImportFromAnotherStockView
                :visible="visibleImportFromAnotherStock"
                :impExMestTypeId="impExMestTypeId"
                :data="impSource"
                @toggle="handleToggleImportFromAnotherStock"
            />

            <ExportFromAnotherStockView
                :visible="visibleExportFromAnotherStock"
                :data="expSource"
                @toggle="handleToggleExportFromSupplier"
            />
        </teleport>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, computed } from "vue";
import { PlusOutlined } from "@ant-design/icons-vue";
import {
    RoomModel,
    DImpMestModel,
    DImpExpMestTypeModel,
    DExpMestModel,
} from "@/models";
import {
    roomService,
    impMestService,
    impExpMestTypeService,
    expMestService,
} from "@/services";
import dayjs, { Dayjs } from "dayjs";
import ImportFromSupplierView from "./impMest/ImportFromSupplierView.vue";
import ImportFromAnotherStockView from "./impMest/ImportFromAnotherStockView.vue";
import ExportFromAnotherStockView from "./expMest/ExportFromAnotherStockView.vue";

export default defineComponent({
    name: "PharmaceuticalView",
    setup() {
        const type = ref<string>("0");
        const visibleImportFromSupplier = ref<boolean>(false);
        const visibleImportFromAnotherStock = ref<boolean>(false);
        const impSource = ref<DImpMestModel>();
        const expSource = ref<DExpMestModel>();
        const fields = ref({ value: "id", label: "name" });
        const sStocks = ref<RoomModel[]>([]);
        const impSources = ref<DImpMestModel[]>([]);
        const expSources = ref<DExpMestModel[]>([]);
        const dImpExpMestTypes = ref<DImpExpMestTypeModel[]>([]);
        const sStockId = ref<string>("");
        const fromDate = ref<Dayjs>(
            dayjs().set("hour", 0).set("minute", 0).set("second", 0)
        );
        const toDate = ref<Dayjs>(
            dayjs().set("hour", 23).set("minute", 59).set("second", 59)
        );
        const impExMestTypeId = ref<number>(0);

        const visibleExportFromAnotherStock = ref<boolean>(false);

        const columnImps = ref([
            {
                title: "Trạng thái phiếu",
                key: "impMestStatus",
                dataIndex: "impMestStatus",
                width: 60,
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
                title: "Loại phiếu",
                key: "impExpMestTypeName",
                dataIndex: "impExpMestTypeName",
                width: 250,
                className: "column-header-center",
            },
            {
                title: "Ngày tạo",
                key: "impTime",
                dataIndex: "impTime",
                width: 70,
                className: "column-header-center",
            },
            {
                title: "Ngày hóa đơn",
                key: "invTime",
                dataIndex: "invTime",
                width: 70,
                className: "column-header-center",
            },
            {
                title: "Ngày nhập kho",
                key: "stockImpTime",
                dataIndex: "stockImpTime",
                width: 70,
                className: "column-header-center",
            },

            { title: "Xử lý", key: "action", width: 70, align: "center" },
        ]);

        const columnExps = ref([
            {
                title: "Trạng thái phiếu",
                key: "expMestStatus",
                dataIndex: "expMestStatus",
                width: 60,
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
                title: "Loại phiếu",
                key: "impExpMestTypeName",
                dataIndex: "impExpMestTypeName",
                width: 250,
                className: "column-header-center",
            },
            {
                title: "Ngày tạo",
                key: "impTime",
                dataIndex: "impTime",
                width: 70,
                className: "column-header-center",
            },
            {
                title: "Ngày xuất kho",
                key: "stockExpTime",
                dataIndex: "stockExpTime",
                width: 70,
                className: "column-header-center",
            },
            {
                title: "Trạng thái nhập",
                key: "impMestStatus",
                dataIndex: "impMestStatus",
                width: 60,
                className: "column-header-center",
            },

            { title: "Xử lý", key: "action", width: 70, align: "center" },
        ]);

        //#region Function
        async function inItData() {
            sStocks.value = await getStocks();
            dImpExpMestTypes.value = await getImpExpMestTypes();
        }

        async function getStocks(): Promise<RoomModel[]> {
            return (await roomService.getByStocks()).data.result;
        }

        async function getImpExpMestTypes(): Promise<DImpExpMestTypeModel[]> {
            return (await impExpMestTypeService.getAll()).data.result;
        }

        // lấy dữ liệu
        const handleLoad = async () => {
            let fromDateString = fromDate.value.format("DD/MM/YYYY HH:mm:ss");
            let toDateString = toDate.value.format("DD/MM/YYYY HH:mm:ss");

            /* eslint-disable */
            debugger;
            let isImport = type.value == "0" ? true : false;
            if (isImport) {
                impSources.value = (
                    await impMestService.getByStock(
                        sStockId.value,
                        fromDateString,
                        toDateString
                    )
                ).data.result;
            } else {
                expSources.value = (
                    await expMestService.getByStock(
                        sStockId.value,
                        fromDateString,
                        toDateString
                    )
                ).data.result;
            }
        };

        // sửa
        const handleEdit = (item: DImpMestModel) => {
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

        // Ẩn, hiện xuất kho thuốc của phiếu nhập từ kho khác
        const handleToggleExportFromSupplier = (result: boolean) => {
            visibleExportFromAnotherStock.value =
                !visibleExportFromAnotherStock.value;

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

        const handlGegenerateDocumentClick = (type: DImpExpMestTypeModel) => {
            impExMestTypeId.value = type.id;
            show(true, undefined);
        };

        const show = (v: boolean, s: DImpMestModel | undefined) => {
            if (
                (s !== undefined && s.impExpMestTypeId === 1) ||
                impExMestTypeId.value === 1
            ) {
                visibleImportFromSupplier.value = v;
            } else if (
                (s !== undefined && s.impExpMestTypeId === 3) ||
                impExMestTypeId.value === 3
            ) {
                visibleImportFromAnotherStock.value = v;
            }

            impSource.value = s;
        };

        const isImport = computed(() => {
            return type.value == "0" ? true : false;
        });

        return {
            type,
            fromDate,
            toDate,
            columnImps,
            visibleImportFromSupplier,
            visibleImportFromAnotherStock,
            fields,
            sStocks,
            dImpExpMestTypes,
            impSources,
            impSource,
            sStockId,
            impExMestTypeId,
            isImport,
            handleLoad,
            handleEdit,
            inItData,
            handleToggleImportFromSupplier,
            handleStocksChanged,
            handlGegenerateDocumentClick,
            handleToggleImportFromAnotherStock,

            visibleExportFromAnotherStock,
            columnExps,
            expSource,
            expSources,
            handleToggleExportFromSupplier,
        };
    },
    mounted() {
        this.inItData();
    },
    components: {
        PlusOutlined,
        ImportFromSupplierView,
        ImportFromAnotherStockView,
        ExportFromAnotherStockView,
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