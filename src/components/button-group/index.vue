<script setup lang="ts">
import { computed, defineProps, PropType } from 'vue'

const props = defineProps({
    type: {
        type: String as PropType<'horizontal' | 'vertical'>,
        default: 'horizontal'
    },
    role: {
        type: String as PropType<'group' | 'toolbar'>,
        default: 'group'
    }
})

const typeClass = computed(() => props.type === 'vertical' ? 'd-btn-group-vertical' : 'd-btn-group')

</script>

<template>
    <div :class="[typeClass]" :role="role">
        <slot></slot>
    </div>
</template>

<style>
.d-btn-group,
.d-btn-group-vertical {
    position: relative;
    display: inline-flex;
    vertical-align: middle;
}

.d-btn-group-vertical {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-align: start;
    align-items: flex-start;
    justify-content: center;
}

.d-btn-group>.d-btn,
.d-btn-group-vertical>.d-btn{
    position: relative;
    flex: 1 1 auto;
}
.d-btn-group>.d-btn:focus-visible,
.d-btn-group-vertical>.d-btn:focus-visible {
    z-index: 1;
}
.d-btn-group>.d-btn:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
.d-btn-group>.d-btn:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
.d-btn-group-vertical>.d-btn:not(:last-child) {
    
    border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
}
.d-btn-group-vertical>.d-btn:not(:first-child) {
    border-top-left-radius: 0;
        border-top-right-radius: 0;
}
.d-btn-group .d-btn+.dbtn {
    margin-left: -1;
}

</style>