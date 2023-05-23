<template>
    <div class="container">
        <div>
            <h6>HÀNH CHÍNH</h6>
        </div>
        <div class="border py-2 mb-2">
            <div class="row mx-0 mb-1">
                <div class="col-md-3 px-0">
                    <div class="row mx-0">
                        <div class="col-md-4 px-0">
                            <label class="ps-2">Mã BN</label>
                        </div>
                        <div class="col-md-4 px-0">
                            <a-input v-model:value="item.patientCode" :disabled="loading" />
                        </div>
                        <div class="col-md-4 px-0">
                            <label class="ps-2 text-danger">Họ tên</label>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 px-0">
                    <div class="row mx-0">
                        <a-input v-model:value="item.patientName" :disabled="loading" />
                    </div>
                </div>
                <div class="col-md-3 px-0">
                    <div class="row mx-0">
                        <div class="col-md-4 px-0">
                            <label class="ps-2">Ngày sinh</label>
                        </div>
                        <div class="col-md-6 px-0">
                            <a-date-picker v-model:value="item.dob" :disabled="loading" @change="handleDoBChange" format="DD/MM/YYYY"
                                class="w-100" />
                        </div>
                        <div class="col-md-2 px-0">
                            <label class="ps-2 text-danger">Năm</label>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 px-1">
                    <div class="row mx-0">
                        <div class="col-md-4 px-0">
                            <a-input v-model:value="item.year" :disabled="loading" />
                        </div>
                        <div class="col-md-2 px-0">
                            <a-input v-model:value="item.age" :disabled="loading" />
                        </div>
                        <div class="col-md-6 px-0">
                            <a-input v-model:value="item.ageType" disabled="true" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mx-0 mb-1">
                <div class="col-md-3 px-0">
                    <div class="row mx-0">
                        <div class="col-md-4 px-0">
                            <label class="ps-2 text-danger">Giới tính</label>
                        </div>
                        <div class="col-md-4 px-0">
                            <a-select :options="optionGenders" v-model:value="item.genderId" :disabled="loading" class="w-100" />
                        </div>
                        <div class="col-md-4 px-0">
                            <label class="ps-2">Nghề nghiệp</label>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 px-0">
                    <div class="row mx-0">
                        <a-select :options="optionCareers" v-model:value="item.careerId" :disabled="loading" />
                    </div>
                </div>
                <div class="col-md-3 px-0">
                    <div class="row mx-0">
                        <div class="col-md-4 px-0">
                            <label class="ps-2">Dân tộc</label>
                        </div>
                        <div class="col-md-8 px-0">
                            <a-select :options="optionEthnics" v-model:value="item.ethnicId" :disabled="loading" class="w-100" />
                        </div>
                    </div>
                </div>
                <div class="col-md-3 px-1">
                    <div class="row mx-0">
                        <div class="col-md-4 px-0">
                            <label class="ps-2 text-danger">Quốc tịch</label>
                        </div>
                        <div class="col-md-8 px-0">
                            <a-select :options="optionCountries" v-model:value="item.countryId" :disabled="loading" class="w-100" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mx-0 mb-1">
                <div class="col-md-3 px-0">
                    <div class="row mx-0">
                        <div class="col-md-4 px-0">
                            <label class="ps-2 text-danger">T/H/X</label>
                        </div>
                        <div class="col-md-4 px-0">
                            <a-input :disabled="loading" class="w-100" />
                        </div>
                        <div class="col-md-4 px-0">
                            <label class="ps-2 text-danger">Tỉnh (TP)</label>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 px-0">
                    <div class="row mx-0">
                        <div class="col-md-4 px-0">
                            <a-select :options="optionProvinces" v-model:value="item.provinceId" :disabled="loading" class="w-100" />
                        </div>
                        <div class="col-md-4 px-0">
                            <label class="ps-2 text-danger">Huyện (Q)</label>
                        </div>
                        <div class="col-md-4 px-0">
                            <a-select :options="optionDistricts" v-model:value="item.districtId" :disabled="loading" class="w-100" />
                        </div>
                    </div>
                </div>
                <div class="col-md-3 px-0">
                    <div class="row mx-0">
                        <div class="col-md-4 px-0">
                            <label class="ps-2 text-danger">Xã (P)</label>
                        </div>
                        <div class="col-md-4 px-0">
                            <a-select :options="optionWards" v-model:value="item.wardId" :disabled="loading" class="w-100" />
                        </div>
                        <div class="col-md-4 px-0">
                            <label class="ps-2 text-danger">Số nhà</label>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 px-1">
                    <div class="row mx-0">
                        <a-input v-model:value="item.address" :disabled="loading" class="w-100" />
                    </div>
                </div>
            </div>

            <div class="row mx-0 mb-1">
                <div class="col-md-6 px-0">
                    <div class="row mx-0">
                        <div class="col-md-2 px-0">
                            <label class="ps-2 text-danger">Địa chỉ BN</label>
                        </div>
                        <div class="col-md-10 px-0">
                            <a-input v-model:value="item.vir_address" :disabled="loading" class="w-100" />
                        </div>
                    </div>
                </div>
                <div class="col-md-3 px-0">
                    <div class="row mx-0">
                        <div class="col-md-4 px-0">
                            <label class="ps-2">CMND/CCCD</label>
                        </div>
                        <div class="col-md-8 px-0">
                            <a-input v-model:value="item.identificationNumber" :disabled="loading" class="w-100" />
                        </div>
                    </div>
                </div>
                <div class="col-md-3 px-1">
                    <div class="row mx-0">
                        <div class="col-md-4 px-0">
                            <label class="ps-2">Điện thoại</label>
                        </div>
                        <div class="col-md-8 px-0">
                            <a-input v-model:value="item.phoneNumber" :disabled="loading" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mx-0">
                <div class="col-md-3 px-0">
                    <div class="row mx-0">
                        <div class="col-md-4 px-0">
                            <label class="ps-2">Người nhà</label>
                        </div>
                        <div class="col-md-8 px-0">
                            <a-input v-model:value="item.relativeName" :disabled="loading" class="w-100" />
                        </div>
                    </div>
                </div>
                <div class="col-md-3 px-0">
                    <div class="row mx-0">
                        <div class="col-md-4 px-0">
                            <label class="ps-2">Địa chỉ NN</label>
                        </div>
                        <div class="col-md-8 px-0">
                            <a-input v-model:value="item.relativeAddress" :disabled="loading" />
                        </div>
                    </div>
                </div>
                <div class="col-md-3 px-0">
                    <div class="row mx-0">
                        <div class="col-md-4 px-0">
                            <label class="ps-2 text-danger">CCCD NN</label>
                        </div>
                        <div class="col-md-8 px-0">
                            <a-input v-model:value="item.relativeIdentificationNumber" :disabled="loading" />
                        </div>
                    </div>
                </div>
                <div class="col-md-3 px-1">
                    <div class="row mx-0">
                        <div class="col-md-4 px-0">
                            <label class="ps-2">Điện thoại NN</label>
                        </div>
                        <div class="col-md-8 px-0">
                            <a-input v-model:value="item.relativePhoneNumbar" :disabled="loading" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <h6>THÔNG TIN ĐĂNG KÝ KHÁM BỆNH</h6>
        </div>
        <div class="border py-2 mb-1">
            <div class="row mx-0 mb-1">
                <div class="col-md-3 px-0">
                    <div class="row mx-0">
                        <div class="col-md-4 px-0">
                            <label class="ps-2">Đối tượng</label>
                        </div>
                        <div class="col-md-8 px-0">
                            <a-select class="w-100" :disabled="loading" />
                        </div>
                    </div>
                </div>
                <div class="col-md-3 px-0">
                    <div class="row mx-0">
                        <div class="col-md-4 px-0">
                            <label class="ps-2">Tiếp nhận lúc</label>
                        </div>
                        <div class="col-md-8 px-0">
                            <a-date-picker class="w-100" format="DD/MM/YYYY HH:mm" :disabled="loading" />
                        </div>
                    </div>
                </div>
                <div class="col-md-3 px-0">
                    <div class="row mx-0">
                        <div class="col-md-4 px-0">
                            <label class="ps-2">Lý do tiếp nhận</label>
                        </div>
                        <div class="col-md-8 px-0">
                            <a-select class="w-100" :disabled="loading" />
                        </div>
                    </div>
                </div>
                <div class="col-md-3 px-1">
                    <div class="row mx-0">
                        <a-checkbox>Ưu tiên</a-checkbox>
                    </div>
                </div>
            </div>

            <div class="row mx-0 mb-1">
                <div class="col-md-6 px-0">
                    <div class="row mx-0">
                        <div class="col-md-2 px-0">
                            <label class="ps-2">Yêu cầu khám</label>
                        </div>
                        <div class="col-md-10 px-0">
                            <a-select class="w-100" :disabled="loading" />
                        </div>
                    </div>
                </div>
                <div class="col-md-6 px-0">
                    <div class="row mx-0">
                        <div class="col-md-2 px-0">
                            <label class="ps-2">Phòng khám</label>
                        </div>
                        <div class="col-md-10 px-0 pe-1">
                            <a-select class="w-100" :disabled="loading" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mx-0 mb-1">
                <div class="col-md-3 px-0">
                    <div class="row mx-0">
                        <div class="col-md-4 px-0">
                            <label class="ps-2">Số thẻ</label>
                        </div>
                        <div class="col-md-8 px-0">
                            <a-input class="w-100" :disabled="loading" />
                        </div>
                    </div>
                </div>
                <div class="col-md-3 px-0">
                    <div class="row mx-0">
                        <div class="col-md-4 px-0">
                            <a-checkbox>Check BHYT</a-checkbox>
                        </div>
                        <div class="col-md-4 px-0">
                            <a-checkbox>Sinh thẻ TE</a-checkbox>
                        </div>
                        <div class="col-md-4 px-0">
                            <a-button class="w-100" type="primary">
                                Lịch sử thẻ
                            </a-button>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 px-0">
                    <div class="row mx-0">
                        <div class="col-md-2 px-0">
                            <label class="ps-2">Nơi ĐKKCB</label>
                        </div>
                        <div class="col-md-2 px-0">
                            <a-input :disabled="loading" />
                        </div>
                        <div class="col-md-5 px-0">
                            <a-input :disabled="loading" />
                        </div>
                        <div class="col-md-3 px-1">
                            <a-input disabled="true" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mx-0 mb-1">
                <div class="col-md-3 px-0">
                    <div class="row mx-0">
                        <div class="col-md-4 px-0">
                            <label class="ps-2">Từ ngày</label>
                        </div>
                        <div class="col-md-8 px-0">
                            <a-date-picker class="w-100" :disabled="loading" />
                        </div>
                    </div>
                </div>
                <div class="col-md-3 px-0">
                    <div class="row mx-0">
                        <div class="col-md-4 px-0">
                            <label class="ps-2">Đến ngày</label>
                        </div>
                        <div class="col-md-8 px-0">
                            <a-date-picker class="w-100" :disabled="loading" />
                        </div>
                    </div>
                </div>
                <div class="col-md-6 px-0">
                    <div class="row mx-0">
                        <div class="col-md-2 px-0">
                            <label class="ps-2">Địa chỉ BH</label>
                        </div>
                        <div class="col-md-10 px-0 pe-1">
                            <a-input :disabled="loading" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mx-0 mb-1">
                <div class="col-md-3 px-0">
                    <div class="row mx-0">
                        <div class="col-md-4 px-0">
                            <label class="ps-2">Tuyến</label>
                        </div>
                        <div class="col-md-8 px-0">
                            <a-select class="w-100" :disabled="loading" />
                        </div>
                    </div>
                </div>
                <div class="col-md-3 px-0">
                    <div class="row mx-0">
                        <div class="col-md-6 px-2">
                            <a-checkbox>5 năm</a-checkbox>
                        </div>
                        <div class="col-md-6 px-0">
                            <a-checkbox>6 tháng</a-checkbox>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 px-0">
                    <div class="row mx-0">
                        <div class="col-md-4 px-0">
                            <label class="ps-2">Ngày đủ 5 năm</label>
                        </div>
                        <div class="col-md-8 px-0">
                            <a-date-picker class="w-100" :disabled="loading" />
                        </div>
                    </div>
                </div>
                <div class="col-md-3 px-0">
                    <div class="row mx-0">
                        <div class="col-md-4 px-0">
                            <label class="ps-2">TG hưởng ĐCT</label>
                        </div>
                        <div class="col-md-8 px-0 pe-1">
                            <a-date-picker class="w-100" :disabled="loading" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mx-0 mb-1">
                <div class="col-md-3 px-0">
                    <div class="row mx-0">
                        <div class="col-md-4 px-0">
                            <label class="ps-2">Mức hưởng</label>
                        </div>
                        <div class="col-md-8 px-0">
                            <a-input :disabled="loading" />
                        </div>
                    </div>
                </div>
                <div class="col-md-3 px-0">
                    <div class="row mx-0">
                        <div class="col-md-4 px-0">
                            <label class="ps-2">Nơi sống</label>
                        </div>
                        <div class="col-md-8 px-0 pe-1">
                            <a-select class="w-100" :disabled="loading" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mx-0 mb-1">
                <div class="col-md-6 px-0">
                    <div class="row mx-0">
                        <div class="col-md-2 px-0">
                            <label class="ps-2">Nơi chuyển</label>
                        </div>
                        <div class="col-md-2 px-0">
                            <a-input :disabled="loading" />
                        </div>
                        <div class="col-md-8 px-0">
                            <a-select class="w-100" :disabled="loading" />
                        </div>
                    </div>
                </div>
                <div class="col-md-6 px-0">
                    <div class="row mx-0">
                        <div class="col-md-2 px-0">
                            <label class="ps-2">Chẩn đoán TD</label>
                        </div>
                        <div class="col-md-2 px-0">
                            <a-input :disabled="loading" />
                        </div>
                        <div class="col-md-8 px-0 pe-1">
                            <a-select class="w-100" :disabled="loading" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mx-0 mb-1">
                <div class="col-md-6 px-0">
                </div>
                <div class="col-md-6 px-0">
                    <div class="row mx-0">
                        <div class="col-md-2 px-0">
                            <label class="ps-2">H.T chuyển</label>
                        </div>
                        <div class="col-md-10 px-0 pe-1">
                            <a-select class="w-100" :disabled="loading" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mx-0 mb-1">
                <div class="col-md-6 px-0">
                </div>
                <div class="col-md-6 px-0">
                    <div class="row mx-0">
                        <div class="col-md-2 px-0">
                            <label class="ps-2">Lý do chuyển</label>
                        </div>
                        <div class="col-md-10 px-0 pe-1">
                            <a-select class="w-100" :disabled="loading" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <a-button @click="reset" type="primary me-1">Nhập mới</a-button>
            <a-button @click="save" type="primary mx-1">Lưu</a-button>
            <a-button type="primary mx-1">Xóa</a-button>
            <a-button type="primary mx-1">In phiếu</a-button>
            <a-button type="primary mx-1">Xem phiếu</a-button>
            <a-button type="primary mx-1">In khác</a-button>
            <a-button type="primary mx-1">Dịch vụ CLS</a-button>
            <a-button type="primary mx-1">Khác</a-button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { Modal } from 'ant-design-vue'
