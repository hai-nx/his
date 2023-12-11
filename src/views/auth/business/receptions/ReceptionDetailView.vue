<template>
    <x-layout :title="title" :breadcrumbs="breadcrumbs" :show-header="true" :show-footer="true">
        <template #action>
            <a-button type="primary">
                <i class="bi bi-plus-lg me-2"></i>
                <span>Lưu (Ctrl + S)</span>
            </a-button>
        </template>
    </x-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { XItemType } from '@/components';

const title = ref('Đăng ký khám');
const breadcrumbs = ref<Array<XItemType>>([
    { key: '1', label: 'Đón tiếp', icon: '', path: '' },
    { key: '2', label: 'Danh sách tiếp đón', icon: '', path: '' },
    { key: '3', label: 'Đăng ký khám', icon: '', path: '' }
]);

</script>