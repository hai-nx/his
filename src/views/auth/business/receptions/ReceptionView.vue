<template>
    <x-layout :title="title" :breadcrumbs="breadcrumbs" :show-footer="false">
        <template #action>
            <a-button type="primary" @click="showReceptionDetail">Đón tiếp</a-button>
            <a-dropdown-button class="ms-2">
                Báo cáo
                <template #overlay>
                    <a-menu>
                        <a-menu-item key="1">
                            <i class="bi bi-dot"></i>
                            Phiếu giữ thẻ BHYT
                        </a-menu-item>
                        <a-menu-divider />
                        <a-menu-item key="2">
                            <i class="bi bi-dot"></i>
                            Sổ khám bệnh
                        </a-menu-item>
                        <a-menu-item key="3">
                            <i class="bi bi-dot"></i>
                            Báo cáo hoạt động khám bệnh
                        </a-menu-item>
                    </a-menu>
                </template>
            </a-dropdown-button>
        </template>

        <div class="py-3 px-2">
            <form class="form-inline" action="/action_page.php">
                <label for="fromDate">Từ ngày:</label>
                <a-date-picker id="fromDate" format="DD/MM/YYYY HH:mm" :allowClear="false" :showTime="true"></a-date-picker>
                <label for="toDate">Đến ngày:</label>
                <a-date-picker id="toDate" format="DD/MM/YYYY HH:mm" :allowClear="false" :showTime="true"></a-date-picker>
                <label for="toDate">Trạng thái:</label>
                <a-select style="width: 220px">
                    <a-select-option key="1" value="Chưa bắt đầu"></a-select-option>
                    <a-select-option key="2" value="Chưa bắt đầu 123123 1"></a-select-option>
                    <a-select-option key="3" value="Chưa bắt đầu 12312312312312"></a-select-option>
                </a-select>
                <a-input type="text" id="search" placeholder="Tìm kiếm theo mã bệnh nhân, tên bệnh nhân, ..."></a-input>
                <a-button>Tìm kiếm</a-button>
            </form>

            <a-table :columns="columns" :data-source="items" bordered scroll={{ x: 1000 }} class="mb-2"></a-table>

            <div style="display: flex; justify-content: end; align-items:">
                <a-pagination :total="pageTotal" :page-size="pageSize" :current="pageCurrent"/>
            </div>
        </div>


    </x-layout>
</template>

<script lang="ts">
import { ReceptionModel, ReceptionRequestModel } from '@/models'
import { defineComponent, ref } from 'vue'
import { receptionService } from '@/services'
import { XItemType } from '@/components';

export default defineComponent({
    name: 'ReceptionView',
    setup() {
        const breadcrumbs = ref<Array<XItemType>>([
            { key: '1', label: 'Đón tiếp', icon: '', path: '' },
            { key: '2', label: 'Danh sách bệnh nhân', icon: '', path: '' }
        ]);
        const title = ref<string>('Danh sách bệnh nhân đăng ký khám');
        const columns = ref([
            { title: 'Ngày đón tiếp', key: 'code', dataIndex: 'code', width: 150 },
            { title: 'Mã BN', key: 'name', dataIndex: 'name', width: 150 },
            { title: 'Tên bệnh nhân', key: 'description', dataIndex: 'description', width: 250 },
            { title: 'Số BHYT', key: 'inactive', dataIndex: 'inactive', width: 200 },
            { title: 'Giới tính', key: 'action', width: 100 },
            { title: 'Tuổi', key: 'action', width: 100 },
            { title: 'Địa chỉ', key: 'action', width: 300 },
            { title: 'Phòng khám', key: 'action', width: 150 },
            { title: 'Dịch vụ khám', key: 'action', width: 150 },
            { title: 'Bác sĩ khám bệnh', key: 'action', width: 150 },
            { title: 'STT khám', key: 'action', width: 100 },
            { title: 'Người đăng ký', key: 'action', width: 150 },
        ]);
        const items = ref<ReceptionModel[]>([]);

        const pageTotal = ref(500)
        const pageSize = ref(20)
        const pageCurrent = ref(1)


        const showReceptionDetail = () => {
            //router.push({ name: 'reception-detail' });
            getAll();
        }

        const getAll = () => {
            let input: ReceptionRequestModel = {
                departmentId: "142ECB02-836B-4824-9B71-F18BCA299658",
                roomId: "991184C1-3FD2-4D15-8977-D1DDA4EC5ACB",
                receptionFromDate: new Date(),
                receptionToDate: new Date()
            }
            receptionService.getAll(input).then(res => { items.value = res.data.items })
        }

        return {
            title,
            breadcrumbs,
            columns,
            items,
            pageSize,
            pageCurrent,
            pageTotal,
            showReceptionDetail,
            getAll
        }
    },
})

</script>

<style>
.form-inline {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    padding: .5rem;
}

.form-inline>* {
    margin-right: .5rem;
}

.form-inline input {
    width: 320px;
}

.table {
    margin-left: .5px;
    margin-right: .5px;
}

@media (max-width: 800px) {
    .form-inline>* {
        margin-right: 0;
        margin-bottom: .5rem;
        width: 100%;
    }

    .form-inline input {
        width: 100%;
    }

    .form-inline {
        flex-direction: column;
        align-items: stretch;
    }
}
</style>