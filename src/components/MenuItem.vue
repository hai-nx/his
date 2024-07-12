<script setup lang="ts">
import { defineProps, PropType } from 'vue'
import { MenuProps } from './data'

const props = defineProps({
    dataSource: {
        type: Object as PropType<MenuProps>,
        required: true
    },
    depth: {
        type: Number,
        default: 0
    }
});

</script>

<template>
    <div>

    </div>
</template>