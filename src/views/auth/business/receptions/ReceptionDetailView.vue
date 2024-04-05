<script setup lang="ts">
import { ref } from 'vue';
import { XItemType } from "@/components"
import { CareerModel, CountryModel, EthnicModel, GenderModel } from '@/models';

import ReceptionModel from '@/types/reception'

const loading = ref<boolean>(false);
const title = ref('Đăng ký khám');
const breadcrumbs = ref<Array<XItemType>>([
    { key: '1', label: 'Đón tiếp', icon: '', path: 'reception' },
    { key: '2', label: 'Đăng ký khám', icon: '', path: '' }
]);

const item = ref<ReceptionModel>({})
const genders = ref<Array<GenderModel>>([])
const ethnicities = ref<Array<EthnicModel>>([])
const careers = ref<Array<CareerModel>>([])
const countries = ref<Array<CountryModel>>([])

const fields = ref({ value: "id", label: "name" })

</script>

<template>
    <x-layout :title="title" :breadcrumbs="breadcrumbs" :show-header="true">
        <div class="main">
            <div class="main-infomation">
                <div class="d-flex align-items-center justify-content-end">
                    <label for="txtPatientCode">Mã bệnh nhân</label>
                </div>
                <div>
                    <a-input-search />
                </div>
                <div class="d-flex align-items-center justify-content-end">
                    <label for="txtPatientName">
                        <span class="text-danger me-1">*</span>
                        <span>Họ vầ tên</span>
                    </label>
                </div>
                <div>
                    <a-input id="txtPatientName"></a-input>
                </div>
                <div class="d-flex align-items-center justify-content-end">
                    <label for="txtBirthDate">Sinh ngày</label>
                </div>
                <div class="d-flex align-items-center">
                    <a-input type="date" placeholder="dd/mm/yyyy" id="txtBirthDate"></a-input>
                    <!-- <a-input type="time" id="txtBirthTime" class="ms-1" style="width: 150px;"></a-input> -->
                </div>
                <div class="d-flex align-items-center justify-content-end">
                    <label for="txtBirthYear">
                        <span>Năm</span>
                        <span class="text-danger ms-1">*</span>
                    </label>
                </div>
                <div class="d-flex align-items-center">
                    <a-input-number id="txtBirthYear" style="width: 100px;"></a-input-number>
                    <label class="ms-3">Tuổi</label>
                </div>
                <div class="d-flex align-items-center justify-content-end">
                    <label for="txtGender">
                        <span>Giới tính</span>
                        <span class="text-danger ms-1">*</span>
                    </label>
                </div>
                <div>
                    <a-select id="txtGender" class="w-100" v-model:value="item.genderId" :options="genders" :field-names="fields" :disabled="loading">

                    </a-select>
                </div>
                <div class="d-flex align-items-center justify-content-end">
                    <label for="txtCareer">Nghề nghiệp</label>
                </div>
                <div>
                    <a-select id="txtCareer" class="w-100"></a-select>
                </div>
                <div class="d-flex align-items-center justify-content-end">
                    <label for="txtEthnicity">Dân tộc</label>
                </div>
                <div>
                    <a-select id="txtEthnicity" class="w-100"></a-select>
                </div>
                <div class="d-flex align-items-center justify-content-end">
                    <label for="txtCountry">Quốc tịch</label>
                </div>
                <div>
                    <a-select id="txtCountry" class="w-100"></a-select>
                </div>
                <div class="d-flex align-items-center justify-content-end">
                    <label for="txtAddress">Địa chỉ</label>
                </div>
                <div class="span-2/3">
                    <a-input id="txtAddress"></a-input>
                </div>
                <div class="d-flex align-items-center justify-content-end">
                    <label for="txtWardSearchCode">T/H/X</label>
                </div>
                <div class="span-2/3">
                    <a-input id="txtWardSearchCode"></a-input>
                </div>
                <div class="d-flex align-items-center justify-content-end">
                    <label for="txtMobile">Điện thoại</label>
                </div>
                <div>
                    <a-input id="txtMobile"></a-input>
                </div>
                <div class="d-flex align-items-center justify-content-end">
                    <label for="txtWorkplace">Nơi làm việc</label>
                </div>
                <div>
                    <a-input id="txtWorkplace"></a-input>
                </div>

                <div class="d-flex align-items-center justify-content-end">
                    <label for="txtReceptionObjectType">Đăng ký khám</label>
                </div>
                <div class="d-flex align-items-center">
                    <a-select class="w-100" disabled id="txtReceptionObjectType"></a-select>
                </div>

                <div class="d-flex align-items-center">
                    <label for="txtPatientName">Tiếp nhận lúc:</label>
                </div>
                <div class="d-flex align-items-center">
                    <label for="txtPatientName">12/12/2022 12:12</label>
                </div>

                <div class="d-flex align-items-center justify-content-end">
                    <label for="txtPatientName">Lý do khám</label>
                </div>
                <div class=" span-2/3">
                    <a-input id="txtPatientName"></a-input>
                </div>
                <div class="d-flex align-items-center justify-content-end">
                    <label for="txtService">Dịch vụ</label>
                </div>
                <div>
                    <a-select class="w-100" id="txtService"></a-select>
                </div>
                <div class="d-flex align-items-center justify-content-end">
                    <label for="txtRoom">Phòng khám</label>
                </div>
                <div>
                    <a-select class="w-100" id="txtRoom"></a-select>
                </div>
            </div>

            <div class="border-start my-2"></div>

            <div class="main-object">
                <div class="d-flex align-items-center justify-content-end">
                    <label for="txtPatientCode">Đối tượng</label>
                </div>
                <div class="d-flex align-items-center">
                    <a-input id="txtPatientCode"></a-input>
                </div>
                <div class="d-flex align-items-center justify-content-end">
                    <label for="txtPatientCode">Số BHYT</label>
                </div>
                <div class="d-flex align-items-center">
                    <a-input id="txtPatientCode" placeholder="xxx xxx xxx"></a-input>

                    <label for="txtLiveArea" class="text-nowrap">Nơi sống</label>
                    <a-select id="txtLiveArea" style="width: 100px;"></a-select>
                </div>
                <div class="d-flex align-items-center justify-content-end">
                    <label for="txtPatientCode">KCBBĐ</label>
                </div>
                <div class="d-flex align-items-center">
                    <a-input id="txtPatientCode"></a-input>
                </div>
                <div class="d-flex align-items-center justify-content-end">
                    <label for="txtPatientCode">Hạn thẻ</label>
                </div>
                <div class="d-flex align-items-center">
                    <a-input id="txtPatientCode"></a-input>

                    <label for="txtPatientCode">đến</label>
                    <a-input id="txtPatientCode"></a-input>
                </div>
                <div class="d-flex align-items-center justify-content-end">
                    <label for="txtPatientCode">Địa chỉ thẻ</label>
                </div>
                <div class="d-flex align-items-center">
                    <a-input id="txtPatientCode"></a-input>
                </div>
                <div class="d-flex align-items-center justify-content-end">
                    <label for="txtPatientCode">Tuyến KCB</label>
                </div>
                <div class="d-flex align-items-center">
                    <a-input id="txtPatientCode"></a-input>
                    <label for="txtPatientCode">0%</label>
                </div>
                <!-- <div class="d-flex align-items-center mb-2">
                    <label for="txtPatientCode">Ngày miễn cùng chi trả</label>
                </div>
                <div class="d-flex align-items-center mb-2">
                    <a-input id="txtPatientCode"></a-input>
                </div>
                <div class="d-flex align-items-center mb-2">
                    <label for="txtPatientCode">Ngày đủ 5 năm liên tục</label>
                </div>
                <div class="d-flex align-items-center mb-2">
                    <a-input id="txtPatientCode"></a-input>
                </div> -->
            </div>
        </div>

        <template #footer>
            <div class="d-flex justify-content-end">
                <a-button type="primary">Kiểm tra thẻ BH</a-button>
                <a-button type="primary" class="ms-2">Bệnh nhân mới</a-button>
                <a-button type="primary" class="ms-2">Lưu lại</a-button>
                <a-button class="ms-2">Đóng</a-button>
            </div>
        </template>
    </x-layout>
</template>

<style scoped>
.main {
    display: grid;
    grid-template-columns: 1fr auto auto;
    text-wrap: nowrap;
}

.main-infomation {
    display: grid;
    grid-template-columns: auto minmax(auto, 160px) auto 1fr;
    grid-template-rows: repeat(10, auto) 1fr;
    gap: .4rem .5rem;
    padding: .5rem 1rem;

}

.main-object {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: repeat(10, auto) 1fr;
    gap: .4rem .5rem;
    padding: .5rem 1rem;
}

.title {
    font-weight: 500;
}

.span-1\/2 {
    grid-column: 1 / span 2;
}

.span-1\/3 {
    grid-column: 1 / span 3;
}

.span-1\/4 {
    grid-column: 1 / span 4;
}

.span-2\/2 {
    grid-column: 2 / span 2;
}

.span-2\/3 {
    grid-column: 2 / span 3;
}

.span-2\/4 {
    grid-column: 2 / span 4;
}

.span-3\/2 {
    grid-column: 3 / span 2;
}
</style>