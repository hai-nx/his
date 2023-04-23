<template>
    <div class="container-fluid mt-3">
        

        <div class="d-flex justify-content-between align-items-center">
            <h3>Danh mục chi nhánh</h3>

            <div>
                <a-button type="primary" @click="handleAdd">
                    <i class="bi bi-plus-lg me-2"></i>
                    <span>Thêm chi nhánh</span>
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
import branchService from '@/services/dictionary/branch-service'

export default defineComponent({
    setup() {
        const router = useRouter();
        const items = ref([])
        const columns = ref([
            { title: 'Mã chi nhánh', key: 'code', dataIndex: 'code', width: 200 },
            { title: 'Tên chi nhánh', key: 'name', dataIndex: 'name', width: 500 },
            { title: 'Mô tả', key: 'description', dataIndex: 'description', width: 500 },
            { title: 'Ngừng sử dụng', key: 'inactive', dataIndex: 'inactive', width: 200 },
            { title: 'Xử lý', key: 'action', width: 200 }
        ])

        const handleAdd = () => {
            router.push({ name: 'branch-detail'});
        }

        const handleDelete = (item) => {
            Modal.confirm({
                content: 'Xác nhận xóa chi nhánh [' + item.code + ']?',
                okText: 'Đồng ý',
                cancelText: 'Hủy',
                onOk() {
                    branchService.delete(item.id)
                },
                onCancel() {
                     Modal.destroyAll();
                },
            });
            
        }

        const handleEdit = (item) => {
            router.push({ name: 'branch-detail-view', params: { id: item.id } })
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
        branchService.getAll().then(res => { this.items = res.result });
    },
    components: {}
}); 
</script>