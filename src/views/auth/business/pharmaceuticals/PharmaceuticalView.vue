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
            class="ant-table-striped"
            size="middle"
            :columns="columns"
            :data-source="itemSources"
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
                            color="success"
                        >
                            <span>Đã nhập kho</span>
                        </a-tag>
                        <a-tag
                            v-else-if="record.impMestStatus === 5"
                            color="error"
                        >
                            <span>Đã hủy</span>
                        </a-tag>
                    </span>
                </template>
                <template v-if="column.key === 'impTime'">
                    <span>{{
                        record.impTime === null
                            ? record.impTime
                            : new Date(record.impTime).toLocaleString()
                    }}</span>
                </template>
                <template v-if="column.key === 'stockReceiptTime'">
                    <span>{{
                        record.stockReceiptTime === null
                            ? record.stockReceiptTime
                            : new Date(record.stockReceiptTime).toLocaleString()
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
            <PharmaceuticalImportFromSupplierView
                :visible="visible"
                :imExMestTypeId="imExMestTypeId"
                @toggle="handleToggle"
            />
        </teleport>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Modal } from "ant-design-vue";
import { PlusOutlined } from "@ant-design/icons-vue";
import { RoomModel, DImpMestModel, DImpExpMestTypeModel } from "@/models";
import { roomService, impMestService, impExpMestTypeService } from "@/services";
import dayjs, { Dayjs } from "dayjs";
import PharmaceuticalImportFromSupplierView from "./PharmaceuticalImportFromSupplierView.vue";

export default defineComponent({
    name: "PharmaceuticalView",
    setup() {
        const columns = ref([
            {
                title: "Trạng thái phiếu",
                key: "impMestStatus",
                dataIndex: "impMestStatus",
                width: 100,
                className: "column-header-center",
            },
            {
                title: "Mã phiếu",
                key: "code",
                dataIndex: "code",
                width: 200,
                className: "column-header-center",
            },
            {
                title: "Loại phiếu",
                key: "imExMestTypeName",
                dataIndex: "imExMestTypeName",
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
                title: "Ngày nhập kho",
                key: "stockReceiptTime",
                dataIndex: "stockReceiptTime",
                width: 70,
                className: "column-header-center",
            },

            { title: "Xử lý", key: "action", width: 100, align: "center" },
        ]);

        const visible = ref<boolean>(false);
        const source = ref<DImpMestModel>();
        const fields = ref({ value: "id", label: "name" });
        const sStocks = ref<RoomModel[]>([]);
        const itemSources = ref<DImpMestModel[]>([]);
        const dImpExpMestTypes = ref<DImpExpMestTypeModel[]>([]);
        const sStockId = ref<string>("");
        const fromDate = ref<Dayjs>(
            dayjs().set("hour", 0).set("minute", 0).set("second", 0)
        );
        const toDate = ref<Dayjs>(
            dayjs().set("hour", 23).set("minute", 59).set("second", 59)
        );
        const imExMestTypeId = ref<number>(0);

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

            itemSources.value = (
                await impMestService.getByStock(
                    sStockId.value,
                    fromDateString,
                    toDateString
                )
            ).data.result;

            console.log(itemSources.value);
        };

        // sửa
        const handleEdit = (item: DImpMestModel) => {
            show(true, item);
        };

        // ẩn / hiện chi tiết
        const handleToggle = (result: boolean) => {
            visible.value = !visible.value;

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
            imExMestTypeId.value = type.id;
            handleToggle(false);
        };

        const show = (v: boolean, r: DImpMestModel | undefined) => {
            source.value = r;
            visible.value = v;
        };

        return {
            fromDate,
            toDate,
            columns,
            visible,
            fields,
            sStocks,
            dImpExpMestTypes,
            itemSources,
            source,
            sStockId,
            imExMestTypeId,
            handleLoad,
            handleEdit,
            inItData,
            handleToggle,
            handleStocksChanged,
            handlGegenerateDocumentClick,
        };
    },
    mounted() {
        this.inItData();
    },
    components: {
        PlusOutlined,
        PharmaceuticalImportFromSupplierView,
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