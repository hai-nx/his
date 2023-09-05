<template>
    <div>
        <div class="d-flex justify-content-between align-items-center">
            <h3>Danh mục thuốc</h3>

            <div>
                <a-button
                    type="primary"
                    style="margin-right: 10px"
                    @click="handleImportExcel(true)"
                >
                    Nhập thuốc từ Excel
                </a-button>
                <a-button type="primary" @click="handleAdd">
                    <i class="bi bi-plus-lg me-2"></i>
                    <span>Thêm thuốc</span>
                </a-button>
            </div>
        </div>

        <a-table
            class="ant-table-striped"
            size="middle"
            :columns="columns"
            :data-source="items"
            bordered
        >
            <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'inactive'">
                    <span>
                        <a-tag v-if="record.inactive" color="error">
                            <span>Ngừng hoạt động</span>
                        </a-tag>
                        <a-tag v-else color="success">
                            <span>Hoạt động</span>
                        </a-tag>
                    </span>
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

                        <button
                            class="btn btn-outline-danger border-0 btn-sm"
                            title="Xóa"
                            @click="handleDelete(record)"
                        >
                            <i class="bi bi-x-lg"></i>
                        </button>
                    </span>
                </template>
            </template>
        </a-table>

        <teleport to="body">
            <ItemTypeDetailView
                :visible="visible"
                :data="record"
                @toggle="handleToggle"
            />
            <ItemTypeDetailImportView
                :visible="visibleImportExcel"
                @toggle="handleToggleImportExcel"
            />
        </teleport>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Modal } from "ant-design-vue";
import { ItemTypeModel } from "@/models";
import { itemTypeService } from "@/services";
import ItemTypeDetailView from "./ItemTypeDetailView.vue";
import ItemTypeDetailImportView from "./ItemTypeDetailImportView.vue";

export default defineComponent({
    name: "ItemTypeView",
    setup() {
        const columns = ref([
            {
                title: "Mã thuốc",
                key: "code",
                dataIndex: "code",
                width: 200,
                className: "column-header-center",
            },
            {
                title: "Tên thuốc",
                key: "name",
                dataIndex: "name",
                width: 500,
                className: "column-header-center",
            },
            {
                title: "Ngưng sử dụng",
                key: "inactive",
                dataIndex: "inactive",
                width: 200,
                className: "column-header-center",
                align: "center",
            },
            { title: "Xử lý", key: "action", width: 100, align: "center" },
        ]);
        const items = ref<ItemTypeModel[]>([]);
        const record = ref<ItemTypeModel>();
        const visible = ref<boolean>(false);
        const visibleImportExcel = ref<boolean>(false);

        // lấy dữ liệu
        const handleLoad = () => {
            items.value = [];
            itemTypeService.getAll().then((res) => {
                items.value = res.data.result;
            });
        };

        // thêm mới
        const handleAdd = () => {
            show(true, undefined);
        };

        // sửa
        const handleEdit = (item: ItemTypeModel) => {
            show(true, item);
        };

        // xóa
        const handleDelete = (item: ItemTypeModel) => {
            if (item.id !== undefined) {
                let id = item.id!;
                Modal.confirm({
                    content:
                        "Bạn có thực sự muốn xóa thuốc <" +
                        item.code +
                        "> đã chọn không?",
                    okText: "Đồng ý",
                    cancelText: "Bỏ qua",
                    onOk() {
                        itemTypeService
                            .delete(id)
                            .catch((error) => {
                                Modal.error({
                                    content: error.message,
                                    okText: "Đồng ý",
                                });
                            })
                            .finally(() => {
                                handleLoad();
                            });
                    },
                    onCancel() {
                        Modal.destroyAll();
                    },
                });
            }
        };

        const handleImportExcel = (v: boolean) => {
            visibleImportExcel.value = v;
        };

        // ẩn / hiện chi tiết
        const handleToggle = (result: boolean) => {
            visible.value = !visible.value;
            if (result) {
                record.value = undefined;
                handleLoad();
            }
        };

        const handleToggleImportExcel = (result: boolean) => {
            visibleImportExcel.value = !visibleImportExcel.value;
            if (result) {
                record.value = undefined;
                handleLoad();
            }
        };

        const show = (v: boolean, r: ItemTypeModel | undefined) => {
            record.value = r;
            visible.value = v;
        };

        return {
            items,
            record,
            columns,
            visible,
            visibleImportExcel,
            handleAdd,
            handleDelete,
            handleEdit,
            handleLoad,
            handleToggle,
            handleImportExcel,
            handleToggleImportExcel,
        };
    },

    mounted() {
        this.handleLoad();
    },
    components: {
        ItemTypeDetailView,
        ItemTypeDetailImportView,
    },
});
const visibleImportExcel = ref<boolean>(false);
</script>