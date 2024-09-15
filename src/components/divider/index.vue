<script setup lang="ts">
import { computed, defineProps, PropType } from 'vue';

const props = defineProps({
    type: {
        type: String as PropType<'dashed' | 'dotted' | 'solid'>,
        default: 'solid'
    },
    direction: {
        type: String as PropType<'horizontal' | 'vertical'>,
        default: 'horizontal'
    }
})

const cls = computed(() => {
    return {
        'd-divider-dashed': props.type === 'dashed',
        'd-divider-dotted': props.type === 'dotted',
        'd-divider-solid': props.type === 'solid',

        'd-divider-horizontal': props.direction === 'horizontal',
        'd-divider-vertical': props.direction === 'vertical',
    }
})


</script>

<template>
    <div class="d-divider" :class="cls"></div>
</template>

<style>
.d-divider {
    border-width: 0px;
    border-style: solid;
}

.d-divider-dashed.d-divider-horizontal::before{
    border-top-style: dashed;
}

.d-divider-dotted.d-divider-horizontal::before {
    border-top-style: dotted;
}

.d-divider-solid.d-divider-horizontal::before {
    border-top-style: solid;
}

.d-divider-horizontal {
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
    margin: 1rem 0px;
    padding: 0px 1rem;
}

.d-divider-horizontal::before {
    position: absolute;
    display: block;
    top: 50%;
    left: 0;
    width: 100%;
    content: "";
    border-top: 1px solid #e2e8f0;
}


.d-divider-dashed.d-divider-vertical::before {
    border-left-style: dashed;
}

.d-divider-dotted.d-divider-vertical::before {
    border-left-style: dotted;
}

.d-divider-solid.d-divider-vertical::before {
    border-left-style: solid;
}

.d-divider-vertical {
    display: flex;
    min-height: 100%;
    position: relative;
    justify-content: center;
    margin: 0px 1rem;
    padding: 1rem 0px;
}

.d-divider-vertical::before {
    position: absolute;
    display: block;
    top: 0;
    left: 50%;
    height: 100%;
    content: "";
    border-left: 1px solid #e2e8f0;
}
</style>