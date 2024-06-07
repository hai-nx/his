<script setup lang="ts">
import { computed, defineEmits, defineProps, ref, PropType } from "vue";
import { DataTypes } from ".";

const emit = defineEmits<{
    (e: "click", item: DataTypes): void
}>();

const props = defineProps({
    dataSource: {
        type: Object as PropType<DataTypes>,
        required: true,
    },
    depth: {
        type: Number,
        default: 0
    }
})

const allowOpenDropdown = ref<boolean>(true) // điều kiện để kiểm soát đóng, mở dropdown
const hasChildren = computed(() => props.dataSource.children != undefined && props.dataSource.children.length > 0)



function onClick(item: DataTypes) {
    try {
        // đóng danh sách con
        allowOpenDropdown.value = false;
        // gọi sự kiện
        emit("click", item)
    }
    finally {
        // delay 1s để có thời gian đóng các danh sách con
        setTimeout(() => {
            allowOpenDropdown.value = false;
        }, 1000)
    }
}

</script>

<template>
    <div class="menu-item" :class="depth === 0 ? '' : 'menu-sub-item'">
        <div class="menu-item-label" @click.stop="onClick(dataSource)">
            <span href="#">{{ dataSource.label }}</span>
            <i class="bi bi-chevron-down nav-item-arrow" v-if="hasChildren"></i>
        </div>

        <div class="menu-item-dropdown" v-if="allowOpenDropdown && hasChildren">

        </div>
    </div>
</template>

<style>
.menu-item {
    display: block;
    position: relative;
    cursor: pointer;
    white-space: nowrap;
}

.menu-item-label {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
</style>