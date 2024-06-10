<script setup lang="ts">
import { defineProps } from "vue"

defineProps({
    for: {
        type: String,
        required: false
    },
    type: {
        type: String,
        required: true,
        default: 'label'
    }
})
</script>

<template>
    <label :for="for"></label>
</template>