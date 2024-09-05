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

const getForProp = computed(() => props.as === 'label' ? props.for : null)
const cls = computed(() => ({
    'd-text-required': props.star
})) 
</script>

<template>
    <component class="d-text" :class="cls" :is="as" :for="getForProp">
        <slot></slot>
    </component>
</template>

<style>
.d-text-required::before {
    content: '*';
    position: relative;
    color: red;
    left: -2px;
    top: -2px;
}
</style>