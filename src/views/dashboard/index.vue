<script setup lang="ts">
import { ref } from 'vue';


const title = ref("Bàn làm việc")


function hihi(payload: any) {
    console.log(payload)
}

import type { MenuProps } from 'ant-design-vue';

const visible = ref(false);
const handleButtonClick = (e: Event) => {
    console.log('click left button', e);
};
const handleMenuClick: MenuProps['onClick'] = e => {
    if (e.key === '3') {
        visible.value = false;
    }
};
</script>

<template>
    <x-layout :title="title" :show-header="true">

    </x-layout>
</template>