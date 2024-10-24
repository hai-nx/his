<script setup lang="ts">
import { ref } from 'vue'
import { useLayout } from '@/utils/uses/layout'
import DetailView from './detail.vue'

const config = useLayout()
config.title = "Chi nhánh 2";
config.breadcrumbs = [
    { key: "1", label: "Danh mục" },
    { key: "2", label: "Danh sách chi nhánh" }
]

config.currentPage = 2
config.totalRowCount = 600

const columns = ref([
    {
        label: "Mã chi nhánh",
        key: "code",
        dataIndex: "code",
        width: 200,
    },
    {
        label: "Tên chi nhánh",
        key: "name",
        dataIndex: "name",
        width: 500,
    },
    {
        label: "Địa chỉ",
        key: "address",
        dataIndex: "address",
        width: 500,
    },
    {
        label: "Mã KCBBĐ",
        key: "mediOrgCode",
        dataIndex: "mediOrgCode",
        width: 120,
    },
    {
        label: "Mã KCBBĐ đúng tuyến",
        key: "mediOrgAcceptCode",
        dataIndex: "mediOrgAcceptCode",
        width: 500,
    },
    {
        label: "Mô tả",
        key: "description",
        dataIndex: "description",
        width: 500,
    },
    {
        label: "Trạng thái",
        key: "inactive",
        dataIndex: "inactive",
        width: 200,
    },
    { label: "Xử lý", key: "action", width: 100 },
]);

const showDetail = ref(false)

function handleAdd() {
    config.title = "chi nhanh 3"
    //showDetail.value = true
}

</script>

<template>
    <d-page-container :config="config">
        <template #actions>
            <d-button type="primary" rounded icon="bi bi-plus-lg" @click="handleAdd">
                <span>Thêm chi nhánh</span>
            </d-button>
        </template>

        <d-table :columns="columns">

        </d-table>
    </d-page-container>

    <DetailView v-model:visible="showDetail">
    </DetailView>
</template>