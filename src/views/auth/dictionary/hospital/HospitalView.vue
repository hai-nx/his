<template>
    <div>
        <div class="d-flex justify-content-between align-items-center">
            <h3>Danh mục bệnh viện</h3>

            <div>
                <a-button type="primary" @click="handleAdd">
                    <i class="bi bi-plus-lg me-2"></i>
                    <span>Thêm bệnh viện</span>
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

        <teleport to="body">
            <HospitalDetailView :visible="visible" :data="record" @toggle="handleToggle" />
        </teleport>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Modal } from 'ant-design-vue'
import { HospitalModel } from '@/models'
import { hospitalService } from '@/services';
import HospitalDetailView from './HospitalDetailView.vue'

export default defineComponent({
    name: 'HospitalView',
    setup() {
        const columns = ref([
            { title: 'Mã bệnh viện', key: 'code', dataIndex: 'code', width: 200 },
            { title: 'Tên bệnh viện', key: 'name', dataIndex: 'name', width: 500 },
            { title: 'Mô tả', key: 'description', dataIndex: 'description', width: 500 },
            { title: 'Trạng thái', key: 'inactive', dataIndex: 'inactive', width: 200 },
            { title: 'Xử lý', key: 'action', width: 100 }
        ]);
        const items = ref<HospitalModel[]>([]);
        const record = ref<HospitalModel>();
        const visible = ref<boolean>(false)

        // lấy dữ liệu
        const handleLoad = () => {
            items.value = [];
            hospitalService.getAll()
                .then(res => {
                    items.value = res.data.result
                });
        }

        // thêm mới
        const handleAdd = () => {
            show(true, undefined);
        }

        // sửa
        const handleEdit = (item: HospitalModel) => {
            show(true, item);
        }

        // xóa
        const handleDelete = (item: HospitalModel) => {
            if (item.id !== undefined) {
                let id = item.id!;
                Modal.confirm({
                    content: 'Bạn có thực sự muốn xóa bệnh viện <' + item.code + '> đã chọn không?',
                    okText: 'Đồng ý',
                    cancelText: 'Bỏ qua',
                    onOk() {
                        hospitalService.delete(id)
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

        const show = (v: boolean, r: HospitalModel | undefined) => {
            record.value = r;
            visible.value = v;
        }

        return {
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
        HospitalDetailView
    }
});
</script>