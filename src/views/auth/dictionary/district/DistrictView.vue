<template>
    <div>
        <div class="d-flex justify-content-between align-items-center">
            <h3>Danh mục quận, huyện</h3>

            <div>
                <a-button type="primary" @click="handleAdd">
                    <i class="bi bi-plus-lg me-2"></i>
                    <span>Thêm quận, huyện</span>
                </a-button>
            </div>
        </div>

        <a-table class="ant-table-striped" size="middle" :columns="columns" :data-source="items" bordered :scroll="{ x: '100%', y: '100%' }">
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
            <DistrictDetailView :visible="visible" :data="record" @toggle="handleToggle" />
        </teleport>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Modal } from 'ant-design-vue'
import { DistrictModel } from '@/models'
import { districtService } from '@/services';
import DistrictDetailView from './DistrictDetailView.vue'

export default defineComponent({
    name: 'DistrictView',
    setup() {
        const columns = ref([
            { title: 'Mã quận, huyện', key: 'districtCode', dataIndex: 'districtCode', width: 200 },
            { title: 'Tên quận, huyện', key: 'districtName', dataIndex: 'districtName', width: 500 },
            { title: 'Mô tả', key: 'description', dataIndex: 'description', width: 500 },
            { title: 'Trạng thái', key: 'inactive', dataIndex: 'inactive', width: 200 },
            { title: 'Xử lý', key: 'action', width: 100 }
        ]);
        const items = ref<DistrictModel[]>([]);
        const record = ref<DistrictModel>();
        const visible = ref<boolean>(false)

        // lấy dữ liệu
        const handleLoad = () => {
            items.value = [];
            districtService.getAll()
                .then(res => {
                    items.value = res.data.result
                });
        }

        // thêm mới
        const handleAdd = () => {
            show(true, undefined);
        }

        // sửa
        const handleEdit = (item: DistrictModel) => {
            show(true, item);
        }

        // xóa
        const handleDelete = (item: DistrictModel) => {
            if (item.id !== undefined) {
                let id = item.id!;
                Modal.confirm({
                    content: 'Bạn có thực sự muốn xóa mã bệnh <' + item.code + '> đã chọn không?',
                    okText: 'Đồng ý',
                    cancelText: 'Bỏ qua',
                    onOk() {
                        districtService.delete(id)
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

        const show = (v: boolean, r: DistrictModel | undefined) => {
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
        DistrictDetailView
    }
});
</script>