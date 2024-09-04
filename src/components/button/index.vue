<script setup lang="ts">
import { computed, defineEmits, defineProps, useSlots, PropType } from "vue"

const props = defineProps({
  htmlType: {
    type: String as PropType<'submit' | 'button' | 'reset'>,
    default: 'button',
  },
  type: {
    type: String as PropType<'primary' | 'danger' | 'link' | 'text' | undefined>,
    default: undefined,
  },
  icon: { type: String },
  title: { type: String },
  disabled: { type: Boolean }
});

const emit = defineEmits<{
  (e: 'click', payload: any): void
}>()

const slots = useSlots()
const hasIcon = computed(() => props.icon || slots['icon'])

const cls = computed(() => ({
  // type
  'd-button-primary': props.type === 'primary',
  'd-button-danger': props.type === 'danger',
  'd-button-link': props.type === 'link',
  'd-button-text': props.type === 'text',
  // icon
  'd-button-icon-only': hasIcon.value && !slots.default
}))

/* event */
function onClick(payload: any) {
  emit('click', payload)
}

</script>

<template>
  <button class="d-button" :class="cls" :type="htmlType" :disabled="disabled" :title="title" @click="onClick">
    <slot v-if="hasIcon" name="icon">
      <i :class="[icon]"></i>
    </slot>
    <slot></slot>
  </button>
</template>

<style>
.d-button {
  --d-button-color: rgba(0, 0, 0, 0.88);
  --d-button-background-color: #ffffff;
  --d-button-border-color: #d9d9d9;
  --d-button-hover-color: rgba(0, 0, 0, 0.88);
  --d-button-hover-background-color: #091E420F;
  --d-button-hover-border-color: #d9d9d9;
  --d-button-active-color: rgba(0, 0, 0, 0.88);
  --d-button-active-background-color: #091E4224;
  --d-button-active-border-color: #d9d9d9;
  --d-button-focus-ring-color: #0C66E4;
  --d-button-focus-ring-style: solid;
  --d-button-focus-ring-width: 2px;
  --d-button-focus-ring-offset: 1px;
  --d-button-font-weight: 500;
  --d-button-padding-x: 8px;
  --d-button-padding-y: 2px;
  --d-button-border-radius: 2px;
  --d-button-border-width: 1px;
  --d-button-gap: 6px;

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
  gap: var(--d-button-gap);
  padding: var(--d-button-padding-y) var(--d-button-padding-x);
  line-height: var(--d-line-height);
  font-weight: var(--d-button-font-weight);
  outline-color: transparent;
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
  --d-button-color: #fff;
  --d-button-background-color: #0C66E4;
  --d-button-border-color: #0C66E4;
  --d-button-hover-color: #fff;
  --d-button-hover-background-color: #0055CC;
  --d-button-hover-border-color: #0055CC;
  --d-button-active-color: #fff;
  --d-button-active-background-color: #09326C;
  --d-button-active-border-color: #09326C;
}

/* type: text */
.d-button-text { 
  --d-button-color: rgba(0, 0, 0, 0.88);
  --d-button-background-color: transparent;
  --d-button-border-color: transparent;
  --d-button-hover-color: rgba(0, 0, 0, 0.88);
  --d-button-hover-background-color: #091E420F;
  --d-button-hover-border-color: transparent;
  --d-button-active-color: rgba(0, 0, 0, 0.88);
  --d-button-active-background-color: #091E4224;
  --d-button-active-border-color: transparent;
}


/* icon */
.d-button-icon-only {
  gap: 0;
  padding-inline-start: 0;
  padding-inline-end: 0;
}
</style>
