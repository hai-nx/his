<script setup lang="ts">
import { defineProps, PropType, ref, onMounted } from 'vue'
import DButton from '@/components/button/index.vue'

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

const header = ref("header")

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
    <div class="d-message-mask">
        <transition name="slide-fade">
            <div class="d-message-wrap" v-if="visible">
                <div class="d-message-header">
                    <span>{{ header }}</span>
                    <!-- <div class="option" v-if="!config.close">
                        <button @click="onClose">
                            <i class="bi bi-question-circle-fill"></i>
                        </button>
                    </div> -->
                    <d-button type="text" v-if="!config.close" @click="onClose">
                        <i class="bi bi-question-circle-fill"></i>
                    </d-button>
                </div>
                <div class="d-message-content">
                    <!-- message icon -->
                    <div class="message-icon" v-if="config.icon">
                        <i :class="config.icon"></i>
                    </div>
                    <span v-text="config.content" class="message-text"></span>

                </div>
                <div class="d-message-footer">
                    <d-button type="primary">
                        DDoongf ys
                    </d-button>
                    <d-button>
                        Bo qua
                    </d-button>
                </div>
            </div>
        </transition>
    </div>
</template>

<style>
.d-message {
    display: block;
}

.d-message-mask {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    left: 0px;
    top: 0px;
    height: 100%;
    width: 100%;
}

.d-message-wrap {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    padding: 20px;
    max-height: 90%;
    min-width: 25rem;
}

.d-message-header {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    border-bottom: #dbdbdb solid 1px;
    padding-bottom: .5rem;
}

.d-message-content {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
}

.message-text {
    flex: 1;
}

.d-message-footer {
    display: flex;
    justify-content: flex-end;
    gap: .5rem;
    border-top: #dbdbdb solid 1px;
    padding-top: .5rem;
}

.slide-fade-enter-active {
    transition: all 150ms ease-in;
}

.slide-fade-leave-active {
    transition: all 50ms linear;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    opacity: 0.65;
    transform: scale(.65);
}
</style>