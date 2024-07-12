<script setup lang="ts">
import { defineProps, ref, PropType } from 'vue'
import { MenuProps } from './data'
import MenuItem from './MenuItem.vue'


const props = defineProps({
    dataSource: {
        type: Object as PropType<MenuProps[]>
    }
})

</script>

<template>
    <div>

    </div>
</template>