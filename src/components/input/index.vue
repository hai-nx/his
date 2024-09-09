<script setup lang="ts">
import { computed, defineEmits, defineModel, defineProps, PropType } from 'vue'

const model = defineModel();

const props = defineProps({
    id: { type: String },
    name: { type: String },
    type: {
        type: String as PropType<'text' | 'password' | 'date' | 'number' | string>,
        default: 'text'
    },
    value: { type: Object, default: undefined },
    max: { type: Number },
    maxlength: { type: Number },
    placeholder: { type: String },
    disabled: { type: Boolean },
    readonly: { type: Boolean }
})

const emit = defineEmits<{
    (e: 'change', payload: any): void
}>()

const valueProp = computed(() => props.type === 'text' || props.type === 'password' ? model.value : props.value)

function onChange(e: any){
    emit('change', e)
}

</script>

<template>
    <input class="d-input" v-model="model" :id="id" :name="name" :type="type" :value="valueProp" :max="max"
        :maxlength="maxlength" :placeholder="placeholder" :disabled="disabled" :readonly="readonly" @change="onChange">
</template>

<style>
.d-input {
    color: var(--d-input-color);
    background: var(--d-input-background-color);
    border: var(--d-input-border-width) solid var(--d-input-border-color);
    border-radius: var(--d-input-border-radius);
    padding: var(--d-input-padding-y) var(--d-input-padding-x);
    line-height: var(--d-line-height);
}

.d-input:not(:disabled):hover {
    border-color: var(--d-input-hover-border-color);
}

.d-input:not(:disabled):focus {
    border-color: var(--d-input-focus-border-color);
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

input[type="password"]:not(:placeholder-shown).d-input {
    font-size: 1.25rem;
}
</style>