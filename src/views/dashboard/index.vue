<script setup lang="ts">
import { ref } from 'vue';


const title = ref("Bàn làm việc")


function hihi(payload: any) {
    console.log(payload)
}

import type { MenuProps } from 'ant-design-vue';
import { MenuItem } from '@/components/menuitem';

const visible = ref(false);
const handleButtonClick = (e: Event) => {
    console.log('click left button', e);
};
const handleMenuClick: MenuProps['onClick'] = e => {
    if (e.key === '3') {
        visible.value = false;
    }
};

const breadcrumbs = ref<Array<MenuItem>>([
    { key: '1', label: 'Danh mục', icon: '', path: '' },
    { key: '2', label: 'Danh sách chi nhánh', icon: '', path: '' }
]);

function onClick(item: any){
console.log(item)
}

</script>

<template>
    <d-page :breadcrumb="breadcrumbs">

    </d-page>
</template>