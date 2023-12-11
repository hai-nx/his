<template>
    <x-layout :title="title" :breadcrumbs="breadcrumbs" :show-header="true">
        <template #action>
            <a-button type="primary" class="ms-2" @click="onShowClinicalDetail">Bắt đầu khám</a-button>
            <a-button type="primary" class="ms-2" @click="onShowExaminationDetail">Khám bệnh</a-button>
            <a-button type="primary" class="ms-2" @click="onShowExaminationDetail">Xử trí</a-button>
            <a-button type="primary" class="ms-2" @click="onShowExaminationDetail">Dịch vụ</a-button>
            <a-button type="primary" class="ms-2" @click="onShowExaminationDetail">thuốc, vật tư</a-button>
            <a-button type="primary" class="ms-2" @click="onShowExaminationDetail">Thanh toán</a-button>
        </template>

        <div class="d-flex flex-column py-3 px-2">
            <div class="d-flex flex-row align-items-center mb-3">
                <label>Từ ngày</label>
                <a-date-picker class="ms-2"></a-date-picker>
                <label class="ms-2">Đến ngày</label>
                <a-date-picker class="ms-2"></a-date-picker>
                <label class="ms-2">Trạng thái</label>
                <a-select class="w-150 ms-2" :options="statusOptions"></a-select>
                <label class="ms-2">Phòng khám</label>
                <a-select class="w-150 ms-2" :options="statusOptions"></a-select>
                <a-input class="w-200 ms-2"></a-input>
                <a-button class="ms-2">Tìm kiếm</a-button>
            </div>

            <div class="d-flex align-items-stretch">
                <div class="flex-grow-1 align-items-stretch">
                    <div>
                        <a-table 
                            :columns="columns" 
                            :data-source="items" 
                            :pagination="false" 
                            :scroll="{ x: 'max-content' }"
                            select
                            bordered 
                            size="middle" 
                            :customRow="customRow"
                            :rowClassName="'bg-primary'">
                        </a-table>
                    </div>

                    <x-pagination class="mt-3" :current="currentPage" :page-size="pageSize" :total="totalRowCount"
                        @change="onCurrentPageChange" @pageSizeChange="onPageSizeChange" />
                </div>

                <div class="border ms-2 px-3">
                    <a-tabs size="small" bordered>
                        <a-tab-pane key="1" tab="Bệnh nhân">
                            <ClinicalInfoPatientView :data-source="current" />
                        </a-tab-pane>
                        <a-tab-pane key="2" tab="Công khám">Tab 2</a-tab-pane>
                        <a-tab-pane key="3" tab="Xét nghiệm">Tab 3</a-tab-pane>
                        <a-tab-pane key="4" tab="CĐHA">Tab 3</a-tab-pane>
                        <a-tab-pane key="5" tab="Thuốc, vật tư">Tab 3</a-tab-pane>
                        <a-tab-pane key="6" tab="Khác">Tab 3</a-tab-pane>
                    </a-tabs>
                </div>
            </div>
        </div>
    </x-layout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { PatientRecordModel } from "@/models";
import { XItemType } from "@/components";
import ClinicalInfoPatientView from "./ClinicalInfoPatientView.vue";
import router from "@/router";

import { SelectProps } from "ant-design-vue";

const title = ref('Khám bệnh');
const breadcrumbs = ref<Array<XItemType>>([
    { key: '1', label: 'Đón tiếp', icon: '', path: '' },
    { key: '2', label: 'Danh sách bệnh nhân', icon: '', path: '' }
]);


const statusOptions = ref<SelectProps['options']>([
    { value: '0', label: 'Tất cả' },
    { value: '1', label: 'Đang chờ' },
    { value: '2', label: 'Đang khám' },
    { value: '3', label: 'Đã xử trí' },
])

const columns = ref([
    { title: 'STT', key: 'name', dataIndex: 'name', width: 50, maxWidth: 50 },
    { title: 'Thao tác', key: 'name', dataIndex: 'name', width: 50, ellipsis: true },
    { title: 'Mã bệnh nhân', key: 'name', dataIndex: 'name', width: 50, ellipsis: true },
    { title: 'Tên bệnh nhân', key: 'patientRecordCode', dataIndex: 'patientRecordCode', width: 250 },
    { title: 'Tuổi', key: 'age', dataIndex: 'age', width: 50 },
]);
const items = ref<PatientRecordModel[]>([
    { patientRecordCode: 'BA-0101010', id: '1' },
    { patientRecordCode: 'BA-0101011', id: '2' },
    { patientRecordCode: 'BA-0101012', id: '3' },
    { patientRecordCode: 'BA-0101012', id: '4' },
    { patientRecordCode: 'BA-0101012', id: '5' },
    { patientRecordCode: 'BA-0101012', id: '6' },
    { patientRecordCode: 'BA-0101012', id: '7' },
    { patientRecordCode: 'BA-0101012', id: '8' },
    { patientRecordCode: 'BA-0101012', id: '9' },
    { patientRecordCode: 'BA-0101012', id: '10' },
    { patientRecordCode: 'BA-0101012', id: '11' }
]);

/* dòng đang chọn */
const current = ref<PatientRecordModel>({});

const totalRowCount = ref(0);
const currentPage = ref(1);
const pageSize = ref(20);


function loadSource() {
    console.log('load')
}

function customRow(record: any, index: any) {
    return {
        onClick: (event: any) => {
            current.value = record;

            console.log(current.value.id)
        }
    };
}

function onShowExaminationDetail() {
    console.log('exam')
    router.push({ name: 'clinical-detail' })
}

function onShowClinicalDetail() {
    router.push({ name: 'clinical-detail' })
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

<style>
.w-150 {
    width: 150px;
}

.w-200 {
    width: 200px;
}

.mw-360 {
    min-width: 360px;
}
</style>