<script setup lang="ts">
import { computed, defineProps, PropType } from "vue";

type ButtonTypes = 'primary' | 'dashed' | 'text' | 'link' | 'default'
type HTMLButtonTypes = 'button' | 'submit' | 'reset' | undefined

const props = defineProps({
    type: {
        type: String as PropType<ButtonTypes>,
        default: 'button',
        required: false,
        validator: (value: string) => {
            return ['button', 'submit', 'reset', undefined].includes(value)
        }
    },
    htmlType: {
        type: String as PropType<HTMLButtonTypes>,
        default: 'button',
        required: false,
        validator: (value: string) => {
            return ['button', 'submit', 'reset', undefined].includes(value)
        }
    },
    disabled: {
        type: Boolean,
        default: false,
        required: false,
    }
})

const buttonTypeClasses = computed(() => {
    switch (props.type) {
        case 'primary': return 'v-btn-primary'
        case 'dashed': return 'v-btn-dashed'
        default: return ''
    }
})

</script>

<template>
    <button class="v-btn" :class="buttonTypeClasses" :type="htmlType" :disabled="disabled">
        <slot></slot>
    </button>
</template>

<style scoped>
.v-btn {
    --bs-btn-padding-x: 0.75rem;
    --bs-btn-padding-y: 0.375rem;
    --bs-btn-font-family: ;
    --bs-btn-font-size: 1rem;
    --bs-btn-font-weight: 400;
    --bs-btn-line-height: 1.5;
    --bs-btn-color: #212529;
    --bs-btn-bg: transparent;
    --bs-btn-border-width: 1px;
    --bs-btn-border-color: transparent;
    --bs-btn-border-radius: 0.375rem;
    --bs-btn-hover-border-color: transparent;
    --bs-btn-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
    --bs-btn-disabled-opacity: 0.65;
    --bs-btn-focus-box-shadow: 0 0 0 0.25rem rgba(var(--bs-btn-focus-shadow-rgb), .5);


    display: inline-block;
    outline: 0;
    cursor: pointer;
    padding: 2px 16px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    vertical-align: middle;
    border: 1px solid;
    border-radius: 2px;
    color: #24292e;
    background-color: #fafbfc;
    border-color: #dbdbdb;
    box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px 0px inset;
    transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
    transition-property: color, background-color, border-color;
}

.v-btn:hover,
.v-btn:focus,
.v-btn:active {
    background-color: #f3f4f6;
    /* border-color: #1b1f2326; */
    border-color: #0366d6;
    transition-duration: 0.1s;
    box-shadow: 0 0 0 1px #0366d6;
}

.v-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

.v-btn-primary {
    background-color: #0366d6;
}

.v-btn-dashed {
    background-color: red;
}
</style>