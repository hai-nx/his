<script setup lang="ts">
import { defineProps, PropType, ref, onMounted } from 'vue';

const props = defineProps({
    config: {
        type: Object as PropType<any>
    },
    remove: {
        type: Function,
        default: () => 1
    }
})

const visible = ref(false)

function onClose() {
    visible.value = false;
    //props.remove('OK');
    setTimeout(() => {
        props.remove('OK');
    }, 200);
}

onMounted(() => {
    visible.value = true;
})
</script>

<template>
    <div class="message-container">
        <!-- <div class="message-container"> -->
        <!-- content -->
        <div class="message-mask" v-if="visible"></div>
        <transition name="slide-fade">
            <div class="message-wrap" v-if="visible">
                <div class="message-content">
                    <!-- message icon -->
                    <div class="message-icon" v-if="config.icon">
                        <i :class="config.icon"></i>
                    </div>
                    <span v-text="config.content" class="message-text"></span>
                    <div class="option" v-if="!config.close">
                        <!-- manually close the message by clicking close icon -->
                        <button @click="onClose">
                            <i class="bi bi-question-circle-fill"></i>
                        </button>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<style>
.message-container {
    /* display: flex;
        position: fixed;
        width: 100vw;
        height: 100dvh;
        align-items: center;
        justify-content: center;
        left: 0;
        top: 0;

        background-color: rebeccapurple;
        opacity: .65; */
        display: block;
}

.message-mask {
    position: fixed;
        top: 0;
        bottom: 0;
        inset-inline-start: 0;
        inset-inline-end: 0;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.45);
}

.message-wrap {
display: flex;
    position: fixed;
    width: 100vw;
    height: 100dvh;
    align-items: center;
    justify-content: center;
    left: 0;
    top: 0;
}

.message-content {
    background-color: aqua;
    display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-sizing: border-box;
        margin: 20px 20px;
        padding: 20px;
        background-color: #fff;
        border: 1px solid #dbdbdb;
        border-radius: 4px;
        width: 25rem;
        max-height: 100%;
        opacity: 1;
}




.slide-fade-enter-active {
    transition: all 100ms ease-in;
}

.slide-fade-leave-active {
    transition: all 50ms linear;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    opacity: 0.65;
    transform: scale(.9);
}
</style>