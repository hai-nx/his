<script setup lang="ts">
import { ref } from 'vue';
import { XItemType } from "@/components"
import { ReceptionModel, CareerModel, CountryModel, EthnicModel, GenderModel, PatientRecordModel, WardModel, DictionaryBase, ServiceModel, DepartmentModel, RoomModel } from '@/models';

import { careerService, countryService, departmentService, ethnicService, genderService, roomService, serviceService, wardService, liveAreaService, rightRouteTypeService } from '@/services';
import moment from 'moment';
import { useRouter } from "vue-router";
import { receptionService } from '@/services';
import { Modal, notification } from 'ant-design-vue';

const loading = ref<boolean>(false);
const title = ref('Đăng ký khám');
const breadcrumbs = ref<Array<XItemType>>([
    { key: '1', label: 'Đón tiếp', icon: '', path: 'reception' },
    { key: '2', label: 'Đăng ký khám', icon: '', path: '' }
]);

const router = useRouter()

const item = ref<ReceptionModel>({})

const age = ref<string | number>()
const address = ref<string>();
const patientObjectTypeId = ref<string>();
const receptionObjectTypeId = ref<string>();
const rightRouteTypeId = ref<string>();

const disableInsuranceInfo = ref<boolean>(false) // khi đối tượng không phải là bhyt thì khóa các trường liên quan bhyt

const genders = ref<Array<GenderModel>>([])
const ethnics = ref<Array<EthnicModel>>([])
const careers = ref<Array<CareerModel>>([])
const countries = ref<Array<CountryModel>>([])
const wards = ref<Array<WardModel>>([])
const services = ref<Array<ServiceModel>>([])
const departments = ref<Array<DepartmentModel>>([]);
const rooms = ref<Array<RoomModel>>([]);
const liveAreas = ref<Array<DictionaryBase>>([])
const rightRouteTypes = ref<Array<DictionaryBase>>([])

const fields = ref({ value: "id", label: "name" })
const fields2 = ref({ value: "id", label: "searchCode" })

function onBirthDateChange() {
    console.log(item.value.birthDate)
    // if (item.value.birthDate) {
    //     item.value.birthYear == item.value.birthDate.getFullYear();
    // }
}

function onWardSearchCodeChange() {
    var ward = wards.value.find(x => x.id === item.value.wardId);
    if (ward) {
        address.value = ward.provinceName + ' - ' + ward.districtName + ' - ' + ward.name;
    }
}

function onReceptionObjectType() {
    item.value.receptionObjectTypeId = Number(receptionObjectTypeId.value)
}

function onPatientObjectTypeChange() {
    item.value.patientObjectTypeId = Number(patientObjectTypeId.value)

    if (item.value.patientObjectTypeId == 1) {
        disableInsuranceInfo.value = false;
    } else {
        disableInsuranceInfo.value = true;
    }
}

function onRightRouteTypeChange() {
    item.value.rightRouteTypeId = Number(rightRouteTypeId.value)
}

function onSave() {
    receptionService.createOrEdit(item.value)
        .then(res => {
            if (res.data.isSucceeded) {
                notification.success({
                    message: "Thông báo",
                    description: "Thêm mới thành công!"
                })
            } else {
                Modal.warning({ content: res.data.message, });
            }
        })
        .catch(ex => {
            Modal.warning({ content: ex.message, });
        })
}

function onClose() {
    router.back()
}



function initData() {
    genderService.getAll().then(res => genders.value = res.data.result)

    careerService.getAll().then(res => careers.value = res.data.result)

    ethnicService.getAll().then(res => ethnics.value = res.data.result)

    countryService.getAll().then(res => countries.value = res.data.result)

    wardService.getAll().then(res => wards.value = res.data.result)

    serviceService.getAll().then(res => services.value = res.data.result)

    roomService.getAll().then(res => rooms.value = res.data.result)

    liveAreaService.getAll().then(res => liveAreas.value = res.data.result)

    rightRouteTypeService.getAll().then(res => rightRouteTypes.value = res.data.result)
}

