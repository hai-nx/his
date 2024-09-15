<script setup lang="ts">
import { computed, defineProps, PropType } from 'vue'

const props = defineProps({
    as: {
        type: String as PropType<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'label'>,
        required: true,
        default: 'label'
    },
    for: { type: String },
    star: { type: Boolean }
})

const forProp = computed(() => props.as === 'label' ? props.for : null)
const cls = computed(() => ({
    'd-text-star': props.star
})) 
</script>

<template>
    <component class="d-text" :class="cls" :is="as" :for="forProp">
        <slot></slot>
    </component>
</template>

<style>
.d-text {
    color: var(--d-text-color);
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
}

.d-text-star::before {
    content: '*';
    position: relative;
    color: red;
    left: -2px;
    top: -2px;
}
</style>