import { TreatmentModel } from '@/models'
import { patientService } from '@/services'

export default defineComponent({
    name: 'AdmissionRegisterView',
    setup() {
        const item = ref<TreatmentModel>({
            id: undefined,
            code: '',
            patientId: undefined,
            patientCode: '',
            patientName: '',
            patientTypeId: 'FBE3F357-562E-4B3D-A0DB-39772B4FFC34',
            treatmentTypeId: undefined,
            year: 0,
            age: 0,
            ageType: 0,
            genderId: '',
            careerId: '',
            ethnicId: '',
            countryId: '',
            provinceId: '',
            districtId: '',
            address: '',
            dob: undefined,
            inTimeClinical: new Date()
        });
        const loading = ref(false);

        const optionGenders = ref<{ value: string, label: string }[]>([
            { value: '9260F520-9E08-4E42-B8AE-2D1907397BD6', label: '0 - Chưa xác định' },
            { value: '1B3EF3F7-EB71-4B9E-80E8-142DAC943C45', label: '1 - Nam' },
            { value: '8F6966E7-CA6C-48C2-9B73-3D70170CA0C5', label: '0 - Nữ' },
        ]);

        const optionCareers = ref<{ value: string, label: string }[]>([
            { value: 'AB65E401-54D8-402C-83A7-CB728B44FD3A', label: 'Nông dân' },
            { value: '0ADEE3A4-ACA0-4238-A512-7EE92A500DBB', label: 'Lực lượng vũ trang' },
            { value: '616E192F-FC84-4D15-BD05-5DAC98068C6D', label: 'Trẻ <6 tuổi đi học, <15 tuổi không đi học' },
        ]);

        const optionEthnics = ref<{ value: string, label: string }[]>([
            { value: 'EA7EFD50-2B11-4325-8BD9-E8F9D64633E1', label: 'Ba na' },
            { value: 'D5F68E46-4E5A-4091-85D1-263B718E6D2A', label: 'Bố y' },
            { value: 'D1E1FC6B-9F94-4C7C-A5EA-BEA5B25F767E', label: 'Brâu' },
        ]);

        const optionCountries = ref<{ value: string, label: string }[]>([
            { value: 'F12FF379-67F5-4A61-91B5-79FBC3693B0A', label: 'Việt Nam' }
        ]);

        const optionProvinces = ref<{ value: string, label: string }[]>([
            { value: 'F12FF379-67F5-4A61-91B5-79FBC3693B0A', label: 'Việt Nam' }
        ]);

        const optionDistricts = ref<{ value: string, label: string }[]>([
            { value: 'F12FF379-67F5-4A61-91B5-79FBC3693B0A', label: 'Việt Nam' }
        ]);

        const optionWards = ref<{ value: string, label: string }[]>([
            { value: 'F12FF379-67F5-4A61-91B5-79FBC3693B0A', label: 'Việt Nam' }
        ]);


        const handleDoBChange = () => {
            
            // if (item.value.dob !== undefined) {
            //     console.log(item.value.dob!.getFullYear())
            //     item.value.year = item.value.dob!.getFullYear();
            // }
                
        }

        const save = () => {
            loading.value = true;
            patientService.registerOrEdit(item.value)
                .then(res => {
                    if (res) {
                        console.log("DONE");
                    } else {
                        Modal.error({ content: res, okText: "Đồng ý" });
                    }
                })
                .catch(error => {
                    console.log(error)
                    Modal.error({ content: error.message, okText: "Đồng ý" });
                })
                .finally(() => {
                    loading.value = false;
                });
        }

        const reset = () => {
            item.value = {
                id: undefined,
                code: '',
                patientId: undefined,
                patientCode: '',
                patientName: '',
                patientTypeId: 'FBE3F357-562E-4B3D-A0DB-39772B4FFC34',
                treatmentTypeId: undefined,
                year: 0,
                age: 0,
                ageType: 0,
                genderId: undefined,
                careerId: undefined,
                ethnicId: undefined,
                countryId: undefined,
                provinceId: undefined,
                districtId: undefined,
                address: '',
                inTimeClinical: new Date()
            };
        }

        return {
            loading,
            item,
            optionGenders,
            optionCareers,
            optionEthnics,
            optionCountries,
            optionProvinces,
            optionDistricts,
            optionWards,

            handleDoBChange,
            save,
            reset
        }
    },
});
</script>

<style scoped></style>