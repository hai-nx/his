<template>
    <div>
        <div class="d-flex justify-content-between align-items-center">
            <h3>Danh mục khoa</h3>

            <div>
                <a-button type="primary" @click="handleAdd">
                    <i class="bi bi-plus-lg me-2"></i>
                    <span>Thêm khoa</span>
                </a-button>
            </div>
        </div>

        <a-table class="ant-table-striped" size="middle" :columns="columns" :data-source="items" bordered>
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
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { Modal } from 'ant-design-vue'
import DepartmentModel from '@/models/dictionary/DepartmentModel'
import departmentService from '@/services/dictionary/department-service';


export default defineComponent({
    name: 'DepartmentView',
    setup() {
        const router = useRouter();
        const columns = ref([
            { title: 'Mã khoa', key: 'code', dataIndex: 'code', width: 200 },
            { title: 'Tên khoa', key: 'name', dataIndex: 'name', width: 500 },
            { title: 'Mô tả', key: 'description', dataIndex: 'description', width: 500 },
            { title: 'Trạng thái', key: 'inactive', dataIndex: 'inactive', width: 200 },
            { title: 'Xử lý', key: 'action', width: 100 }
        ]);
        const items = ref<DepartmentModel[]>([])

        const handleAdd = () => {
            router.push({ name: 'department-detail' });
        }

        const handleDelete = (item: DepartmentModel) => {
            Modal.confirm({
                content: 'Xác nhận xóa chi nhánh [' + item.code + ']?',
                okText: 'Đồng ý',
                cancelText: 'Hủy',
                onOk() {
                    departmentService.delete(item.id)
                },
                onCancel() {
                    Modal.destroyAll();
                },
            });

        }

        const handleEdit = (item: DepartmentModel) => {
            router.push({ name: 'department-detail-view', params: { id: item.id } })
        }

        const handleLoad = () => {
            departmentService.getAll()
                .then(res => {
                    items.value = res.data.result
                });
        }


        return {
            items,
            columns,
            handleAdd,
            handleDelete,
            handleEdit,
            handleLoad
        }
    },
    mounted() {
        this.handleLoad();
    }
});
</script>