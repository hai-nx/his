<script setup lang="ts">
import { defineEmits, defineProps, PropType } from 'vue'

const props = defineProps({
    mode: {
        type: String as PropType<'vertical' | 'horizontal' | 'inline'>,
        required: true,
        default: 'horizontal'
    }
})

const emit = defineEmits<{
    (e: 'item-click', payload: any): void
}>()

</script>

<template>
    <div class="d-menubar">
        <div v-if="$slots.start">
            <slot name="start"></slot>
        </div>

        <div>

        </div>

        <div v-if="$slots.end">
            <slot name="end"></slot>
        </div>
    </div>
</template>