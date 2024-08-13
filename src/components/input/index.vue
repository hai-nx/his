<script setup lang="ts">
import { defineProps, PropType } from "vue";

defineProps({
    type: {
        type: String as PropType<"number" | "search" | "time" | "date" | "week" | "month" | "submit" | "hidden" | "button" | "image" | "text" | "reset" | "checkbox" | "radio" | "color" | "range" | "tel" | "url" | "email" | "datetime-local" | "file" | "password", string>,
        default: "text",
    },
    id: { type: String },
    name: { type: String },
    placeholder: { type: String },
    value: { type: String },
    maxlength: { type: Number },
    max: { type: Number },
    readonly: { type: Boolean },
    disabled: { type: Boolean },
});
</script>

<template>
    <input :type="type" :id="id" :name="name" :placeholder="placeholder" :readonly="readonly" :disabled="disabled"
        :value="value" :maxlength="maxlength" :max="max" :class="['d-input']"
        @input="$emit('update:value', ($event?.target as HTMLInputElement).value)" />
</template>

<style scoped>
.d-input {
    padding: 2px 5px;
    font-size: 14px;
    line-height: 20px;
    color: #24292e;
    vertical-align: middle;
    background-color: #ffffff;
    background-repeat: no-repeat;
    background-position: right 8px center;
    border: 1px solid #BDBDBD;
    border-radius: 2px;
    outline: none;
    box-shadow: rgba(225, 228, 232, 0.2) 0px 1px 0px 0px inset;
}

.d-input:hover,
.d-input:focus-visible {
    border-color: #0366d6;
    box-shadow: 0 0 0 1px #0366d6;
    outline: none;
}

.d-input:disabled {
    background-color: #f1f1f1;
}
</style>
