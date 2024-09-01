<script setup lang="ts">
import { computed, defineProps, PropType, ref } from 'vue'
import { SizeType } from '../context'

const props = defineProps({
    id: {
        type: String
    },
    name: {
        type: String
    },
    placeholder: {
        type: String
    },
    size: {
        type: String as PropType<SizeType>,
        default: 'small'
    },
    disabled: {
        type: Boolean
    },
    readonly: {
        type: Boolean
    },
    toggleMask: {
        type: Boolean,
        default: true
    },
    maskIcon: {
        type: String
    },
    unmaskIcon: {
        type: String
    }
})

const unmasked = ref<boolean>(false)

const cls = computed(() => ({
    'd-input-password-sm': props.size === 'small',
    'd-input-password-lg': props.size === 'large'
}))

function onMaskToggle() {
    unmasked.value = !unmasked.value
}

</script>

<template>
    <div class="d-input-password" :class="cls">
        <input type="password">
        <slot v-if="toggleMask && unmasked" name="maskicon">
            <i :class="maskIcon" @click="onMaskToggle"></i>
        </slot>
        <slot v-if="toggleMask && !unmasked" name="unmaskicon">
            <i :class="unmaskIcon" @click="onMaskToggle"></i>
        </slot>
    </div>
</template>