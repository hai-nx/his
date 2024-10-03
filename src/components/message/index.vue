<script setup lang="ts">
import { defineProps, PropType, ref } from 'vue';

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
    setTimeout(() => {
        props.remove();
    }, 200);
}
</script>

<template>
    <transition name="slide-fade">
        <!-- <div class="message-container" v-show="visible"> -->
        <div class="message-container">
            <!-- content -->
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
</template>

<style>
.message-container {
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
        padding: 0;
        background-color: #fff;
        border: 1px solid #dbdbdb;
        border-radius: 4px;
        width: 25rem;
        max-height: 100%;
}
</style>