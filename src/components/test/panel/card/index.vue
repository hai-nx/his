<script setup lang="ts">
import { computed, defineProps } from 'vue'

const props = defineProps({
    title: {
        type: String
    },
    bordered: {
        type: Boolean,
        default: true
    }
})

const cls = computed(() => ({

}))

</script>

<template>
    <div class="d-card" :class="cls">
        <div v-if="$slots.header" class="d-card-header">
            <slot name="header"></slot>
        </div>
        <div class="d-card-body">
            <slot></slot>
        </div>
    </div>
</template>

<style>
.d-card {
    background-color: #fff;
    border: 1px solid #e2e8f0;
    border-radius: .5rem;
    color: #334155;
    display: flex;
    flex-direction: column;
}

.d-card-body {
    padding: 1rem;
}
</style>