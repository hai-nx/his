<script lang="ts" setup>
import { ref } from 'vue'
import { XItemType } from "@/components"
import { ReceptionModel, GenderModel, WardModel, CareerModel, EthnicityModel, CountryModel } from "@/models";
import { genderService } from "@/services";
import XNavItem from '@/components/XNavItem.vue';


const title = ref("Đăng ký khám")
const breadcrumbs = ref<Array<XItemType>>([
    { key: '1', label: 'Đón tiếp', icon: '', path: 'reception' },
    { key: '2', label: 'Đăng ký khám', icon: '', path: '' }
])

const item = ref<ReceptionModel>({})

const genders = ref<Array<GenderModel>>([])
const ethnicities = ref<Array<EthnicityModel>>([])
const countries = ref<Array<CountryModel>>([])
const careers = ref<Array<CareerModel>>([])
const wards = ref<Array<WardModel>>([])

const fields = ref({ value: "id", label: "name" })


function loadSource() {
    genderService.getAll().then(res => genders.value = res.data.result)


    item.value = {
        patientCode: 'patientlkjsdjhsd kjds fkjhsd fkjh'
    }
}

loadSource()

</script>

<template>
    <x-layout :title="title" :breadcrumbs="breadcrumbs" :show-header="true" :show-footer="true">
        <div class="main">
            <div class="main-l">
                <div class="d-flex align-items-center justify-content-end">
                    <label for="txtPatientCode">Mã bệnh nhân</label>
                </div>
                <div>
                    <a-input v-modal:value="item.patientCode"/>
                </div>
                <div class="d-flex align-items-center justify-content-end">
                    <label for="txtPatientName">
                        <span class="text-danger me-1">*</span>
                        <span>Họ vầ tên</span>
                    </label>
                </div>
                <div>
                    <a-input id="txtPatientName" v-model:value="item.patientName"></a-input>
                </div>
                <div class="d-flex align-items-center justify-content-end">
                    <label for="txtBirthDate">Sinh ngày</label>
                </div>
                <div class="d-flex align-items-center">
                    <a-input type="date" id="txtBirthDate" v-model:value="item.birthDate"></a-input>
                </div>
                <div class="d-flex align-items-center justify-content-end">
                    <label for="txtBirthYear">
                        <span>Năm</span>
                        <span class="text-danger ms-1">*</span>
                    </label>
                </div>
                <div class="d-flex align-items-center">
                    <a-input-number id="txtBirthYear" style="width: 100px;"
                        v-model:value="item.birthYear"></a-input-number>
                    <label class="ms-3">{{ item.age }}</label>
                </div>
                <div class="d-flex align-items-center justify-content-end">
                    <label for="txtGender">
                        <span>Giới tính</span>
                        <span class="text-danger ms-1">*</span>
                    </label>
                </div>
                <div>
                    <a-select id="txtGender" class="w-100"  show-search></a-select>
                </div>
                <div class="d-flex align-items-center justify-content-end">
                    <label for="txtCareer">Nghề nghiệp</label>
                </div>
                <div>
                    <a-select id="txtCareer" class="w-100" show-search></a-select>
                </div>
                <div class="d-flex align-items-center justify-content-end">
                    <label for="txtEthnicity">Dân tộc</label>
                </div>
                <div>
                    <a-select id="txtEthnicity" class="w-100"  show-search></a-select>
                </div>
                <div class="d-flex align-items-center justify-content-end">
                    <label for="txtCountry">Quốc tịch</label>
                </div>
                <div>
                    <a-select id="txtCountry" class="w-100" show-search></a-select>
                </div>
                <div class="d-flex align-items-center justify-content-end">
                    <label for="txtAddress">Địa chỉ</label>
                </div>
                <div class="span-2/3">
                    <a-input id="txtAddress" v-model:value="item.address"></a-input>
                </div>
                <div class="d-flex align-items-center justify-content-end">
                    <label for="txtWardSearchCode">T/H/X</label>
                </div>
                <div class="d-flex">
                    <a-select id="txtWardSearchCode" show-search allow-clear
                        :dropdown-match-select-width="false" >
                        <template #option="{ searchCode, name }">
                            <div class="row">
                                <span class="col-3">{{ searchCode }}</span>
                                <span class="col-9">{{ name }}</span>
                            </div>
                        </template>
                    </a-select>
                    <div class="span-3/2">
                        <a-input id="txtWardSearchName"></a-input>
                    </div>
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
                    <a-select class="w-100" id="txtReceptionObjectType">
                        <a-select-option value="1">Khám bệnh</a-select-option>
                        <a-select-option value="2">Cấp cứu</a-select-option>
                    </a-select>
                </div>

                <div class="d-flex align-items-center">
                    <label for="txtPatientName">Tiếp nhận lúc:</label>
                </div>
                <div class="d-flex align-items-center">
                    <label for="txtPatientName">{{ item.receptionDate }}</label>
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
                    <a-select class="w-100" id="txtService" show-search allow-clear
                        :dropdown-match-select-width="false"></a-select>
                </div>
                <div class="d-flex align-items-center justify-content-end">
                    <label for="txtRoom">Phòng khám</label>
                </div>
                <div>
                    <a-select class="w-100" id="txtRoom" show-search allow-clear
                        :dropdown-match-select-width="false"></a-select>
                </div>
            </div>

            <div class="border-start"></div>

            <div class="main-r">
                <label>Thông tin thẻ BHYT</label>

            </div>
        </div>

        <template #footer>
            <div class="d-flex justify-content-end">
                <a-button type="primary">Kiểm tra thẻ BH</a-button>
                <a-button type="primary" class="ms-2">Bệnh nhân mới</a-button>
                <a-button type="primary" class="ms-2">Lưu lại</a-button>
                <a-button type="primary" class="ms-2">Đóng</a-button>
            </div>
        </template>
    </x-layout>
</template>

<style scoped>
.main {
    display: grid;
    grid-template-columns: 2fr auto minmax(450px, 1fr);
    text-wrap: nowrap;
    padding: .5rem;
    gap: .3rem .5rem;
    height: 100%;
}

.main label {
    display: flex;
    align-items: center;
    height: 100%;
}

.main-l {
    display: grid;
    grid-template-columns: auto minmax(auto, 160px) auto 1fr;
    grid-template-rows: repeat(10, auto) 1fr;
    gap: .3rem .5rem;
}

.main-r {
    display: grid;
    grid-template-columns: auto minmax(auto, 160px) auto minmax(auto, 160px) 1fr;
    grid-template-rows: repeat(10, auto) 1fr;
    gap: .3rem .5rem;
}
</style>