<script setup lang="ts">
import { computed, defineProps, defineEmits, useSlots, PropType } from 'vue'

const props = defineProps({
    htmlType: {
        type: String as PropType<'submit' | 'button' | 'reset'>,
        default: 'button',
    },
    type: {
        type: String as PropType<'primary' | 'link' | 'text' | undefined>,
        default: undefined,
    },
    danger: { type: Boolean, default: false },
    rounded: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    icon: { type: String },
    title: { type: String },
    disabled: { type: Boolean }
})

const emit = defineEmits<{
    (e: 'click', payload: any): void
}>()

const slots = useSlots()
const hasIcon = computed(() => props.icon || slots['icon'])
const cls = computed(() => ({
    // type
    'd-button-primary': props.type === 'primary',
    'd-button-link': props.type === 'link',
    'd-button-text': props.type === 'text',
    // danger
    'd-button-danger': props.danger,
    // icon
    'd-button-icon-only': hasIcon.value && !slots.default
}))

/* event */
function onClick(payload: any) {
    emit('click', payload)
}

</script>

<template>
    <button class="d-button" :class="cls" :type="htmlType" :disabled="disabled || loading" :title="title" @click="onClick">
        <slot v-if="loading" name="loadingIcon">
            <div class="d-button-loadingicon"></div>
        </slot>
        <slot v-else name="icon">
            <i v-if="hasIcon" class="d-buton-icon" :class="icon"></i>
        </slot>

        <slot></slot>
    </button>
</template>

<style>
.d-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: var(--d-button-color);
    background: var(--d-button-background-color);
    border: var(--d-button-border-width) solid var(--d-button-border-color);
    border-radius: var(--d-button-border-radius);
    padding: var(--d-button-padding-y) var(--d-button-padding-x);
    line-height: var(--d-line-height);
    font-weight: var(--d-button-font-weight);
    outline-color: transparent;
    gap: var(--d-button-gap);
}

.d-button:not(:disabled):hover {
    color: var(--d-button-hover-color);
    background-color: var(--d-button-hover-background-color);
    border-color: var(--d-button-hover-border-color);
}

.d-button:not(:disabled):active {
    color: var(--d-button-active-color);
    background-color: var(--d-button-active-background-color);
    border-color: var(--d-button-active-border-color);
}

.d-button:not(:disabled):focus-visible {
    outline: var(--d-button-focus-ring-color) var(--d-button-focus-ring-style) var(--d-button-focus-ring-width);
    outline-offset: var(--d-button-focus-ring-offset);
}

.d-button:disabled {
    opacity: var(--d-disabled-opacity);
    cursor: not-allowed;
}

/* type: primary */
.d-button-primary {
    --d-button-color: var(--d-primary-contrast-color);
    --d-button-background-color: var(--d-primary-color);
    --d-button-border-color: var(--d-primary-color);
    --d-button-hover-color: var(--d-primary-contrast-color);
    --d-button-hover-background-color: var(--d-primary-hover-color);
    --d-button-hover-border-color: var(--d-primary-hover-color);
    --d-button-active-color: var(--d-primary-contrast-color);
    --d-button-active-background-color: var(--d-primary-active-color);
    --d-button-active-border-color: var(--d-primary-active-color);
}

/* type: link */
.d-button-link {
    --d-button-color: var(--d-primary-color);
    --d-button-background-color: transparent;
    --d-button-border-color: transparent;
    --d-button-hover-color: var(--d-primary-hover-color);
    --d-button-hover-background-color: #0C66E410;
    --d-button-hover-border-color: transparent;
    --d-button-active-color: var(--d-primary-active-color);
    --d-button-active-background-color: #0C66E420;
    --d-button-active-border-color: transparent;

    padding: 0;
}

/* type: text */
.d-button-text {
    --d-button-color: var(--d-text-color);
    --d-button-background-color: transparent;
    --d-button-border-color: transparent;
    --d-button-hover-color: var(--d-text-color);
    --d-button-hover-background-color: #091E420F;
    --d-button-hover-border-color: transparent;
    --d-button-active-color: var(--d-text-color);
    --d-button-active-background-color: #091E4224;
    --d-button-active-border-color: transparent;
}

/* danger */
.d-button-danger {
    --d-button-color: var(--d-danger-contrast-color);
    --d-button-background-color: var(--d-danger-color);
    --d-button-border-color: var(--d-danger-color);
    --d-button-hover-color: var(--d-danger-contrast-color);
    --d-button-hover-background-color: var(--d-danger-hover-color);
    --d-button-hover-border-color: var(--d-danger-hover-color);
    --d-button-active-color: var(--d-danger-contrast-color);
    --d-button-active-background-color: var(--d-danger-active-color);
    --d-button-active-border-color: var(--d-danger-active-color);
}

.d-button-text.d-button-danger {
    --d-button-color: var(--d-danger-color);
    --d-button-background-color: transparent;
    --d-button-border-color: transparent;
    --d-button-hover-color: var(--d-danger-color);
    --d-button-hover-background-color: transparent;
    --d-button-hover-border-color: var(--d-danger-hover-color);
    --d-button-active-color: var(--d-danger-contrast-color);
    --d-button-active-background-color: var(--d-danger-active-color);
    --d-button-active-border-color: var(--d-danger-active-color);
}

/* icon only */
.d-button-icon-only {
    gap: 0;
    padding-inline-start: 0;
    padding-inline-end: 0;
}

/* icon */
.d-buton-icon {
    font-size: var(--d-icon-size);
}

.d-button-loadingicon {
    font-size: var(--d-icon-size);
    border: 0.175rem solid currentcolor;
    border-right-color: transparent;
}

.d-button-loadingicon {
    display: inline-block;
    width: 1.25rem;
    height: 1.25rem;
    /* vertical-align: -0.125em; */
    border-radius: 50%;
    animation: 0.75s linear infinite d-button-loadingicon;
}

@keyframes d-button-loadingicon {
    100% {
        transform: rotate(360deg);
    }
}


.loader {
    border: 2px solid #f3f3f3;
    /* Light grey */
    border-top: 2px solid transparent;
    /* Blue */
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>