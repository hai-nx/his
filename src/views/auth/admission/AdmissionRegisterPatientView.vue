<template>
    <div>
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
                <!-- <template v-else-if="column.key === 'action'">
                    <span>
                        <button class="btn btn-outline-primary border-0 btn-sm me-2" title="Sửa"
                            @click="handleEdit(record)">
                            <i class="bi bi-pen"></i>
                        </button>

                        <button class="btn btn-outline-danger border-0 btn-sm" title="Xóa" @click="handleDelete(record)">
                            <i class="bi bi-x-lg"></i>
                        </button>
                    </span>
                </template> -->
            </template>
        </a-table>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { TreatmentModel } from '@/models'

export default defineComponent({
    name: 'AdmissionRegisterPatientView',
    setup() {
        const columns = ref([
            { title: 'Mã bệnh án', key: 'code', dataIndex: 'code', width: 200 },
            { title: 'Mã bệnh nhân', key: 'name', dataIndex: 'name', width: 500 },
            { title: 'Tên bệnh nhân', key: 'nameEnglish', dataIndex: 'nameEnglish', width: 500 },
            { title: 'Ngày sinh', key: 'chapterCode', dataIndex: 'chapterCode', width: 200 },
            { title: 'Giới tính', key: 'mainGroupCode', dataIndex: 'mainGroupCode', width: 200 },
            { title: 'Mã BHYT', key: 'typeCode', dataIndex: 'typeCode', width: 200 },
            { title: 'CMT/CCCD', key: 'description', dataIndex: 'description', width: 500 },
            { title: 'Ngày tiếp nhận', key: 'inactive', dataIndex: 'inactive', width: 200 },
            { title: 'Phòng khám', key: 'action', width: 100 },
            { title: 'Mã KCBBĐ', key: 'action', width: 100 },
            { title: 'Mã nơi GT', key: 'action', width: 100 },
            { title: 'SĐT bệnh nhân', key: 'action', width: 100 },
            { title: 'Nơi làm việc', key: 'action', width: 100 },
            { title: 'Địa chỉ BN', key: 'action', width: 100 },
            { title: 'Ngày ra viện', key: 'action', width: 100 },
            
        ]);
        const items = ref<TreatmentModel[]>([]);

        return {
            columns,
            items
        }
    },
});
</script>