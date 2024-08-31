<script setup lang="ts">
import { computed, defineEmits, defineProps, useSlots, PropType } from 'vue'
import { SizeType } from '../context'

const props = defineProps({
    htmlType: {
        type: String as PropType<'submit' | 'button' | 'reset'>,
        required: true,
        default: 'button',
    },
    type: {
        type: String as PropType<'default' | 'primary' | 'dashed' | 'link' | 'text'>,
        required: true,
        default: 'default',
    },
    disabled: { type: Boolean, default: false },
    icon: { type: String },
    title: { type: String },
    rounded: { type: Boolean, default: true },
    size: {
        type: String as PropType<SizeType>,
        default: undefined
    }
})

const emit = defineEmits<{
    (e: 'click', payload: any): void
}>()

const slots = useSlots()
const hasIcon = computed(() => props.icon || slots['icon'])

const cls = computed(() => ({
    // type
    'd-btn-primary': props.type === 'primary',
    'd-btn-dashed': props.type === 'dashed',
    'd-btn-link': props.type === 'link',
    'd-btn-text': props.type === 'text',
    'd-btn-default': props.type === 'default',
    // size
    'd-btn-sm': props.size === 'small',
    'd-btn-lg': props.size === 'large',
    // rounded
    'd-btn-rounded': props.rounded,
    // icon
    'd-btn-icon-only': hasIcon.value && !slots.default
}))

/* event */
function onClick(payload: any) {
    emit('click', payload)
}

</script>

<template>
    <button :type="htmlType" class="d-btn" :class="cls" :title="title" @click="onClick">
        <slot v-if="hasIcon" name="icon">
            <i :class="[icon]"></i>
        </slot>
        <slot></slot>
    </button>
</template>

<style>
.d-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    cursor: pointer;
    height: 28px;
    line-height: 20px;
    font-family: var(--his-font-family);
    font-size: var(--his-font-size);
    font-weight: 500;
    text-decoration: none;
    transition-duration: 0.2s;
    word-wrap: break-word;
    width: fit-content;
}   

.d-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

.d-btn-rounded {
    border-radius: 6px;
}
</style>