<script setup lang="ts">
import { computed, defineEmits, defineProps, PropType } from 'vue'

const props = defineProps({
    id: { type: String },
    name: { type: String },
    value: { type: String },
    rows: { type: Number },
    maxlength: { type: Number },
    placeholder: { type: String },
    disabled: { type: Boolean },
    readonly: { type: Boolean },
})

</script>

<template>
    <textarea class="d-textarea" :id="id" :name="name" :value="value" :rows="rows" :maxlength="maxlength"
        :placeholder="placeholder" :disabled="disabled" :readonly="readonly"
        @input="$emit('update:value', ($event?.target as HTMLTextAreaElement).value)">
    </textarea>
</template>

<style>
.d-textarea {
    color: var(--d-input-color);
    background: var(--d-input-background-color);
    border: var(--d-input-border-width) solid var(--d-input-border-color);
    border-radius: var(--d-input-border-radius);
    padding: var(--d-input-padding-y) var(--d-input-padding-x);
    line-height: var(--d-line-height);
}

.d-textarea:not(:disabled):focus {
    border-color: var(--d-input-hover-border-color);
}

.d-textarea:not(:disabled):focus-visible {
    outline: var(--d-input-focus-ring-color) var(--d-input-focus-ring-style) var(--d-input-focus-ring-width);
    outline-offset: var(--d-input-focus-ring-offset);
}

.d-textarea:disabled {
    opacity: var(--d-disabled-opacity);
    cursor: not-allowed;
}

.d-textarea:not(:disabled):read-only {
    background-color: var(--d-input-readonly-background-color);
}
</style>