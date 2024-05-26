<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import dayjs, { Dayjs } from 'dayjs';
import { dateToISOString } from "@/utils";
import { PatientRecordModel, GetAllReceptionInputModel } from '@/models'

const title = ref<string>('Khám bệnh')

const fromDate = ref<Dayjs>(dayjs().hour(0).minute(0).second(0))
const toDate = ref<Dayjs>(dayjs().hour(23).minute(59).second(59))
const status = ref<string>("4")

const size = ref<string>('default')

const items = ref<PatientRecordModel[]>([
    { patientCode: 'BN-0000001', patientRecordCode: 'BA-0101010', id: '1' },
    { patientCode: 'BN-0000002', patientRecordCode: 'BA-0101011', id: '2' },
    { patientCode: 'BN-0000003', patientRecordCode: 'BA-0101012', id: '3' },
    { patientCode: 'BN-0000004', patientRecordCode: 'BA-0101012', id: '4' },
    { patientCode: 'BN-0000005', patientRecordCode: 'BA-0101012', id: '5' },
    { patientCode: 'BN-0000006', patientRecordCode: 'BA-0101012', id: '6' },
    { patientCode: 'BN-0000007', patientRecordCode: 'BA-0101012', id: '7' },
    { patientCode: 'BN-0000008', patientRecordCode: 'BA-0101012', id: '8' },
    { patientCode: 'BN-0000009', patientRecordCode: 'BA-0101012', id: '9' },
    { patientCode: 'BN-0000010', patientRecordCode: 'BA-0101012', id: '10' },
    { patientCode: 'BN-0000011', patientRecordCode: 'BA-0101012', id: '11' },
    { patientCode: 'BN-0000012', patientRecordCode: 'BA-0101010', id: '12' },
    { patientCode: 'BN-0000013', patientRecordCode: 'BA-0101011', id: '13' },
    { patientCode: 'BN-0000014', patientRecordCode: 'BA-0101012', id: '14' },
    { patientCode: 'BN-0000015', patientRecordCode: 'BA-0101012', id: '15' },
    { patientCode: 'BN-0000016', patientRecordCode: 'BA-0101012', id: '16' },
    { patientCode: 'BN-0000017', patientRecordCode: 'BA-0101012', id: '17' },
    { patientCode: 'BN-0000018', patientRecordCode: 'BA-0101012', id: '18' },
    { patientCode: 'BN-0000019', patientRecordCode: 'BA-0101012', id: '19' },
    { patientCode: 'BN-0000020', patientRecordCode: 'BA-0101012', id: '20' },
    { patientCode: 'BN-0000021', patientRecordCode: 'BA-0101012', id: '21' },
    { patientCode: 'BN-0000022', patientRecordCode: 'BA-0101012', id: '22' }
]);
const columns = ref([
    { title: 'STT', key: 'name', dataIndex: 'name', width: 50, maxWidth: 50 },
    { title: 'Thao tác', key: 'action', dataIndex: 'name', width: 50, ellipsis: true },
    { title: 'Mã bệnh nhân', key: 'name', dataIndex: 'patientCode', width: 50, ellipsis: true },
    { title: 'Tên bệnh nhân', key: 'patientRecordCode', dataIndex: 'patientRecordCode', width: 250 },
    { title: 'Tuổi', key: 'age', dataIndex: 'age', width: 50 },
]);

const current = ref<PatientRecordModel>({})

const selectedRowKeys = ref<string[]>([])

// import type { TableProps, TableColumnType } from 'ant-design-vue';
// const rowSelection: TableProps['rowSelection'] = {
//     selectedRowKeys: selectedRowKeys,
// };


const customRow = (record: PatientRecordModel) => {
    return {
        onClick: () => {
            current.value = record;
            selectedRowKeys.value = [record.id ?? '']
            console.log('click row', record);
        }
    };
}

</script>

