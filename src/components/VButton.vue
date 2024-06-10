<script setup lang="ts">
import { PropType, defineProps } from "vue";

type ButtonTypes = "primary " | "text" | "link" | "default"
type HTMLButtonTypes = "button" | "submit" | "reset" | undefined

defineProps({
    htmlType: {
        type: String as PropType<HTMLButtonTypes>,
        default: 'button',
        required: false,
        validator: (value: string) => {
            return ['button', 'submit', 'reset', undefined].includes(value)
        }
    },
    type: {
        type: String as PropType<ButtonTypes>,
        default: 'default',
        required: false,
        validator: (value: string) => {
            return ['primary', 'text', 'link', 'default'].includes(value)
        }
    },
    disabled: {
        type: Boolean,
        default: false,
        required: false,
    }
})
</script>

<template>
    <button class="v-btn" :type="htmlType" :disabled="disabled">
        <slot></slot>
    </button>
</template>

<style scoped>
.v-btn {
    display: inline-block;
    outline: 0;
    cursor: pointer;
    padding: 3px 16px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    vertical-align: middle;
    border: 1px solid;
    border-radius: 2px;
    color: #24292e;
    background-color: #fafbfc;
    /* border-color: #1b1f2326; */
    border-color: #BDBDBD;
    box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px 0px inset;
    transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
    transition-property: color, background-color, border-color;
}

.v-btn:hover, .v-btn:focus, .v-btn:active {
    background-color: #f3f4f6;
    /* border-color: #1b1f2326; */
    border-color: #0366d6;
    transition-duration: 0.1s;
}


.v-button {
    font-family: inherit;
    background-color: #04AA6D;
    border: none;
    border-radius: 2px;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}

.v-button:hover,
.v-button:focus,
.v-button:active {
    background-color: #3e8e41;
}

.disabled {
    opacity: 0.6;
    cursor: not-allowed;
}
</style>