<script setup lang="ts">
import { computed, defineEmits, defineProps, PropType, ref } from 'vue';
import { MenuItem } from '../menuitem'

const props = defineProps({
    item: {
        type: Object as PropType<MenuItem>,
        required: true
    },
    depth: {
        type: Number,
        default: 0
    }
})

const emit = defineEmits<{
    (e: "click", item: MenuItem): void;
}>()


const allowOpenPopup = ref<boolean>(true)
const hasChild = computed(() => props.item.children !== undefined && props.item.children.length > 0)

function onClick(item: MenuItem) {
    try {
        // đóng poup
        allowOpenPopup.value = false

        // gọi sự kiện
        emit("click", item)
    }
    finally {
        // delay 1s để có thời gian đóng các danh sách con
        setTimeout(() => {
            allowOpenPopup.value = true
        }, 1000)
    }
}

function cls() {
    return props.depth === 0 ? '' : 'sub-menuitem' 
}
</script>

<template>
    <li
        v-if="item.visible"
        :id="item.key"
        :class="cls()"
        >

    </li>
</template>