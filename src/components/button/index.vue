<script setup lang="ts">
import { computed, defineEmits, defineProps, useSlots, PropType } from "vue"
import { SizeType } from '../context'

const slots = useSlots()

const props = defineProps({
  htmlType: {
    type: String as PropType<'submit' | 'button' | 'reset'>,
    default: "button",
  },
  type: {
    type: String as PropType<'default' | 'primary' | 'dashed' | 'link' | 'text'>,
    default: "default",
  },
  size: {
    type: String as PropType<SizeType>,
    default: undefined
  },
  icon: { type: String },
  title: { type: String },
  fluid: { type: Boolean, default: false },
  rounded: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false }
});

const emit = defineEmits<{
  (e: 'click', payload: any): void
}>()

const hasIcon = computed(() => props.icon || slots['icon'])

/* style */
const typeClass = computed(() => {
  switch (props.type) {
    case 'primary': return 'd-btn-primary'
    case 'dashed': return 'd-btn-dashed'
    case 'link': return 'd-btn-link'
    case 'text': return 'd-btn-text'
    default:
      return 'd-btn-default'
  }
});
const fluidClass = computed(() => props.fluid ? 'd-btn-fluid' : undefined)
const roundedClass = computed(() => props.rounded ? 'd-btn-rounded' : undefined)
const sizeClass = computed(() => {
  switch (props.size) {
    case 'large': return 'd-btn-lg'
    case 'small': return 'd-btn-sm'
    default:
      return undefined
  }
})
const iconOnlyClass = computed(() => hasIcon.value && !slots.default ? 'd-btn-icon-only' : undefined)

/* event */
function onClick(payload: any) {
  emit('click', payload)
}

</script>

<template>
  <button :type="htmlType" :disabled="disabled" :class="['d-btn', typeClass, fluidClass, roundedClass, sizeClass, iconOnlyClass]"
    :title="title" @click="onClick">
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
