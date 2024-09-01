<script setup lang="ts">
import { computed, defineEmits, defineProps, useSlots, PropType } from "vue"
import { SizeType } from '../context'

const props = defineProps({
  htmlType: {
    type: String as PropType<'submit' | 'button' | 'reset'>,
    default: 'button',
  },
  type: {
    type: String as PropType<'default' | 'primary' | 'dashed' | 'link' | 'text'>,
    default: 'default',
  },
  size: {
    type: String as PropType<SizeType>,
    default: undefined
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
  'd-btn-primary': props.type === 'primary',
  'd-btn-dashed': props.type === 'dashed',
  'd-btn-link': props.type === 'link',
  'd-btn-text': props.type === 'text',
  'd-btn-default': props.type === 'default' || props.type === undefined,
  // size
  'd-btn-sm': props.size === 'small',
  'd-btn-lg': props.size === 'large',
  // icon
  'd-btn-icon-only': hasIcon.value && !slots.default
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
  align-items: center;
  justify-content: center;
  gap: var(--d-button-gap);
  height: var(--d-button-height);
  border-radius: var(--d-button-border-radius);
  cursor: pointer;
  font-weight: 500;
}


.d-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 28px;
  border-radius: 6px;
  cursor: pointer;
  font-family: var(--his-font-family);
  font-size: var(--his-font-size);
  font-weight: 500;
  line-height: 20px;
  list-style: none;
  padding: 6px 16px;
  position: relative;
  outline: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
  word-wrap: break-word;
  width: fit-content;

  text-decoration: none;
  transition-duration: 0.2s;
}

.d-btn:focus-visible {
  border-color: #0366d6;
  outline: 0;
  box-shadow: 0 0 0 2px #5a96da;
}

.d-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* type */
/* type: default */
.d-btn-default {
  background-color: #fafbfc;
  border: 1px solid #dbdbdb;
  color: #333333;
}

.d-btn-default:active,
.d-btn-default:focus,
.d-btn-default:hover {
  background-color: #F3F4F6;
  border-color: #0366d6;
  /* box-shadow: 0 0 0 1px #0366d6; */
}

/* type: primary */
.d-btn-primary {
  background-color: #0366d6;
  border: 1px solid #0366d6;
  color: #f3f4f6;
}

.d-btn-primary:active,
.d-btn-primary:focus,
.d-btn-primary:hover {
  background-color: #1d4ed8;
  border-color: #1d4ed8;
  /* box-shadow: 0 0 0 1px #0366d6; */
}

/* type: dashed */
.d-btn-dashed {
  background-color: #fafbfc;
  border: 1px dashed #dbdbdb;
  color: #333333;
}

.d-btn-dashed:active,
.d-btn-dashed:focus,
.d-btn-dashed:hover {
  background-color: #F3F4F6;
  border-color: #0366d6;
}

/* type: link */
.d-btn-link {
  background-color: transparent;
  border-width: 0px;
  color: #0366d6;
  font-weight: 400;
}

.d-btn-link:active,
.d-btn-link:focus,
.d-btn-link:hover {
  color: #1d4ed8;
}

/* type: text */
.d-btn-text {
  background-color: transparent;
  border: 1px solid transparent;
  color: #333333;
}

.d-btn-text:active,
.d-btn-text:focus,
.d-btn-text:hover {
  background-color: #F3F4F6;
  border-color: #F3F4F6;
  /* box-shadow: 0 0 0 1px #0366d6; */
}


/* size */
.d-btn-sm {
  height: 24px;
}

.d-btn-lg {
  height: 32px;
}

/**/
.d-btn-icon-only {
  gap: 0;
  padding-inline-start: 0;
  padding-inline-end: 0;
}

.d-btn-fluid {
  width: 100%;
}

.d-btn-rounded {
  border-radius: 9998px;
  min-width: 28px;
}

.d-btn-rounded.d-btn-lg {
  min-width: 32px;
}

.d-btn-rounded.d-btn-sm {
  min-width: 24px;
}
</style>
