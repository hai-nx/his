<script setup lang="ts">
import { computed, defineProps } from "vue"

const props = defineProps({
    tag: {
        type: String,
        default: 'label',
        required: true,
        validator: (value: string) => {
            return ['label', 'h1', 'h2', 'h3', 'p', 'span'].includes(value)
        }
    },
    for: {
        type: String,
        required: false
    }
})

const getForProp = computed(() => props.tag === 'label' ? props.for : null)
</script>

<template>
    <component class="v-text" :is="tag" :for="getForProp">
        <slot></slot>
    </component>
</template>

<style scoped>
.v-text {
    align-content: center;

}
</style>