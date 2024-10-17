<template>
    <div>
        <div class="d-flex justify-content-between align-items-center">
            <h3>Danh mục nhóm thuốc</h3>

            <div>
                <a-button type="primary" @click="handleAdd">
                    <i class="bi bi-plus-lg me-2"></i>
                    <span>Thêm nhóm thuốc</span>
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
                <template v-if="column.key === 'isSystem'">
                    <span>
                        <a-tag v-if="record.isSystem" color="error">
                            <span>Hệ thống</span>
                        </a-tag>
                        <a-tag v-else color="success">
                            <span>Người dùng</span>
                        </a-tag>
                    </span>
                </template>
                <template v-else-if="column.key === 'action'">
                    <span>
                        <button
                            :disabled="record.isSystem"
                            class="btn btn-outline-primary border-0 btn-sm me-2"
                            title="Sửa"
                            @click="handleEdit(record)"
                        >
                            <i class="bi bi-pen"></i>
                        </button>

                        <button
                            :disabled="!record.isSystem"
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
            <itemGroupDetailView
                :visible="visible"
                :data="record"
                @toggle="handleToggle"
            />
        </teleport>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { ItemGroupModel } from "@/models";
import { itemGroupService } from "@/services";
import ItemGroupDetailView from "./ItemGroupDetailView.vue";
import Msg from '@/components/message'

export default defineComponent({
    name: "itemGroupView",
    setup() {
        const columns = ref([
            {
                title: "Mã nhóm",
                key: "code",
                dataIndex: "code",
                width: 200,
                className: "column-header-center",
            },
            {
                title: "Tên nhóm",
                key: "name",
                dataIndex: "name",
                width: 500,
                className: "column-header-center",
            },
            {
                title: "Dữ liệu gốc",
                key: "isSystem",
                dataIndex: "isSystem",
                width: 200,
                className: "column-header-center",
                align: "center",
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
        const items = ref<ItemGroupModel[]>([]);
        const record = ref<ItemGroupModel>();
        const visible = ref<boolean>(false);

        // lấy dữ liệu
        const handleLoad = () => {
            items.value = [];
            itemGroupService.getAll().then((res) => {
                items.value = res.data.result;
            });
        };

        // thêm mới
        const handleAdd = () => {
            show(true, undefined);
        };

        // sửa
        const handleEdit = (item: ItemGroupModel) => {
            show(true, item);
        };

        // xóa
        const handleDelete = (item: ItemGroupModel) => {
            if (item.id !== undefined) {
                let id = item.id!;
                Msg.confirm("Bạn có thực sự muốn xóa nhóm thuốc <" + item.code + "> đã chọn không?")
                .then(res => {
                    if (res === "ok"){
                        itemGroupService
                            .delete(id)
                            .catch((error) => {
                                Msg.warning(error.message);
                            })
                            .finally(() => {
                                handleLoad();
                            });
                    }
                })
                
            }
        };

        // ẩn / hiện chi tiết
        const handleToggle = (result: boolean) => {
            visible.value = !visible.value;
            if (result) {
                record.value = undefined;
                handleLoad();
            }
        };

        const show = (v: boolean, r: ItemGroupModel | undefined) => {
            record.value = r;
            visible.value = v;
        };

        return {
            items,
            record,
            columns,
            visible,
            handleAdd,
            handleDelete,
            handleEdit,
            handleLoad,
            handleToggle,
        };
    },
    mounted() {
        this.handleLoad();
    },
    components: {
        ItemGroupDetailView,
    },
});
</script>