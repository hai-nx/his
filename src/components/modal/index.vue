<script setup lang="ts">
import { defineModel, defineProps, stop } from 'vue'

const model = defineModel()

const props = defineProps({
    title: { type: String },
    closable: { type: Boolean, default: true },
    mask: { type: Boolean, default: true },
    maskClosable: { type: Boolean, default: true },
    maskStyle: { type: Object },
    width: { type: [String, Number], default: 520 }
})

function onMaskClick(e: any) {
    if (model && props.mask && props.maskClosable) {
        close()
    }
}

function close() {
    console.log('asdasdasd')

    model.value = false;
}

</script>

<template>
    <teleport to='body'>
        <div v-if="model" class="d-modal-root">
            <div class="d-modal-mask" @click="onMaskClick"></div>
            <div class="d-modal-container">
                <transition name="d-modal">
                    <div class="d-modal">
                        <slot name="header">
                            <div v-if="title || closable" class="d-modal-header">
                                <span> {{ title }} </span>
                                <d-button v-if="closable" @click.stop="close">X</d-button>
                            </div>
                        </slot>

                        <div class="d-modal-body">
                            <slot></slot>
                        </div>

                        <div class="d-modal-footer">
                            <slot name="footer"></slot>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </teleport>
</template>

<style>
.d-modal-root {
    display: block;
}

.d-modal-root .d-modal-mask,
.d-modal-root .d-modal-container {
    position: fixed;
    top: 0;
    bottom: 0;
    inset-inline-start: 0;
    inset-inline-end: 0;
    height: 100%;
}

.d-modal-mask {
    background-color: rgba(0, 0, 0, 0.45);
    animation: fadeIn ease .3s;
}

.d-modal {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    box-sizing: border-box;
    margin: 0 auto;
    padding: 0;
    background-color: #fff;
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    width: 25rem;

    animation: fadeIn ease .3s;
}

.d-modal-header {
    display: inline-flex;
    justify-content: space-between;
    gap: 6px;
    padding: 1rem;
    border-bottom: 1px solid #dbdbdb;
}

.d-modal-body {
    flex: 1;
    padding: 1rem;
}
</style>