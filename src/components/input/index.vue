<script setup lang="ts">
import { computed, defineProps, PropType } from 'vue'
import { SizeType } from '../context'

const props = defineProps({
    id: { type: String },
    name: { type: String },
    type: {
        type: String as PropType<'text' | 'password' | 'date' | string>,
        default: 'text'
    },
    value: { type: String },
    placeholder: { type: String },
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    size: {
        type: String as PropType<SizeType>,
        default: undefined
    }
})

const cls = computed(() => ({
    'd-input-sm': props.size === 'small',
    'd-input-lg': props.size === 'large'
}))

</script>

<template>
    <input class="d-input" :class="cls" :id="id" :name="name" :type="type" :value="value" :placeholder="placeholder"
        :readonly="readonly" :disabled="disabled"
        @input="$emit('update:value', ($event?.target as HTMLInputElement).value)">
</template>

<style>
.d-input {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 14px;
    color: #334155;
    background: #ffffff;
    padding: 3px 7px;
    line-height: 20px;
    border: 1px solid #cbd5e1;
    border-radius: 4px;
}

.d-input.d-input-md {
    padding: 5px 7px;
}

.d-input.d-input-lg {
    padding: 5px 7px;
    font-size: 1rem;
    line-height: 1.5;
}
</style>