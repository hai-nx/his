<script setup lang="ts">
import { defineProps, defineEmits } from "vue"

var props = defineProps({
    disabled: { type: Boolean, default: false }
})

var emit = defineEmits<{
    (e: "click"): void
}>()

</script>

<template>
    <button>

    </button>
</template>