<script setup lang="ts">
import { defineModel, defineProps } from 'vue'

const current = defineModel('current')
const pageSize = defineModel('pageSize')

const props = defineProps({
    total: { type: Number },
    pageSizeOptions: { type: Object }
})

</script>

<template>
    <div>
        
    </div>
</template>