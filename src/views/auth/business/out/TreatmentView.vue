<template>
    <div>
        <a-page-header title="Danh mục bệnh nhân tiếp nhận">
            <template #extra>
                <a-button key="1" type="primary" @click="handleAdd">
                    <i class="bi bi-plus-lg me-2"></i>
                    Đăng ký khám
                </a-button>
            </template>
        </a-page-header>

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
            <TreatmentDetailView :visible="visible" :data="record" @toggle="handleToggle" />
        </teleport>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Modal } from 'ant-design-vue'
import { TreatmentModel, TreatmentFilterModel } from '@/models'
import { patientService } from '@/services';
import TreatmentDetailView from './TreatmentDetailView.vue'

export default defineComponent({
    name: 'TreatmentView',
    setup() {
        const columns = ref([
            { title: 'Mã bệnh nhân', key: 'patientCode', dataIndex: 'patientCode', width: 200 },
            { title: 'Mã điều trị', key: 'code', dataIndex: 'code', width: 500 },
            { title: 'Họ tên', key: 'patientName', dataIndex: 'patientName', width: 500 },
            { title: 'Giới tính', key: 'genderName', dataIndex: 'genderName', width: 200 },
            { title: 'Đối tượng', key: 'patientTypeName', dataIndex: 'patientTypeName', width: 200 },
            { title: 'Thẻ BHYT', key: 'heinCode', dataIndex: 'heinCode', width: 200 },
            { title: 'Xử lý', key: 'action', width: 100 }
        ]);
        const items = ref<TreatmentModel[]>([]);
        const record = ref<TreatmentModel>();
        const visible = ref<boolean>(false)

        // lấy dữ liệu
        const handleLoad = () => {
            items.value = [];
            let filter: TreatmentFilterModel = {
                
            }
            patientService.getAll(filter)
                .then(response => {
                    items.value = response.data.result
                });
        }

        // thêm mới
        const handleAdd = () => {
            show(true, undefined);
        }

        // sửa
        const handleEdit = (item: TreatmentModel) => {
            show(true, item);
        }

        // xóa
        const handleDelete = (item: TreatmentModel) => {
            if (item.id !== undefined) {
                let id = item.id!;
                // Modal.confirm({
                //     content: 'Bạn có thực sự muốn xóa chi nhánh <' + item.code + '> đã chọn không?',
                //     okText: 'Đồng ý',
                //     cancelText: 'Bỏ qua',
                //     onOk() {
                //         patientService.delete(id)
                //             .catch(error => { Modal.error({ content: error.message, okText: 'Đồng ý' }); })
                //             .finally(() => {
                //                 handleLoad();
                //             });
                //     },
                //     onCancel() {
                //         Modal.destroyAll();
                //     }
                // });
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

        const show = (v: boolean, r: TreatmentModel | undefined) => {
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
        TreatmentDetailView
    }
});
</script>