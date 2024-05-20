<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import dayjs, { Dayjs } from 'dayjs';
import { dateToISOString } from "@/utils";
import { PatientRecordModel, GetAllReceptionInputModel } from '@/models'

const title = ref<string>('Khám bệnh')

const fromDate = ref<Dayjs>(dayjs().hour(0).minute(0).second(0))
const toDate = ref<Dayjs>(dayjs().hour(23).minute(59).second(59))
const status = ref<string>("4")

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
    { patientRecordCode: 'BA-0101012', id: '11' },
    { patientRecordCode: 'BA-0101010', id: '12' },
    { patientRecordCode: 'BA-0101011', id: '13' },
    { patientRecordCode: 'BA-0101012', id: '14' },
    { patientRecordCode: 'BA-0101012', id: '15' },
    { patientRecordCode: 'BA-0101012', id: '16' },
    { patientRecordCode: 'BA-0101012', id: '17' },
    { patientRecordCode: 'BA-0101012', id: '18' },
    { patientRecordCode: 'BA-0101012', id: '19' },
    { patientRecordCode: 'BA-0101012', id: '20' },
    { patientRecordCode: 'BA-0101012', id: '21' },
    { patientRecordCode: 'BA-0101012', id: '22' }
]);
const columns = ref([
    { title: 'STT', key: 'name', dataIndex: 'name', width: 50, maxWidth: 50 },
    { title: 'Thao tác', key: 'action', dataIndex: 'name', width: 50, ellipsis: true },
    { title: 'Mã bệnh nhân', key: 'name', dataIndex: 'name', width: 50, ellipsis: true },
    { title: 'Tên bệnh nhân', key: 'patientRecordCode', dataIndex: 'patientRecordCode', width: 250 },
    { title: 'Tuổi', key: 'age', dataIndex: 'age', width: 50 },
]);

import type { TableProps, TableColumnType } from 'ant-design-vue';
const rowSelection: TableProps['rowSelection'] = {
    getCheckboxProps: (record: PatientRecordModel) => ({
        disabled: record.patientName === 'Disabled User', // Column configuration not to be checked
        name: record.patientName,
    }),
};

</script>

