<script setup lang="ts">
import { computed, defineProps, PropType } from 'vue'
import { SizeType } from '../context'

const props = defineProps({
    id: { type: String },
    name: { type: String },
    type: {
        type: String as PropType<'text' | 'password' | string>,
        default: 'text'
    },
    value: { type: String },
    placeholder: { type: String },
    readonly: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    rounded: { type: Boolean, default: true },
    size: {
        type: String as PropType<SizeType>,
        default: undefined
    }
})

const cls = computed(() => ({
    'd-input-rounded': props.rounded
}))
</script>

<template>
    <input class="d-input" :class="cls" :id="id" :name="name" :type="type" :value="value" :placeholder="placeholder"
        :readonly="readonly" :disabled="disabled"
        @input="$emit('update:value', ($event?.target as HTMLInputElement).value)">
</template>

<style>
.d-input {
    display: block;
}
</style>