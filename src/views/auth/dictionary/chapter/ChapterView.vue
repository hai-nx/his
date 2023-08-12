<template>
    <div>
        <div class="d-flex justify-content-between align-items-center">
            <h3>Danh mục chương</h3>

            <div>
                <a-button type="primary" @click="handleAdd">
                    <i class="bi bi-plus-lg me-2"></i>
                    <span>Thêm chương</span>
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
            <ChapterDetailView
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
import { ChapterModel } from "@/models";
import { chapterService } from "@/services";
import ChapterDetailView from "./ChapterDetailView.vue";

export default defineComponent({
    name: "MedicineGroupView",
    setup() {
        const columns = ref([
            {
                title: "ID",
                key: "code",
                dataIndex: "code",
                width: 200,
                className: "column-header-center",
            },
            {
                title: "Tên chương ICD10",
                key: "name",
                dataIndex: "name",
                width: 500,
                className: "column-header-center",
            },
            {
                title: "Số thứ tự",
                key: "sortOrder",
                dataIndex: "sortOrder",
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
        const items = ref<ChapterModel[]>([]);
        const record = ref<ChapterModel>();
        const visible = ref<boolean>(false);

         // lấy dữ liệu
         const handleLoad = () => {
            items.value = [];
            chapterService.getAll().then((res) => {
                items.value = res.data.result;
            });
        };

        // thêm mới
        const handleAdd = () => {
            show(true, undefined);
        };

        // sửa
        const handleEdit = (item: ChapterModel) => {
            show(true, item);
        };

        //sắp xếp
        const handleOrder = (item: ChapterModel) => {
            order(item);
        };

        // xóa
        const handleDelete = (item: ChapterModel) => {
            if (item.id !== undefined) {
                let id = item.id!;
                Modal.confirm({
                    content:
                        "Bạn có thực sự muốn xóa chương <" +
                        item.code +
                        "> đã chọn không?",
                    okText: "Đồng ý",
                    cancelText: "Bỏ qua",
                    onOk() {
                        chapterService
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

        const show = (v: boolean, r: ChapterModel | undefined) => {
            record.value = r;
            visible.value = v;
        };

        const order = (r: ChapterModel | undefined) => {            
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
        ChapterDetailView,
    },
});
</script>