<template>
    <x-layout :title="title" :routes="breadcrumbs">

    </x-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import XLayout from "@/components/XLayout.vue"
import { XItemType } from '@/components'

export default defineComponent({
    name: 'DashboardView',
    setup() {

        const title = ref<string>("Tổng quan")
        const breadcrumbs = ref<Array<XItemType>>([
            {
                key:"1",
                label: "Trang chủ"
            }
        ]);

        return {
            title,
            breadcrumbs
        }
    },
    components: {
        XLayout
    }
});
</script>