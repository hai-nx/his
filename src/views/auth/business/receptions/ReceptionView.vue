<template>
    <x-layout :title="title" :breadcrumbs="breadcrumbs" :show-header="true">
        <template #action>
            <a-button type="primary" class="mx-1" @click="onShowReceptionDetail">
                Đón tiếp
            </a-button>

            <a-dropdown-button class="mx-1">
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

        <div class="d-flex flex-column p-3  overflow-auto">
            <a-space class="mb-3">
                <label>Từ ngày</label>
                <a-date-picker class="ms-2"></a-date-picker>
                <label class="ms-2">Đến ngày</label>
                <a-date-picker class="ms-2"></a-date-picker>
                <label class="ms-2">Trạng thái</label>
                <a-select class="w-150 ms-2"></a-select>
                <label class="ms-2">Phòng khám</label>
                <a-select class="w-150 ms-2"></a-select>
                <a-input class="w-200 ms-2"></a-input>
                <a-button class="ms-2">Tìm kiếm</a-button>
            </a-space>

            <div class="row mb-3">
                <a-table :columns="columns" :data-source="items" bordered :pagination="false" :scroll="scroll"></a-table>
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
import { ref, onMounted, h, toRefs } from 'vue'
import { PatientRecordModel, PatientRecordRequestModel } from '@/models'
import { XItemType } from '@/components';
import { receptionService } from '@/services'
import router from '@/router';

// import useLayout from "@/uses/layout";

// const { currentPage, pageSize, totalRowCount, onPageSizeChange, onCurrentPageChange } = useLayout(loadSource);



const title = ref('Danh sách bệnh nhân đăng ký khám');
const breadcrumbs = ref<Array<XItemType>>([
    { key: '1', label: 'Đón tiếp', icon: '', path: '' },
    { key: '2', label: 'Danh sách bệnh nhân', icon: '', path: '' }
]);

const columns = ref([
    { title: 'Ngày đón tiếp', key: 'code', dataIndex: 'code', width: 150 },
    { title: 'Mã BN', key: 'patientRecordCode', dataIndex: 'patientRecordCode', width: 150 },
    { title: 'Tên bệnh nhân', key: 'patientName', dataIndex: 'patientName', width: 250 },
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

const totalRowCount = ref(0);
const currentPage = ref(1);
const pageSize = ref(20);

const scroll = ref({ x: 1200 });

function loadSource() {
    // let input: PatientRecordRequestModel = {
    //     maxResultCount: pageSize.value,
    //     skipCount: pageSize.value  * (currentPage.value - 1),
    //     maxPatientRecordDateFilter: new Date(),
    //     minPatientRecordDateFilter: new Date()
    // }
    // receptionService.getAll(input)
    //     .then(res => { 
    //         items.value = res.data.result;
    //         totalRowCount.value = res.data.totalCount;
    //     });

    if (pageSize.value === 10) {
        totalRowCount.value = 12;
        items.value = [
        { patientRecordCode: "BA-01", patientName: "Bệnh nhân 1" },
        { patientRecordCode: "BA-02", patientName: "Bệnh nhân 2" },
        { patientRecordCode: "BA-03", patientName: "Bệnh nhân 3" },
        { patientRecordCode: "BA-01", patientName: "Bệnh nhân 1" },
        { patientRecordCode: "BA-02", patientName: "Bệnh nhân 2" },
        { patientRecordCode: "BA-03", patientName: "Bệnh nhân 3" },
        { patientRecordCode: "BA-01", patientName: "Bệnh nhân 1" },
        { patientRecordCode: "BA-02", patientName: "Bệnh nhân 2" },
        { patientRecordCode: "BA-03", patientName: "Bệnh nhân 3" },
        { patientRecordCode: "BA-01", patientName: "Bệnh nhân 1" },
    ]
    }
    else {
    items.value = [
        { patientRecordCode: "BA-01", patientName: "Bệnh nhân 1" },
        { patientRecordCode: "BA-02", patientName: "Bệnh nhân 2" },
        { patientRecordCode: "BA-03", patientName: "Bệnh nhân 3" },
        { patientRecordCode: "BA-01", patientName: "Bệnh nhân 1" },
        { patientRecordCode: "BA-02", patientName: "Bệnh nhân 2" },
        { patientRecordCode: "BA-03", patientName: "Bệnh nhân 3" },
        { patientRecordCode: "BA-01", patientName: "Bệnh nhân 1" },
        { patientRecordCode: "BA-02", patientName: "Bệnh nhân 2" },
        { patientRecordCode: "BA-03", patientName: "Bệnh nhân 3" },
        { patientRecordCode: "BA-01", patientName: "Bệnh nhân 1" },
        { patientRecordCode: "BA-02", patientName: "Bệnh nhân 2" },
        { patientRecordCode: "BA-03", patientName: "Bệnh nhân 3" }
    ]}
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



onMounted(() => loadSource())

</script>@/uses/layout