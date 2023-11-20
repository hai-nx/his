<template>
    <div>
        <div class="d-flex justify-content-between align-items-center">
            <h3>Cấu hình hệ thống</h3>

            <div>
                <a-button type="primary" @click="handleAdd">
                    <i class="bi bi-plus-lg me-2"></i>
                    <span>Thêm cấu hình</span>
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
                <!-- <template v-if="column.key === 'inactive'">
                    <span>
                        <a-tag v-if="record.inactive" color="error">
                            <span>Ngừng hoạt động</span>
                        </a-tag>
                        <a-tag v-else color="success">
                            <span>Hoạt động</span>
                        </a-tag>
                    </span>
                </template> -->
                <template v-if="column.key === 'action'">
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
            <DbOptionDetailView
                :visible="visible"
                :data="record"
                @toggle="handleToggle"
            />
        </teleport>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Modal } from "ant-design-vue";
import { DbOptionModel } from "@/models";
import { dbOptionService } from "@/services";
import DbOptionDetailView from "./DbOptionDetailView.vue";

export default defineComponent({
    name: "DbOptionView",
    setup() {
        const columns = ref([
            {
                title: "Tên cấu hình",
                key: "dbOptionId",
                dataIndex: "dbOptionId",
                width: 200,
                className: "column-header-center",
            },
            {
                title: "Giá trị",
                key: "dbOptionValue",
                dataIndex: "dbOptionValue",
                width: 500,
                className: "column-header-center",
            },
            {
                title: "Diễn giải",
                key: "description",
                dataIndex: "description",
                width: 200,
                className: "column-header-center",
            },            
            { title: "Xử lý", key: "action", width: 100, align: "center" },
        ]);
        const items = ref<DbOptionModel[]>([]);
        const record = ref<DbOptionModel>();
        const visible = ref<boolean>(false);

         // lấy dữ liệu
         const handleLoad = () => {
            items.value = [];
            dbOptionService.getAll().then((res) => {
                items.value = res.data.result;
            });
        };

        // thêm mới
        const handleAdd = () => {
            show(true, undefined);
        };

        // sửa
        const handleEdit = (item: DbOptionModel) => {
            show(true, item);
        };

        //sắp xếp
        const handleOrder = (item: DbOptionModel) => {
            order(item);
        };

        // xóa
        const handleDelete = (item: DbOptionModel) => {
            if (item.id !== undefined) {
                let id = item.id!;
                Modal.confirm({
                    content:
                        "Bạn có thực sự muốn xóa cấu hình <" +
                        item.dDbOptionId +
                        "> đã chọn không?",
                    okText: "Đồng ý",
                    cancelText: "Bỏ qua",
                    onOk() {
                        dbOptionService
                            .delete(id)
                            // .catch((error) => {
                            //     Modal.error({
                            //         content: error.message,
                            //         okText: "Đồng ý",
                            //     });
                            // })
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

        // ẩn / hiện chi tiết
        const handleToggle = (result: boolean) => {
            visible.value = !visible.value;
            if (result) {
                record.value = undefined;
                handleLoad();
            }
        };

        const show = (v: boolean, r: DbOptionModel | undefined) => {
            record.value = r;
            visible.value = v;
        };

        const order = (r: DbOptionModel | undefined) => {            
            record.value = r;            
        };

        return {
            items,
            record,
            columns,
            visible,
            handleAdd,
            handleOrder,
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
        DbOptionDetailView,
    },
});
</script>