<template>
    <x-layout :title="title" :show-header="true">
        <div class="main">
            <div class="main-f">
                <label for="txFromDate">Từ ngày</label>
                <a-date-picker id="txFromDate" format="DD/MM/YYYY HH:mm" v-model:value="fromDate"
                    :allow-clear="false"></a-date-picker>
                <label for="txToDate">đến ngày</label>
                <a-date-picker id="txToDate" format="DD/MM/YYYY HH:mm" v-model:value="toDate"
                    :allow-clear="false"></a-date-picker>
                <label for="">Trạng thái</label>
                <a-select v-model:value="status" :allow-clear="false">
                    <a-select-option key="1" value="1">Chờ khám</a-select-option>
                    <a-select-option key="2" value="2">Đang khám</a-select-option>
                    <a-select-option key="3" value="3">Kết thúc khám</a-select-option>
                    <a-select-option key="4" value="4">Chờ khám + đang khám</a-select-option>
                    <a-select-option key="5" value="5">Tất cả</a-select-option>
                </a-select>
                <a-input placeholder="Tìm kiếm"></a-input>
                <a-button>Tìm kiếm</a-button>
            </div>

            <div class="main-i">
                <a-table :columns="columns" :data-source="items" :row-key="(record: PatientRecordModel) => record.id"
                    :row-selection="rowSelection" :pagination="false" bordered>
                    <template #bodyCell="{ column }">
                        <template v-if="column.key === 'action'">
                            <span>
                                <a>Invite</a>
                                <a-divider type="vertical" />
                                <a>Delete</a>
                                <a-divider type="vertical" />
                                <a class="ant-dropdown-link">
                                    More actions
                                    <down-outlined />
                                </a>
                            </span>
                        </template>
                    </template>
                </a-table>

                <div class="main-i-d">
                    <label>Mã bệnh nhân:</label>
                    <a-input :bordered="false" size="small" class="text-primary border-bottom border-bottom-dash" value="24000001" />
                    <label>Mã bệnh án:</label>
                    <a-input :bordered="false" size="small" class="text-primary border-bottom border-bottom-dash" value="24000001" />
                    <label>Họ và tên:</label>
                    <a-input :bordered="false" size="small" class="text-danger border-bottom col-span-2/3 border-bottom-dash" value="NGHIÊM XUÂN HẢI" />
                    <label>Giới tính:</label>
                    <a-input :bordered="false" size="small" class="text-primary border-bottom border-bottom-dash" value="Nam" />
                    <label>Ngày sinh:</label>
                    <a-input :bordered="false" size="small" class="text-primary border-bottom border-bottom-dash" value="26/02/1993" />
                    <label>Địa chỉ:</label>
                    <a-input :bordered="false" size="small" class="text-primary border-bottom border-bottom-dash col-span-2/3"
                        value="thôn Thọ Giáo, xã Tân Minh, huyện Thường Tín, tp Hà Nội" />
                    <label>Điện thoại:</label>
                    <a-input :bordered="false" size="small" class="text-primary border-bottom border-bottom-dash col-span-2/3" value="0868995125" />

                    <div class="col-span-1/4">
                        <br>
                    </div>
                    <label>Đón tiếp lúc:</label>
                    <a-input :bordered="false" size="small" class="text-primary border-bottom border-bottom-dash" value="19/05/2023" />
                    <label>Loại đón tiếp:</label>
                    <a-input :bordered="false" size="small" class="text-primary border-bottom border-bottom-dash" value="Khám bệnh" />
                    <label>Đối tượng:</label>
                    <a-input :bordered="false" size="small" class="text-primary border-bottom border-bottom-dash col-span-2/3" value="BHYT" />
                    <label>Số thẻ:</label>
                    <a-input :bordered="false" size="small" class="text-primary border-bottom border-bottom-dash col-span-2/3"
                        value="DN423423424000001" />

                    <div class="col-span-1/4">
                        <br>
                    </div>
                    <label>Yêu cầu khám:</label>
                    <a-input :bordered="false" size="small" class="text-primary border-bottom border-bottom-dash col-span-2/3"
                        value="Khám Nội (p301)" />
                    <label>Khoa phòng:</label>
                    <a-input :bordered="false" size="small" class="text-primary border-bottom border-bottom-dash col-span-2/3"
                        value="Khoa Khám Bệnh > Phòng khám Nội" />
                    <label>Bác sỹ khám:</label>
                    <a-input :bordered="false" size="small" class="text-primary border-bottom border-bottom-dash col-span-2/3" value="Trần Minh Ngọc" />


                </div>
            </div>
        </div>



        <template #action>
            <a-button type="primary">Khám bệnh</a-button>
        </template>
    </x-layout>
</template>

<style scoped>
.main {
    display: grid;
    grid-template-rows: auto 1fr;
    row-gap: .5rem;
    padding: .5rem;
    height: 100%;
}

.main-f {
    display: flex;
    flex-direction: row;
    text-wrap: nowrap;
    align-items: center;
}

.main-f>* {
    margin-right: .5rem;
}

.main-f input {
    width: 160px;
}

.main-f .ant-select {
    width: 220px;
}

.main-i {
    display: grid;
    grid-template-columns: 1fr minmax(400px, auto);
    column-gap: .5rem;
}

.main-i-d {
    display: grid;
    grid-template-columns: auto 1fr auto 1fr;
    grid-template-rows: repeat(20, auto) 1fr;
    column-gap: .5rem;
    row-gap: .3rem;
    text-wrap: nowrap;
    align-items: center;
}
.border-bottom-dash {
    border-bottom-style: dashed !important;
}
</style>
