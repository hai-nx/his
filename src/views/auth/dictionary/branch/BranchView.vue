<template>
    <x-layout :title="title" :breadcrumbs="breadcrumbs" :show-header="true">
        <template #action>
            <a-button type="primary" @click="handleAdd">
                <i class="bi bi-plus-lg me-2"></i>
                <span>Thêm chi nhánh</span>
            </a-button>
        </template>

        <a-table class="ant-table-striped m-2" size="middle" :columns="columns" :data-source="items" bordered>
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
                        <button class="btn btn-outline-primary border-0 btn-sm me-2" title="Sửa"
                            @click="handleEdit(record)">
                            <i class="bi bi-pen"></i>
                        </button>

                        <button class="btn btn-outline-danger border-0 btn-sm" title="Xóa" @click="handleDelete(record)">
                            <i class="bi bi-x-lg"></i>
                        </button>
                    </span>
                </template>
            </template>
        </a-table>
    </x-layout>

    <teleport to="body">
        <BranchDetailView :visible="visible" :data="record" @toggle="handleToggle" />
    </teleport>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Modal } from 'ant-design-vue'
import { BranchModel } from '@/models'
import { XItemType } from '@/components';
import { branchService } from '@/services';
import BranchDetailView from './BranchDetailView.vue'
import XLayout from "@/components/XLayout.vue"

export default defineComponent({
    name: 'BranchView',
    setup() {
        const title = "Chi nhánh";
        const breadcrumbs = ref<Array<XItemType>>([
            { key: '1', label: 'Danh mục', icon: '', path: '' },
            { key: '2', label: 'Danh sách chi nhánh', icon: '', path: '' }
        ]);
        const columns = ref([
            { title: 'Mã chi nhánh', key: 'branchCode', dataIndex: 'branchCode', width: 200 },
            { title: 'Tên chi nhánh', key: 'branchName', dataIndex: 'branchName', width: 500 },
            { title: 'Mã KCBBĐ', key: 'mediOrgCode', dataIndex: 'mediOrgCode', width: 500 },
            { title: 'Mã KCBBĐ đúng tuyến', key: 'mediOrgAcceptCode', dataIndex: 'mediOrgAcceptCode', width: 500 },
            { title: 'Mô tả', key: 'description', dataIndex: 'description', width: 500 },
            { title: 'Trạng thái', key: 'inactive', dataIndex: 'inactive', width: 200 },
            { title: 'Xử lý', key: 'action', width: 100 }
        ]);
        const items = ref<BranchModel[]>([]);
        const record = ref<BranchModel>();
        const visible = ref<boolean>(false)

        // lấy dữ liệu
        const handleLoad = () => {
            items.value = [];
            branchService.getAll()
                .then(res => {
                    items.value = res.data.result
                });
        }

        // thêm mới
        const handleAdd = () => {
            show(true, undefined);
        }

        // sửa
        const handleEdit = (item: BranchModel) => {
            show(true, item);
        }

        // xóa
        const handleDelete = (item: BranchModel) => {
            if (item.id !== undefined) {
                let id = item.id!;
                Modal.confirm({
                    content: 'Bạn có thực sự muốn xóa chi nhánh <' + item.code + '> đã chọn không?',
                    okText: 'Đồng ý',
                    cancelText: 'Bỏ qua',
                    onOk() {
                        branchService.delete(id)
                            .catch(error => { Modal.error({ content: error.message, okText: 'Đồng ý' }); })
                            .finally(() => {
                                handleLoad();
                            });
                    },
                    onCancel() {
                        Modal.destroyAll();
                    }
                });
            }
        }

        // ẩn / hiện chi tiết
        const handleToggle = (result: boolean) => {
            visible.value = !visible.value;
            if (result) {
                record.value = undefined;
                handleLoad();
            }
        }

        const show = (v: boolean, r: BranchModel | undefined) => {
            record.value = r;
            visible.value = v;
        }

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
            handleToggle
        }
    },
    mounted() {
        this.handleLoad();
    },
    components: {
        XLayout,
        BranchDetailView
    }
});
</script>