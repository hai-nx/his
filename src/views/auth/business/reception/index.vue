<script lang="ts" setup>
import { ref, onMounted } from "vue"
import { ReceptionModel, GetAllReceptionInputModel } from '@/models'
import { XItemType } from '@/components'
import { receptionService } from '@/services'
import router from '@/router'
import dayjs, { Dayjs } from 'dayjs';

import { dayjsToNumber } from '@/utils'

const title = ref("Danh sách bệnh nhân")
const currentPage = ref(1)
const pageSize = ref(20)
const totalRowCount = ref(0)

const fromDate = ref<Dayjs>(dayjs().hour(0).minute(0).second(0))
const toDate = ref<Dayjs>(dayjs().hour(23).minute(59).second(59))

const items = ref<ReceptionModel[]>([]);
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
  

function loadSource() {
    let filter: GetAllReceptionInputModel = {
        // receptionFromDateFilter: dayjsToNumber(fromDate.value),
        // receptionToDateFilter: dayjsToNumber(toDate.value)
    }

    receptionService.getAll(filter)
        .then(res => {
            console.log(res)
            items.value = res.data.result
        })
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




onMounted(() => {
    loadSource()
})

</script>

<template>
    <x-layout :title="title" :show-header="true">
        <div class="view">
            <div>
                <a-space direction="horizontal">
                    <label for="txFromDate">Từ ngày</label>
                    <a-date-picker id="txFromDate" format="DD/MM/YYYY HH:mm" v-model:value="fromDate" :allow-clear="false"></a-date-picker>
                    <label for="txToDate">đến ngày</label>
                    <a-date-picker id="txToDate" format="DD/MM/YYYY HH:mm" v-model:value="toDate" :allow-clear="false"></a-date-picker>
                    <a-button @click="loadSource">
                        Tìm kiếm
                    </a-button>
                </a-space>
            </div>
            <div>
                <a-table :columns="columns" :data-source="items" :pagination="false" bordered>
                </a-table>
            </div>
            <div>
                <x-pagination 
                    :current="currentPage" 
                    :page-size="pageSize" 
                    :total="totalRowCount"
                    @change="onCurrentPageChange" 
                    @pageSizeChange="onPageSizeChange" />
            </div>
        </div>
    </x-layout>
</template>

<style scoped>
.view {
    display: grid;
    grid-template-rows: auto 1fr auto;
    row-gap: .5rem;
    padding: .5rem;
    height: 100%;
}
</style>