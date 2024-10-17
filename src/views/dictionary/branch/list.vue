<script setup lang="ts">
import { ref } from 'vue'

const title = ref('Chi nhánh')
const breadcrumbs = ref([
    { key: "1", label: "Danh mục" },
    { key: "2", label: "Danh sách chi nhánh" },
])

function handleAdd() {
    console.log('show')
}

</script>

<template>
    <d-page-container :title="title" :breadcrumbs="breadcrumbs">
        <template #actions>
            <d-button type="primary" icon="bi bi-plus-lg" @click="handleAdd">
                <span>Thêm chi nhánh</span>
            </d-button>
        </template>
    </d-page-container>
</template>