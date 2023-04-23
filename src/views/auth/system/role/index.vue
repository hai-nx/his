<template>
    <div class="container-fluid mt-3">
        <div class="d-flex justify-content-between align-items-center">
            <h3>Vai trò</h3>

            <div>
                <a-button type="primary" @click="handleAdd">
                    <i class="bi bi-plus-lg me-2"></i>
                    Thêm vai trò
                </a-button>
            </div>
        </div>


        <a-table 
            class="ant-table-striped" 
            size="middle" 
            :columns="columns" 
            :data-source="items"
            :row-class-name="(_record, index) => (index % 2 === 1 ? 'table-striped' : null)" 
            bordered>
            <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'action'">
                    <span>
                        <button class="btn btn-outline-primary border-0 btn-sm me-2" title="Sửa" @click="handleEdit(record)">
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

<script>
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { Modal } from 'ant-design-vue'
import roleService from '@/services/system/role-service.js'

export default defineComponent({
    setup() {
        const router = useRouter();
        const items = ref([])
        const columns = ref([
            { title: 'Mã vai trò', key: 'code', dataIndex: 'code', width: 200 },
            { title: 'Tên vai trò', key: 'name', dataIndex: 'name', width: 500 },
            { title: 'Mô tả', key: 'description', dataIndex: 'description', width: 500 },
            { title: 'Ngừng sử dụng', key: 'inactive', dataIndex: 'inactive', width: 200 },
            { title: 'Xử lý', key: 'action', width: 200 }
        ])

        const handleAdd = () => {
            router.push({ name: 'role-detail' });
        }

        const handleDelete = (item) => {
            Modal.confirm({
                content: 'Xac nhan xoa vai tro [' + item.code + ']?',
                okText: 'Dong y',
                cancelText: 'Huy',
                onOk() {
                    roleService.delete(item.id)
                },
                onCancel() {
                     Modal.destroyAll();
                },
            });
            
        }

        const handleEdit = (item) => {
            router.push({ name: 'role-detail-view', params: { id: item.id } })
        }

        return {
            items,
            columns,
            handleAdd,
            handleDelete,
            handleEdit
        }
    },
    mounted() {
        roleService.getAll().then(res => { this.items = res.result });
    },
    components: {}
}); 
</script>