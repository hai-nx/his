<template>
    <x-layout :title="title">
        <template #action>
            <a-button type="primary" @click="showReceptionDetail">Đón tiếp</a-button>
            <a-dropdown-button class="ms-2">
                Báo cáo
                <template #overlay>
                    <a-menu>
                        <a-menu-item key="1">
                            <i class="bi bi-dot"></i>
                            Phiếu giữ thẻ BHYT
                        </a-menu-item>
                        <a-menu-divider />
                        <a-menu-item key="2">
                            <i class="bi bi-dot"></i>
                            Sổ khám bệnh
                        </a-menu-item>
                        <a-menu-item key="3">
                            <i class="bi bi-dot"></i>
                            Báo cáo hoạt động khám bệnh
                        </a-menu-item>
                    </a-menu>
                </template>
            </a-dropdown-button>
        </template>
        <div class="d-flex flex-column p-2">
            <div>
                <label class="ms-2">Từ</label>
                <a-date-picker class="ms-2"></a-date-picker>
                <label class="ms-2">Đến</label>
                <a-date-picker class="ms-2"></a-date-picker>
                <a-input placeholder="Tìm kiếm" class="ms-2 mb-2 x-w-200"></a-input>
                <XDateRangePicker class="ms-2" />
            </div>
            <a-table :columns="columns" :data-source="items" bordered scroll={{ x: 400 }}>
            </a-table>
        </div>
    </x-layout>
</template>

<script lang="ts">
import { ReceptionModel, ReceptionRequestModel } from '@/models';
import router from '@/router'
import { defineComponent, ref } from 'vue'
import { receptionService } from '@/services';

export default defineComponent({
    name: 'ReceptionView',
    setup() {
        const title = ref<string>('Danh sách bệnh nhân đăng ký khám');
        const columns = ref([
            { title: 'Ngày đón tiếp', key: 'code', dataIndex: 'code', width: 150 },
            { title: 'Mã BN', key: 'name', dataIndex: 'name', width: 150 },
            { title: 'Tên bệnh nhân', key: 'description', dataIndex: 'description', width: 250 },
            { title: 'Số BHYT', key: 'inactive', dataIndex: 'inactive', width: 200 },
            { title: 'Giới tính', key: 'action', width: 100 },
            { title: 'Tuổi', key: 'action', width: 100 },
            { title: 'Địa chỉ', key: 'action', width: 300 },
            { title: 'Phòng khám', key: 'action', width: 150 },
            { title: 'Dịch vụ khám', key: 'action', width: 150 },
            { title: 'Bác sĩ khám bệnh', key: 'action', width: 150 },
            { title: 'STT khám', key: 'action', width: 100 },
            { title: 'Người đăng ký', key: 'action', width: 150 },
        ]);
        const items = ref<ReceptionModel[]>([]);


        const showReceptionDetail = () => {
            //router.push({ name: 'reception-detail' });
            getAll();
        }

        const getAll = () => {
            let input: ReceptionRequestModel = {
                departmentId: "142ECB02-836B-4824-9B71-F18BCA299658",
                roomId: "991184C1-3FD2-4D15-8977-D1DDA4EC5ACB",
                receptionFromDate: new Date(),
                receptionToDate: new Date()
            }
            receptionService.getAll(input).then(res => { items.value = res.data.items })
        }

        return {
            title,
            columns,
            items,
            showReceptionDetail,
            getAll
        }
    },
})

</script>