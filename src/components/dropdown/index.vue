<script setup lang="ts">
import { defineEmits, defineProps, ref } from 'vue'

defineProps({
    tabindex: {
        type: Number,
        default: 0
    }
})

const open = ref<boolean>(false)
    
</script>

<template>
    <div class="d-dropdown" :tabindex="tabindex" @blur="open = false" @click="open = !open">

    </div>
</template>