<template>
    <x-layout class="x-container" :title="title" :breadcrumbs="breadcrumbs" :show-header="true" :show-footer="true">
        <template #action>
            <a-space>
                <label>Phòng tiếp đón:</label>
                <a-select class="x-w160">
                    <a-select-option key="1" value="Phòng đón tiếp"></a-select-option>
                    <a-select-option key="2" value="Đón tiếp cấp cứu"></a-select-option>
                </a-select>
                <label>Số cửa:</label>
                <a-input-number class="x-w100" :value="gate"></a-input-number>
                <label>Lấy số:</label>
                <a-input-number class="x-w100" />
                <a-button type="primary" @click="onCall">
                    <template #icon>
                        <i class="bi bi-megaphone me-2"></i>
                    </template>
                    <span>Gọi</span>
                </a-button>
            </a-space>
        </template>

        <template #footer>
            <a-space align="end">
                <a-button type="primary" @click="onSave">
                    <i class="bi bi-save me-2"></i>
                    <span>Lưu</span>
                </a-button>
            </a-space>
        </template>

        <div class="x-info">
            <div class="x-patient-info">
                <label>Mã bệnh nhân:</label>
                <a-input></a-input>

                <label>Họ và tên:</label>
                <a-input></a-input>


                <label>Ngày sinh:</label>
                <a-input></a-input>

                <label>Năm sinh:</label>
                <a-input></a-input>
                <label>Tuổi:</label>
                <a-input></a-input>
                <a-select></a-select>


                <label>Giới tính:</label>
                <a-input></a-input>

                <label>Nghề nghiệp:</label>
                <a-input></a-input>


                <label>Dân tộc:</label>
                <a-input></a-input>

                <label>Quốc tịch:</label>
                <a-input></a-input>


                <label>Địa chỉ:</label>
                <a-input></a-input>


                <label>Ttp/Hq/Xp:</label>
                <a-input></a-input>
                <a-input></a-input>


                <label>Nơi làm việc:</label>
                <a-input></a-input>

                <label>Điện thoại:</label>
                <a-input style="width: 12rem;" size="small"></a-input>
            </div>
            <div class="x-patient-type-info">
                <label>Ngày khám:</label>
                <a-input></a-input>
            </div>
        </div>

    </x-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { XItemType } from '@/components';
import { PatientRecordModel } from "@/models";

import useLayoutDetail from "@/uses/layoutDetail";

const { title, breadcrumbs } = useLayoutDetail(loadSource);


title.value = "hahaha";

function loadSource() {
    console.log('gọi bệnh nhân')
}


// const title = ref('Đăng ký khám');
// const breadcrumbs = ref<Array<XItemType>>([
//     { key: '1', label: 'Đón tiếp', icon: '', path: '' },
//     { key: '2', label: 'Danh sách tiếp đón', icon: '', path: '' },
//     { key: '3', label: 'Đăng ký khám', icon: '', path: '' }
// ]);

const item = ref<PatientRecordModel>({});

const gate = ref<number>(1);


function onCall() {
    console.log('gọi bệnh nhân')
}

function onNew() {
    item.value = {};
}

function onSave() {
    item.value = {};
}


function onNewInvoice() {
    console.log('thêm hóa đơn thanh toán')
}

</script>

<style scoped>
.x-container {
    margin-left: auto;
    margin-right: auto;
}

.x-info {
    display: flex;
    flex-flow: row nowrap;
    gap: 8px;
}

@media screen and (max-width: 780px) {
    /* .x-container {
        max-width: 1320px;
    } */

    .x-info {
        display: flex;
        flex-direction: column;
    }
}




.x-patient-info {
    flex: 1;
}

.x-patient-type-info {
    flex: 1;
}



.x-w100 {
    width: 100px;
}

.x-w160 {
    width: 160px;
}
</style>