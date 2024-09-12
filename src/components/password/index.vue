<script setup lang="ts">
import { computed, defineProps, PropType, ref } from "vue";

const props = defineProps({
    id: { type: String },
    name: { type: String },
    value: { type: String },
    maxlength: { type: Number },
    placeholder: { type: String },
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    toggleMask: {
        type: Boolean, default: true
    },
    maskIcon: {
        type: String, default: "bi bi-eye"
    },
    unmaskIcon: {
        type: String, default: "bi bi-eye-slash"
    },
});

const unmasked = ref<boolean>(false);

const inputType = computed(() => {
    return unmasked.value ? "text" : "password";
});

function onMaskToggle() {
    if (!props.disabled)
        unmasked.value = !unmasked.value;
}
</script>

<template>
    <div class="d-password">
        <d-input :type="inputType" :id="id" :name="name" :value="value" :maxlength="maxlength"
            :placeholder="placeholder" :disabled="disabled"
            @input="$emit('update:value', ($event?.target as HTMLInputElement).value)"></d-input>

        <div class="d-password-toggle-mask">
            <slot v-if="toggleMask && unmasked" name="maskicon">
                <i :class="maskIcon" @click="onMaskToggle"></i>
            </slot>
            <slot v-if="toggleMask && !unmasked" name="unmaskicon">
                <i :class="unmaskIcon" @click="onMaskToggle"></i>
            </slot>
        </div>

    </div>
</template>

<style>
.d-password {
    display: flex;
    position: relative;
}

.d-password>input.d-input {
    bottom: 0;
    width: 100%;
}

.d-password-toggle-mask {
    font-size: 1rem;
    display: inline-block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    /* margin-top: -.5rem; */
    right: .75rem;
}
</style>
