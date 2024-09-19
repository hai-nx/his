<script setup lang="ts">
import { computed, defineModel, defineProps, stop } from 'vue'

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
    model.value = false;
}

const cls = computed(() => {
    return {
        
    }
})

</script>

<template>
    <teleport to='body'>
        <div v-if="model" class="d-modal-root">
            <div v-if="mask" class="d-modal-mask" @click="onMaskClick"></div>
            <div class="d-modal-container">
                <transition name="d-modal" appear>
                    <div class="d-modal" :class="cls">
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
    animation: fade-in ease .3s;
}

.d-modal-mask {
    position: fixed;
    top: 0;
    bottom: 0;
    inset-inline-start: 0;
    inset-inline-end: 0;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.45);
}

.d-modal-container {
    display: flex;
    position: fixed;
    width: 100vw;
    height: 100dvh;
    align-items: center;
    justify-content: center;
    left: 0;
    top: 0;
    /* overflow: auto; */
}

.d-modal {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    margin: 20px 20px;
    padding: 0;
    background-color: #fff;
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    width: 25rem;

    -webkit-animation: slide-in linear .2s;
    animation: slide-in linear .2s;
    max-height: 100%;
}


@keyframes animatebottom {
    from {
        top: 0;
        opacity: 1;
    }

    to {
        top: 300px;
        opacity: 0;
    }
}
.d-modal-fade {
    -webkit-animation-name: animatebottom;
    -webkit-animation-duration: 0.4s;
    animation-name: animatebottom;
    animation-duration: 0.4s;
}

@keyframes slide-in {
    from {
        opacity: 0;
        transform: translateY(-60px);
    }

    to {
        opacity: 1;
        transform: translateY(0px);
    }
}

@keyframes growth {
    from {
        transform: scale(0.7);
    }
    to {
        transform: scale(1);
    }
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
    overflow: auto;
}
</style>