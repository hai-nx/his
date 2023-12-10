<template>
    <x-layout :title="title" :breadcrumbs="breadcrumbs" :show-header="true">
        <template #action>
            <a-button type="primary" @click="onShowReceptionDetail">Đón tiếp</a-button>
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

        <div class="py-3 px-2">
            <div class="row mb-3">
                <label>Tuwf ngayf</label>
                <label>Ddeens ngayf</label>
            </div>

            <div class="row mb-3">
                <a-table :columns="columns" :data-source="items" bordered size="middle"></a-table>
            </div>

            <div class="row">
                <x-pagination 
                    :current="currentPage" 
                    :page-size="pageSize" 
                    :total="totalRowCount"
                    @change="onCurrentPageChange" 
                    @pageSizeChange="onPageSizeChange" 
                    />
            </div>
        </div>
    </x-layout>
</template>

<script setup lang="ts">
import { PatientRecordModel, PatientRecordRequestModel } from '@/models'
import { ref } from 'vue'
import { receptionService } from '@/services'
import { XItemType } from '@/components';
import router from '@/router';

const title = ref('Danh sách bệnh nhân đăng ký khám');
const breadcrumbs = ref<Array<XItemType>>([
    { key: '1', label: 'Đón tiếp', icon: '', path: '' },
    { key: '2', label: 'Danh sách bệnh nhân', icon: '', path: '' }
]);

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
const items = ref<PatientRecordModel[]>([]);

const totalRowCount = ref(200);
const currentPage = ref(2);
const pageSize = ref(20);


function loadSource() {
    let input: PatientRecordRequestModel = {
        maxPatientRecordDateFilter: new Date(),
        minPatientRecordDateFilter: new Date()
    }
    receptionService.getAll(input).then(res => { items.value = res.data.result });
}


function onShowReceptionDetail() {
    router.push({ name: 'reception-detail' });
}

function onPageSizeChange(value: number) {
    pageSize.value = value;
    currentPage.value = 1;
    loadSource();
}

function onCurrentPageChange(value: number) {
    currentPage.value = value
    loadSource();
}

</script>