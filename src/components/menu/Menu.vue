<script setup lang="ts">
import { defineProps, PropType } from 'vue';
import { MenuItem } from '../menuitem'

const props = defineProps({
    dataSource: {
        type: Object as PropType<MenuItem[]>
    }
})


</script>

<template>
    <div>

    </div>
</template>