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
    readonly: { type: Boolean }
})

</script>

<template>
    <input class="d-input" :id="id" :name="name" :type="type" :value="value" :placeholder="placeholder"
        :readonly="readonly" :disabled="disabled"
        @input="$emit('update:value', ($event?.target as HTMLInputElement).value)">
</template>

<style>
.d-input {
    --d-input-color: #333;
    --d-input-background-color: #ffffff;
    --d-input-readonly-background-color: #091E420F;
    --d-input-border-color: #d9d9d9;
    --d-input-hover-border-color: #0055CC;
    --d-input-focus-ring-color: #0C66E4;
    --d-input-focus-ring-style: solid;
    --d-input-focus-ring-width: 1px;
    --d-input-focus-ring-offset: 0px;
    --d-input-font-weight: var(--d-font-weight);
    --d-input-padding-x: 8px;
    --d-input-padding-y: 2px;
    --d-input-border-radius: 2px;
    --d-input-border-width: 1px;

    color: var(--d-input-color);
    background: var(--d-input-background-color);
    border: var(--d-input-border-width) solid var(--d-input-border-color);
    border-radius: var(--d-input-border-radius);
    padding: var(--d-input-padding-y) var(--d-input-padding-x);
    line-height: var(--d-line-height);
    /* font-family: inherit;
    font-size: inherit; */
    
}

.d-input:not(:disabled):focus {
    border-color: var(--d-input-hover-border-color);
}

.d-input:not(:disabled):focus-visible {
    outline: var(--d-input-focus-ring-color) var(--d-input-focus-ring-style) var(--d-input-focus-ring-width);
    outline-offset: var(--d-input-focus-ring-offset);
}

.d-input:disabled {
    opacity: var(--d-disabled-opacity);
    cursor: not-allowed;
}

.d-input:not(:disabled):read-only {
    background-color: var(--d-input-readonly-background-color);
}
</style>