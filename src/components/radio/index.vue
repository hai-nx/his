<script setup lang="ts">
import { defineEmits, defineProps, PropType } from 'vue'

const props = defineProps({
    id: { type: String },
    name: { type: String },
    value: { type: Object },
    checked: { type: Boolean },
    label: { type: Object as PropType<any> },
    tabindex: { type: Number },
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    ariaLabelledby: { type: Object as PropType<any> },
    ariaLabel: { type: Object as PropType<any> },
    invalid: { type: Object as PropType<any> },
    inputStyle: { type: Object }
})

const emit = defineEmits<{
    (e: 'update:value', payload: any): void,
    (e: 'focus', payload: any): void,
    (e: 'blur', payload: any): void,
    (e: 'change', payload: any): void
}>()

function onChange(event: any) {
    if (!props.disabled && !props.readonly) {
        emit('update:value', props.value);
        emit('change', event);
    }
}

function onFocus(event: any) {
    emit('focus', event);
}

function onBlur(event: any) {
    emit('blur', event);
}

</script>

<template>
    <div class="d-radio">
        <input type="radio" 
            :value="value" 
            :checked="checked" 
            :tabindex="tabindex" 
            :disabled="disabled"
            :readonly="readonly" 
            :style="inputStyle" 
            :aria-labelledby="ariaLabelledby" 
            :aria-label="ariaLabel"
            :aria-invalid="invalid || undefined" 
            @focus="onFocus" 
            @blur="onBlur" 
            @change="onChange">
        <d-text v-if="label" class="d-radio-label">{{ label }}</d-text>
    </div>
</template>