function loadSource() {
    item.value.patientObjectTypeId = 1;
    item.value.receptionObjectTypeId = 1;
    item.value.receptionDate = new Date();

    if (item.value.genderId === undefined && genders.value.length > 0) {
        item.value.genderId = genders.value[0].id ?? undefined
    }

    if (item.value.careerId === undefined && careers.value.length > 0) {
        item.value.careerId = careers.value[0].id ?? undefined
    }

    if (item.value.countryId === undefined && countries.value.length > 0) {
        item.value.countryId = countries.value.find(x => x.code === 'VN')?.code ?? undefined
    }

    patientObjectTypeId.value = String(item.value.patientObjectTypeId);
    receptionObjectTypeId.value = String(item.value.receptionObjectTypeId);
}


initData();
loadSource();

</script>

<template>
    <x-layout :title="title" :breadcrumbs="breadcrumbs" :show-header="true">
        <div class="main">
            <div class="main-infomation">
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
                    <a-input type="date" id="txtBirthDate" v-model:value="item.birthDate"
                        @change="onBirthDateChange"></a-input>
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
                    <label class="ms-3">{{ age }}</label>
                </div>
                <div class="d-flex align-items-center justify-content-end">
                    <label for="txtGender">
                        <span>Giới tính</span>
                        <span class="text-danger ms-1">*</span>
                    </label>
                </div>
                <div>
                    <a-select id="txtGender" class="w-100" v-model:value="item.genderId" :options="genders"
                        :field-names="fields" :disabled="loading" show-search></a-select>
                </div>
                <div class="d-flex align-items-center justify-content-end">
                    <label for="txtCareer">Nghề nghiệp</label>
                </div>
                <div>
                    <a-select id="txtCareer" class="w-100" v-model:value="item.careerId" :options="careers"
                        :field-names="fields" :disabled="loading" show-search></a-select>
                </div>
                <div class="d-flex align-items-center justify-content-end">
                    <label for="txtEthnicity">Dân tộc</label>
                </div>
                <div>
                    <a-select id="txtEthnicity" class="w-100" v-model:value="item.ethnicId" :options="ethnics"
                        allow-clear :field-names="fields" :disabled="loading" show-search></a-select>
                </div>
                <div class="d-flex align-items-center justify-content-end">
                    <label for="txtCountry">Quốc tịch</label>
                </div>
                <div>
                    <a-select id="txtCountry" class="w-100" v-model:value="item.countryId" :options="countries"
                        :field-names="fields" :disabled="loading" show-search></a-select>
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
                <div>
                    <a-select id="txtWardSearchCode" class="w-100" v-model:value="item.wardId" :options="wards"
                        :field-names="fields2" :disabled="loading" show-search allow-clear
                        :dropdown-match-select-width="false" @change="onWardSearchCodeChange">
                        <template #option="{ searchCode, name }">
                            <div class="row">
                                <span class="col-3">{{ searchCode }}</span>
                                <span class="col-9">{{ name }}</span>
                            </div>
                        </template>
                    </a-select>
                </div>
                <div class="span-3/2">
                    <a-input id="txtWardSearchName" v-model:value="address"></a-input>
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
                    <a-select class="w-100" id="txtReceptionObjectType" v-model:value="receptionObjectTypeId"
                        @change="onReceptionObjectType">
                        <a-select-option value="1">Khám bệnh</a-select-option>
                        <a-select-option value="2">Cấp cứu</a-select-option>
                    </a-select>
                </div>

                <div class="d-flex align-items-center">
                    <label for="txtPatientName">Tiếp nhận lúc:</label>
                </div>
                <div class="d-flex align-items-center">
                    <label for="txtPatientName">{{ moment(item.receptionDate).format("DD/MM/YYYY HH:mm") }}</label>
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
                    <a-select class="w-100" id="txtService" v-model:value="item.serviceId" :options="services"
                        :field-names="fields" :disabled="loading" show-search allow-clear
                        :dropdown-match-select-width="false"></a-select>
                </div>
                <div class="d-flex align-items-center justify-content-end">
                    <label for="txtRoom">Phòng khám</label>
                </div>
                <div>
                    <a-select class="w-100" id="txtRoom" v-model:value="item.roomId" :options="rooms"
                        :field-names="fields" :disabled="loading" show-search allow-clear
                        :dropdown-match-select-width="false"></a-select>
                </div>
            </div>

            <div class="border-start my-2"></div>

            <div class="main-object">
                <div class="d-flex align-items-center justify-content-end">
                    <label for="txtPatientObjectType">Đối tượng</label>
                </div>
                <div class="d-flex align-items-center">
                    <a-select class="w-100" id="txtPatientObjectType" v-model:value="patientObjectTypeId"
                        @change="onPatientObjectTypeChange">
                        <a-select-option value="1">Bảo hiểm</a-select-option>
                        <a-select-option value="2">Viện phí</a-select-option>
                    </a-select>
                </div>
                <div class="d-flex align-items-center justify-content-end">
                    <label for="txtInsuranceCode">Số BHYT</label>
                </div>
                <div class="d-flex align-items-center">
                    <a-input id="txtInsuranceCode" placeholder="" :disabled="disableInsuranceInfo"
                        v-model:value="item.insuranceCode"></a-input>

                    <label for="txtLiveArea" class="text-nowrap mx-2">Nơi sống</label>
                    <a-select id="txtLiveArea" style="width: 100px;" :disabled="disableInsuranceInfo"
                        v-model:value="item.liveAreaId" :options="liveAreas" :field-names="fields" show-search
                        allow-clear :dropdown-match-select-width="false"></a-select>
                </div>
                <div class="d-flex align-items-center justify-content-end">
                    <label for="txtMediOrgCode">KCBBĐ</label>
                </div>
                <div class="d-flex align-items-center">
                    <a-input id="txtMediOrgCode" :disabled="disableInsuranceInfo"></a-input>
                </div>
                <div class="d-flex align-items-center justify-content-end">
                    <label for="txtInsuranceFromDate">Hạn thẻ</label>
                </div>
                <div class="d-flex align-items-center">
                    <a-input type="date" id="txtInsuranceFromDate" :disabled="disableInsuranceInfo"
                        v-model:value="item.insuranceFromDate"></a-input>
                    <label for="txtInsuranceToDate" class="mx-2">đến</label>
                    <a-input id="txtInsuranceToDate" type="date" :disabled="disableInsuranceInfo"
                        v-model:value="item.insuranceToDate"></a-input>
                </div>
                <div class="d-flex align-items-center justify-content-end">
                    <label for="txtInsuranceAddress">Địa chỉ thẻ</label>
                </div>
                <div class="d-flex align-items-center">
                    <a-input id="txtInsuranceAddress" :disabled="disableInsuranceInfo"
                        v-model:value="item.insuranceAddress"></a-input>
                </div>
                <div class="d-flex align-items-center justify-content-end">
                    <label for="txtrightRouteTypeId">Tuyến KCB</label>
                </div>
                <div class="d-flex align-items-center">
                    <a-select id="txtrightRouteTypeId" class="w-100" :disabled="disableInsuranceInfo"
                        v-model:value="rightRouteTypeId" :options="rightRouteTypes" :field-names="fields" show-search
                        allow-clear :dropdown-match-select-width="false" @select="onRightRouteTypeChange"></a-select>
                    <label class="mx-2">0%</label>
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
                <a-button type="primary" class="ms-2" @click.prevent="onSave">Lưu lại</a-button>
                <a-button class="ms-2" @click.prevent="onClose">Đóng</a-button>
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