<template>
    <x-layout :title="title" :show-header="true">
        <div class="main">
            <div class="main-f">
                <label for="txFromDate">Từ ngày</label>
                <a-date-picker id="txFromDate" format="DD/MM/YYYY HH:mm" v-model:value="fromDate"
                    :allow-clear="false" :size="size"></a-date-picker>
                <label for="txToDate">đến ngày</label>
                <a-date-picker id="txToDate" format="DD/MM/YYYY HH:mm" v-model:value="toDate"
                    :allow-clear="false" :size="size"></a-date-picker>
                <label for="">Trạng thái</label>
                <a-select v-model:value="status" :allow-clear="false" :size="size">
                    <a-select-option key="1" value="1">Chờ khám</a-select-option>
                    <a-select-option key="2" value="2">Đang khám</a-select-option>
                    <a-select-option key="3" value="3">Kết thúc khám</a-select-option>
                    <a-select-option key="4" value="4">Chờ khám + đang khám</a-select-option>
                    <a-select-option key="5" value="5">Tất cả</a-select-option>
                </a-select>
                <a-input placeholder="Tìm kiếm" :size="size"></a-input>
                <a-button :size="size">Tìm kiếm</a-button>
            </div>

            <div class="main-i">
                <a-table :columns="columns" :data-source="items" scroll={{ y: 580 }}
                    row-key="id" 
                    :row-selection="{
                        selectedRowKeys: selectedRowKeys,
                        selections: false,
                        hideSelectAll: true,
                        hideDefaultSelections: true,
                        columnWidth: 15
                    }" :customRow="customRow" :pagination="false" bordered>
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

                <!-- <div>
                    <x-table :columns="columns" :data-source="items">
                        <template #column="column">
                            <h1>{{ column }}</h1>
                        </template>
                        
                    </x-table>
                </div> -->


                <div class="main-i-d">
                    <label>Mã bệnh nhân:</label>
                    <a-input :bordered="false" size="small" class="text-primary border-bottom border-bottom-dash"
                        v-model:value="current.patientCode" />
                    <label>Mã bệnh án:</label>
                    <a-input :bordered="false" size="small" class="text-primary border-bottom border-bottom-dash"
                        v-model:value="current.patientRecordCode" />
                    <label>Họ và tên:</label>
                    <a-input :bordered="false" size="small"
                        class="text-danger border-bottom col-span-2/3 border-bottom-dash" value="NGHIÊM XUÂN HẢI" />
                    <label>Giới tính:</label>
                    <a-input :bordered="false" size="small" class="text-primary border-bottom border-bottom-dash"
                        value="Nam" />
                    <label>Ngày sinh:</label>
                    <a-input :bordered="false" size="small" class="text-primary border-bottom border-bottom-dash"
                        value="26/02/1993" />
                    <label>Địa chỉ:</label>
                    <a-input :bordered="false" size="small"
                        class="text-primary border-bottom border-bottom-dash col-span-2/3"
                        value="thôn Thọ Giáo, xã Tân Minh, huyện Thường Tín, tp Hà Nội" />
                    <label>Điện thoại:</label>
                    <a-input :bordered="false" size="small"
                        class="text-primary border-bottom border-bottom-dash col-span-2/3" value="0868995125" />

                    <div class="col-span-1/4">
                        <br>
                    </div>
                    <label>Đón tiếp lúc:</label>
                    <a-input :bordered="false" size="small" class="text-primary border-bottom border-bottom-dash"
                        value="19/05/2023" />
                    <label>Loại đón tiếp:</label>
                    <a-input :bordered="false" size="small" class="text-primary border-bottom border-bottom-dash"
                        value="Khám bệnh" />
                    <label>Đối tượng:</label>
                    <a-input :bordered="false" size="small"
                        class="text-primary border-bottom border-bottom-dash col-span-2/3" value="BHYT" />
                    <label>Số thẻ:</label>
                    <a-input :bordered="false" size="small"
                        class="text-primary border-bottom border-bottom-dash col-span-2/3" value="DN423423424000001" />

                    <div class="col-span-1/4">
                        <br>
                    </div>
                    <label>Yêu cầu khám:</label>
                    <a-input :bordered="false" size="small"
                        class="text-primary border-bottom border-bottom-dash col-span-2/3" value="Khám Nội (p301)" />
                    <label>Khoa phòng:</label>
                    <a-input :bordered="false" size="small"
                        class="text-primary border-bottom border-bottom-dash col-span-2/3"
                        value="Khoa Khám Bệnh > Phòng khám Nội" />
                    <label>Bác sỹ khám:</label>
                    <a-input :bordered="false" size="small"
                        class="text-primary border-bottom border-bottom-dash col-span-2/3" value="Trần Minh Ngọc" />


                </div>
            </div>
        </div>



        <template #action>
            <a-button type="primary">Khám bệnh</a-button>
        </template>
    </x-layout>
</template>

<style scoped>
.xxx {
    overflow-y: scroll;
}


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
