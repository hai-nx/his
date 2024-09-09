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

const xxx= ref<string>('uno')

</script>

<template>
    <x-layout :title="title" :show-header="true">
        <d-radio name="choice" value="una" label="uno" :v-model="xxx"></d-radio>
        <d-radio name="choice" value="uno" label="una" :v-model="xxx"></d-radio>
        <d-radio name="choice" value="uni" label="un2" :v-model="xxx"></d-radio>
        <d-checkbox></d-checkbox>
        <d-checkbox></d-checkbox>
        <d-checkbox></d-checkbox>
    </x-layout>
</template>