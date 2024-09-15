<script setup lang="ts">
import { defineProps, PropType } from 'vue'

const props = defineProps({
    items: {
        type: Array
    },
    columns:{
        type: Array
    },
    tableClass: { type: String },
    rowClass: { type: String }
})

</script>

<template>
    <div class="d-table">
        <div class="d-table-header">

        </div>
        <div class="d-table-body">
            <table role="table" :class="tableClass">
                
            </table>
        </div>
        <div class="d-table-footer">

        </div>
    </div>
</template>