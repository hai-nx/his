<script setup lang="ts">
import { defineProps, PropType, ref, onMounted } from 'vue'

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
        props.remove('OK');
    }, 200);
}

onMounted(() => {
    visible.value = true;
})
</script>
<template>
    <transition name="side-fade">
        <div class="d-notification">
            <div class="d-notification-header">
                <span>{{ config.title }}</span>
                <d-button>
                    <i class="bi bi-x-lg"></i>
                </d-button>
            </div>
            <div class="d-notification-content">
                <span v-text="config.content" class="message-text"></span>
            </div>
        </div>
    </transition>
</template>

<style>
.d-notification {
    background-color: red;

}
</style>