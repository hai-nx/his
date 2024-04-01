<template>
    <x-layout class="x-container" :title="title" :breadcrumbs="breadcrumbs" :show-header="true" :show-footer="true">
        <template #action>
            <a-space>
                <label>Phòng tiếp đón:</label>
                <a-select :size="size" class="x-w160">
                    <a-select-option key="1" value="Phòng đón tiếp"></a-select-option>
                    <a-select-option key="2" value="Đón tiếp cấp cứu"></a-select-option>
                </a-select>
                <label>Số cửa:</label>
                <a-input-number :size="size" class="x-w100" :value="gate"></a-input-number>
                <label>Lấy số:</label>
                <a-input-number :size="size" class="x-w100" />
                <a-button :size="size" type="primary" @click="onCall">
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
                <h5 style="grid-column: 1/5;">Hành chính</h5>

                <label>Mã bệnh nhân</label>
                <a-input :size="size"></a-input>
                <label>Họ và tên</label>
                <a-input :size="size"></a-input>


                <label>Ngày sinh</label>
                <a-input type="date" :size="size"></a-input>

                <label>Năm sinh</label>
                <div class="d-flex" style="align-items: center;">
                    <a-input :size="size" style="width: 120px;"></a-input>
                    <label style="padding-left: 1rem; padding-right: 1rem;">Tuổi:</label>
                    <a-input :size="size" style="width: 120px;"></a-input>
                    <a-select :size="size" style="width: 100%;"></a-select>
                </div>


                <label>Giới tính</label>
                <a-select :size="size"></a-select>

                <label>Nghề nghiệp</label>
                <a-select :size="size"></a-select>


                <label>Dân tộc</label>
                <a-select :size="size"></a-select>

                <label>Quốc tịch</label>
                <a-select :size="size"></a-select>


                <label>Địa chỉ</label>
                <a-input :size="size" class="col-span-1-3"></a-input>


                <label>Tt/Hq/Xp</label>
                <a-input :size="size"></a-input>
                <a-input :size="size" class="col-span-2-2"></a-input>


                <label>Điện thoại</label>
                <a-input :size="size"></a-input>
                <label>Nơi làm việc</label>
                <a-input :size="size"></a-input>

                <label>CMND/CCCD</label>
                <a-input :size="size"></a-input>
                <label></label>
                <a-button :size="size">Thong tin khác</a-button>
            </div>
            <div class="x-patient-type-info">
                <h5 style="grid-column: 1/5;">Đăng ký khám</h5>

                <label>Ngày khám</label>
                <a-input :size="size" type="date"></a-input>
                <label>Đối tượng</label>
                <a-input :size="size"></a-input>

                <a-checkbox>TE</a-checkbox>
                <a-checkbox>Không giữ thẻ BHYT</a-checkbox>
                <a-checkbox style="grid-column: 3/5;">BN ưu tiên</a-checkbox>

                <label>Số thẻ</label>
                <a-input :size="size"></a-input>
                <label>Nơi sống</label>
                <a-input :size="size" type="date"></a-input>

                <label>KCBBĐ</label>
                <a-input :size="size" class="col-span-1-3"></a-input>

                <label>Hạn thẻ</label>
                <a-input :size="size" type="date"></a-input>
                <label>Đến</label>
                <a-input :size="size" type="date"></a-input>

                <label>Tuyến KCB</label>
                <a-input :size="size" type="date"></a-input>
                <label>Mức hưởng</label>
                <a-input :size="size" type="date"></a-input>

                <label style="grid-column: 1/4;">Ngày miễn cùng chi trả</label>
                <a-input :size="size" type="date"></a-input>

                <label style="grid-column: 1/4;">Ngày đóng đủ 5 năm liên tục</label>
                <a-input :size="size" type="date"></a-input>

                
            </div>
        </div>

    </x-layout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { PatientRecordModel } from "@/models";

import useLayoutDetail from "@/uses/layoutDetail";

const { title, breadcrumbs } = useLayoutDetail(loadSource);


const genders = ref([]);
const ethnics = ref([]);
const counttries = ref([]);
const wards = ref([]);

const size = ref("middle")



title.value = "Đăng ký khám";
breadcrumbs.value = [
    { key: '1', label: 'Đón tiếp', icon: '', path: '' },
    { key: '2', label: 'Danh sách tiếp đón', icon: '', path: '' },
    { key: '3', label: 'Đăng ký khám', icon: '', path: '' }
];

function loadSource() {
    console.log('gọi bệnh nhân')
}



const item = ref<PatientRecordModel>({});
const gate = ref<number>(1);


function onCall() {
    console.log('gọi bệnh nhân')
}

function onAddNew() {
    item.value = {};
}

function onSave() {
    item.value = {};
}


function onAddNewInvoice() {
    console.log('thêm hóa đơn thanh toán')
}

</script>

<style scoped>
.x-info {
    display: flex;
    flex-flow: row nowrap;
    gap: 32px;
}

.x-info label {
    text-align: end;
    padding-left: 1rem;
}

.x-patient-info {
    display: grid;
    grid-template-columns: max-content max-content max-content 1fr;
    gap: .5rem;
    align-items: center;
    flex: 1.5;
    padding: 1rem;
}

.x-patient-type-info {
    display: grid;
    grid-template-columns: max-content max-content max-content 1fr;
    gap: .5rem;
    flex: 1;
    padding: 1rem;
}



.col-span-1-3 {
    grid-column: 2/5;
}

.col-span-2-2 {
    grid-column: 3/5;
}
</style>