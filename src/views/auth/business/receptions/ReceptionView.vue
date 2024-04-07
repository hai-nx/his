<script setup lang="ts">
import { ref, onMounted, h, toRefs } from 'vue'
import { ReceptionModel, GetAllReceptionInputModel } from '@/models'
import { XItemType } from '@/components';
import { receptionService } from '@/services'
import router from '@/router';

const title = ref('Danh sách bệnh nhân');
const breadcrumbs = ref<Array<XItemType>>([
    { key: '1', label: 'Đón tiếp', icon: '', path: '' },
    { key: '2', label: 'Danh sách bệnh nhân', icon: '', path: '' }
]);

const columns = ref([
    { title: 'Ngày đón tiếp', key: 'receptionDate', dataIndex: 'receptionDate', width: 150 },
    { title: 'Mã BA', key: 'patientRecordCode', dataIndex: 'patientRecordCode', width: 150 },
    { title: 'Mã BN', key: 'patientCode', dataIndex: 'patientCode', width: 150 },
    { title: 'Tên bệnh nhân', key: 'patientName', dataIndex: 'patientName', width: 250 },
    { title: 'Ngày sinh', key: 'birthDate', dataIndex: 'birthDate', width: 100 },
    { title: 'Giới tính', key: 'genderName', dataIndex: 'genderName', width: 100 },
    { title: 'Địa chỉ', key: 'adress', width: 300 },
    { title: 'Phòng khám', key: 'executeRoomName', width: 150 },
    { title: 'Dịch vụ khám', key: 'serviceName', width: 150 },
    { title: 'Bác sĩ khám bệnh', key: 'executeUserName', width: 150 },
    { title: 'STT khám', key: 'sortOrder', width: 100 },
    { title: 'Người đăng ký', key: 'userName', width: 150 },
]);
const items = ref<ReceptionModel[]>([]);
const filter = ref<GetAllReceptionInputModel>({});

const totalRowCount = ref(0);
const currentPage = ref(1);
const pageSize = ref(20);

function loadSource() {
    receptionService.getAll(filter.value)
    .then(res => {
        console.log(res)
        items.value = res.data.result
    })


    // items.value = [
    //     { patientCode: "1" },
    //     { patientCode: "1" },
    //     { patientCode: "1" },
    //     { patientCode: "1" },
    //     { patientCode: "1" },
    //     { patientCode: "1" },
    //     { patientCode: "1" },
    //     { patientCode: "1" },
    //     { patientCode: "1" },
    //     { patientCode: "1" },
    //     { patientCode: "1" },
    // ]
}


function onShowDetail() {
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

</script>

<template>
    <x-layout :title="title" :breadcrumbs="breadcrumbs" :show-header="true">
        <template #action>
            <a-button type="primary" class="mx-1" @click="onShowDetail">
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

        <div class="grid-container p-2">
            <div class="d-flex flex-row align-items-center text-nowrap">
                <label>Từ ngày</label>
                <a-input type="date" class="ms-2"></a-input>
                <label class="ms-2">Đến ngày</label>
                <a-input type="date" class="ms-2"></a-input>
                <a-button class="ms-2">
                    Tìm kiếm
                </a-button>
            </div>

            <div>
                <a-table :columns="columns" :data-source="items" bordered :pagination="false"></a-table>
            </div>

            <div class="row">
                <x-pagination :current="currentPage" :page-size="pageSize" :total="totalRowCount"
                    @change="onCurrentPageChange" @pageSizeChange="onPageSizeChange" />
            </div>
        </div>
    </x-layout>
</template>

<style scoped>
.grid-container {
    display: grid;
    grid-template-rows: auto 1fr auto;
    row-gap: .5rem;
    height: 100%
}

</style>
