<script setup lang="ts">
import { computed, defineModel, defineProps, stop } from 'vue'

const visible = defineModel('visible', { type: Boolean })
const props = defineProps({
    title: { type: String },
    closable: { type: Boolean, default: false },
    mask: { type: Boolean, default: true },
    maskClosable: { type: Boolean, default: false },
    maskStyle: { type: Object },
    width: { type: [String, Number], default: 520 }
})

const style = computed(() => {
    return {
        'width': typeof props.width === 'number' ? props.width + 'px' : props.width
    }
})

function onMaskClick(e: any) {
    if (visible && props.mask && props.maskClosable) {
        close()
    }
}

function close() {
    visible.value = false
}


</script>

<template>
    <teleport to='body'>
        <div class="d-modal-root">
            <div v-if="visible && mask" class="d-modal-mask" :style="maskStyle" @click.stop="onMaskClick"></div>
            <transition name="d-modal">
                <div v-if="visible" class="d-modal-wrap">
                    <div class="d-modal" :style="style">
                        <div class="d-modal-header">
                            <slot name="header">
                                <span class="d-modal-title">{{ title }}</span>
                            </slot>

                            <div class="d-modal-header-actions">
                                <d-button v-if="closable" type="text" rounded icon="bi bi-x-lg"
                                    @click.stop="close"></d-button>
                            </div>
                        </div>
                        <div class="d-modal-body">
                            <slot></slot>
                        </div>
                        <div class="d-modal-footer">
                            <slot name="footer"></slot>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </teleport>
</template>

<style>
.d-modal-root {
    --d-mask-background: rgba(0, 0, 0, 0.45);
    --d-mask-color: #e2e8f0;
    --d-mask-transitition-duration: 0.2s;

    --d-modal-background: #ffffff;
    --d-modal-border-color: #e2e8f0;
    --d-modal-color: #334155;
    --d-modal-border-radius: 4px;
    --d-modal-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 8px 10px -6px rgba(0, 0, 0, 0.1);
    --d-modal-header-padding: 0.5rem 1rem;
    --d-modal-header-gap: 0.5rem;
    --d-modal-title-font-weight: 600;
    --d-modal-title-font-size: 1.25rem;
    --d-modal-body-padding: 1rem;
    --d-modal-footer-padding: 0.5rem;
    --d-modal-footer-gap: 0.5rem 1rem;
}

.d-modal-root {
    display: block;
    z-index: 999;
}

.d-modal-mask {
    animation: d-modal-mask-animation var(--d-mask-transitition-duration) ease-out;
    background-color: var(--d-mask-background);
    color: var(--d-mask-color);
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0px;
    left: 0px;
    z-index: inherit;
}

.d-modal-wrap {
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0px;
    left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: inherit;
}

.d-modal {
    background: var(--d-modal-background);
    border: 1px solid var(--d-modal-border-color);
    color: var(--d-modal-color);
    border-radius: var(--d-modal-border-radius);
    box-shadow: var(--d-modal-shadow);
    max-height: 90%;
    min-width: 25rem;
    display: flex;
    flex-direction: column;
}

.d-modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    padding: var(--d-modal-header-padding);
    border-bottom: 1px solid var(--d-modal-border-color);
}

.d-modal-title {
    font-weight: var(--d-modal-title-font-weight);
    font-size: var(--d-modal-title-font-size);
}

.d-modal-header-actions {
    display: flex;
    align-items: center;
    gap: var(--d-modal-header-gap);
}

.d-modal-body {
    overflow-y: auto;
    padding: var(--d-modal-body-padding);
}

.d-modal-footer {
    display: flex;
    justify-content: flex-end;
    flex-shrink: 0;
    padding: var(--d-modal-footer-padding);
    border-top: 1px solid var(--d-modal-border-color);
    gap: var(--d-modal-footer-gap);
}



/* animation */
.d-modal-enter-active {
    transition: all var(--d-mask-transitition-duration) ease-out;
}

.d-modal-leave-active {
    transition: all var(--d-mask-transitition-duration) ease-out;
}

.d-modal-enter-from,
.d-modal-leave-to {
    opacity: 0;
    transform: translateY(-20px);
}

@keyframes d-modal-mask-animation {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>