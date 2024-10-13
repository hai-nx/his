<script setup lang="ts">
import { computed, defineProps, PropType } from 'vue'

const props = defineProps({
    items: {
        type: Array
    },
    columns: {
        type: Array as () => any
    },
})

</script>

<template>
    <div class="d-data-tree">
        
    </div>
</template>