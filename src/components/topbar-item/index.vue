<script setup lang="ts">
import { computed, defineEmits, defineProps, ref, PropType } from 'vue'
import { MenuItem } from '../menuitem';

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

const subItemClass = computed(() => props.depth > 0 ? 'd-subitem' : undefined)
const hasChildren = computed(() => props.item.children !== undefined && props.item.children.length > 0)
const allowOpenPopup = ref<boolean>(true) /* quản lý đóng, mở popup */

function itemClick(item: MenuItem) {
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



</script>

<template>
    <div :class="['d-topbar-item', subItemClass]">
        <!--label-->
        <div class="d-topbar-item-label" @click.stop="itemClick(item)">
            <span>{{ item.label }}</span>
            <i v-if="hasChildren" class="bi bi-chevron-down d-topbar-item-arrow"></i>
        </div>

        <!--dropdown-->
        <div class="d-topbar-item-dropdown">
            <ul>
                <li v-for="(item, index) in item.children" :key="index">
                    <d-divider v-if="item.separator"></d-divider>
                    <!-- <div v-if="item.separator" class="border-bottom"></div> -->
                    <d-topbar-item v-else :data-source="item" :depth="depth + 1" @click="onClick"></d-topbar-item>
                </li>
            </ul>
        </div>
    </div>
</template>

<style>
.d-topbar-item {
    display: block;
    background-color: #00446D;
    color: #FFF;
    cursor: pointer;
    position: relative;
    white-space: nowrap;
    padding: 0 15px;
    height: 100%;
}

.d-topbar-item:hover {
    background-color: #FFF;
    color: #00446D;
    transition: all linear 0.2s;
}

.d-topbar-item > ul {
    flex-grow: 1;
    flex-wrap: nowrap;
    list-style: none;
    margin: 0;
    padding: 0;
}

.d-topbar-item-label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-wrap: nowrap;
    height: inherit;
}

.d-topbar-item-arrow {
    margin-left: 3px;
    font-size: 12px;
}

.d-topbar-item-dropdown {
    display: none;
    opacity: 0;
    position: absolute;
}

</style>