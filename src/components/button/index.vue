<script setup lang="ts">
import { computed, defineEmits, defineProps, useSlots, PropType } from "vue"

const props = defineProps({
  htmlType: {
    type: String as PropType<'submit' | 'button' | 'reset'>,
    default: 'button',
  },
  type: {
    type: String as PropType<'primary' | 'dashed' | 'link' | 'text' | undefined>,
    default: 'default',
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
  'd-button-dashed': props.type === 'dashed',
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
  display: inline-flex;
  cursor: pointer;
  user-select: none;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  color: var(--d-button-color);
  background: var(--d-button-background-color);
  border: var(--d-button-width) solid var(--d-button-boder-color);
  border-radius: var(--d-button-border-radius);
  gap: var(--d-button-gap);
  padding: var(--d-button-padding-y) var(--d-button-padding-x);
  line-height: var(--d-line-height);
  font-family: inherit;
  font-size: inherit;
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
  border-color: var(--d-button-hover-active-color);
}
.d-button:not(:disabled):focus-visible {
  outline: var(--d-focus-ring-width) var(--d-focus-ring-style) var(--d-focus-ring-width);
  outline-offset: var(--d-focus-ring-offset);
}
.d-button:disabled {
  opacity: var(--d-disabled-opacity);
  cursor: not-allowed;
}

/* type: primary */
.d-button-primary {
  color: var(--d-button-primary-color);
  background-color: var(--d-button-primary-background-color);
  border-color: var(--d-button-primary-border-color);
}
.d-button-primary:not(:disabled):hover {
  color: var(--d-button-primary-hover-color);
  background-color: var(--d-button-primary-hover-background-color);
  border-color: var(--d-button-primary-hover-border-color);
}
.d-button-primary:not(:disabled):active {
  color: var(--d-button-primary-active-color);
  background-color: var(--d-button-primary-active-background-color);
  border-color: var(--d-button-primary-hover-active-color);
}

/* type: dashed */
.d-button-dashed {
  border-style: dashed;
}

/* type: link */
.d-button-link {
  color: var(--d-button-link-color);
  background-color: var(--d-button-link-background-color);
  border-color: var(--d-button-link-border-color);
}
.d-button-link:not(:disabled):hover {
  color: var(--d-button-link-hover-color);
  background-color: var(--d-button-link-hover-background-color);
  border-color: var(--d-button-link-hover-border-color);
}
.d-button-link:not(:disabled):active {
  color: var(--d-button-link-active-color);
  background-color: var(--d-button-link-active-background-color);
  border-color: var(--d-button-link-hover-active-color);
}

/* type: text */
.d-button-text {
  background-color: transparent;
  border-color: transparent;
}
.d-button-text:not(:disabled):hover {
  color: var(--d-button-text-hover-color);
  background-color: var(--d-button-text-hover-background-color);
  border-color: var(--d-button-text-hover-border-color);
}
.d-button-text:not(:disabled):active {
  color: var(--d-button-text-active-color);
  background-color: var(--d-button-text-active-background-color);
  border-color: var(--d-button-text-hover-active-color);
}

/* icon */
.d-button-icon-only {
  gap: 0;
  padding-inline-start: 0;
  padding-inline-end: 0;
}

</style>
