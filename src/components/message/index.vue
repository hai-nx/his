<script setup lang="ts">
import { defineProps, PropType, ref } from 'vue';

const props = defineProps({
    config: {
        type: Object as PropType<any>
    },
    remove: {
        type: Object as PropType<any>
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
                        <i class="meta-iconfont meta-Close" @click="onClose"></i>
                    </div>
                </div>
            </div>
    </transition>
</template>