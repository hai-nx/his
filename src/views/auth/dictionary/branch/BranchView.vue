<template>
    <d-page-container :title="title" :breadcrumbs="breadcrumbs" :show-header="true">
        <template #actions>
            <d-button type="primary" icon="bi bi-plus-lg" @click="handleAdd">
                <span>Thêm chi nhánh</span>
            </d-button>
        </template>

        <d-table class="p-2" size="middle" :columns="columns" :items="items" bordered>
            <template #cell="{ column, row }">
                <template v-if="column.key === 'inactive'">
                    <span>
                        <a-tag v-if="row.inactive" color="error">
                            <span>Ngừng hoạt động</span>
                        </a-tag>
                        <a-tag v-else color="success">
                            <span>Hoạt động</span>
                        </a-tag>
                    </span>
                </template>
                <template v-else-if="column.key === 'action'">
                    <span>
                        <button class="btn btn-outline-primary border-0 btn-sm me-2" title="Sửa"
                            @click="handleEdit(row)">
                            <i class="bi bi-pen"></i>
                        </button>

                        <button class="btn btn-outline-danger border-0 btn-sm" title="Xóa" @click="handleDelete(row)">
                            <i class="bi bi-x-lg"></i>
                        </button>
                    </span>
                </template>
            </template>
        </d-table>
    </d-page-container>

    <teleport to="body">
        <BranchDetailView :visible="visible" :data="record" @toggle="handleToggle" />
    </teleport>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { BranchModel } from "@/models";
import { XItemType } from "@/components";
import { branchService } from "@/services";
import BranchDetailView from "./BranchDetailView.vue";
// import XLayout from "@/components/XLayout.vue";
import Msg from '@/components/message'

export default defineComponent({
    name: "BranchView",
    setup() {
        const title = "Chi nhánh";
        const breadcrumbs = ref([
            { key: "1", label: "Danh mục", icon: "", path: "" },
            { key: "2", label: "Danh sách chi nhánh", icon: "", path: "" },
        ]);
        const columns = ref([
            {
                label: "Mã chi nhánh",
                key: "code",
                dataIndex: "code",
                width: 200,
            },
            {
                label: "Tên chi nhánh",
                key: "name",
                dataIndex: "name",
                width: 500,
            },
            {
                label: "Địa chỉ",
                key: "address",
                dataIndex: "address",
                width: 500,
            },
            {
                label: "Mã KCBBĐ",
                key: "mediOrgCode",
                dataIndex: "mediOrgCode",
                width: 120,
            },
            {
                label: "Mã KCBBĐ đúng tuyến",
                key: "mediOrgAcceptCode",
                dataIndex: "mediOrgAcceptCode",
                width: 500,
            },
            {
                label: "Mô tả",
                key: "description",
                dataIndex: "description",
                width: 500,
            },
            {
                label: "Trạng thái",
                key: "inactive",
                dataIndex: "inactive",
                width: 200,
            },
            { label: "Xử lý", key: "action", width: 100 },
        ]);
        const items = ref<BranchModel[]>([]);
        const record = ref<BranchModel>();
        const visible = ref<boolean>(false);

        // lấy dữ liệu
        const handleLoad = () => {
            items.value = [];
            branchService.getAll().then((res) => {
                items.value = res.data.result;
            });
        };

        // thêm mới
        const handleAdd = () => {
            show(true, undefined);
        };

        // sửa
        const handleEdit = (item: BranchModel) => {
            show(true, item);
        };

        // xóa
        const handleDelete = (item: BranchModel) => {
            if (item.id !== undefined) {
                let id = item.id!;
                Msg.confirm("Bạn có thực sự muốn xóa chi nhánh <" +item.code +"> đã chọn không?")
                .then(res => {
                    if (res === "ok") {
                        branchService
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

        const show = (v: boolean, r: BranchModel | undefined) => {
            record.value = r;
            visible.value = v;
        };

        return {
            title,
            breadcrumbs,
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
        // XLayout,
        BranchDetailView,
    },
});
</script>