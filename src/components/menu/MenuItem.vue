<script setup lang="ts">
import { computed, defineEmits, defineProps, ref, PropType } from 'vue';
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
const hasChildren = computed(() => props.item.children !== undefined && props.item.children.length > 0)

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

function cls() {
    return props.depth === 0 ? '' : 'sub-item'
}
</script>

<template>
    <transition>
        <div class="menu-item" :class="cls()">
            <!--label-->
            <div class="menu-item-label" @click.stop="itemClick(item)">
                <span>{{ item.label }}</span>
                <i class="bi bi-chevron-down" v-if="hasChildren"></i>
            </div>

            <!--dropdown-->
            <div class="menu-item-dropdown">
                <ul>
                    <li v-for="(item, index) in item.children" :key="index">
                        <div v-if="item.separator" class="border-bottom">
                        </div>
                        <x-nav-item v-else :data-source="item" :depth="depth + 1" @click="onClick"></x-nav-item>
                    </li>
                </ul>
            </div>
        </div>
    </transition>
</template>

<style scoped>
.menu-item {
    display: block;
    position: relative;
    color: #FFF;
    cursor: pointer;
    padding: 0 .75rem;
    white-space: nowrap;
    height: 100%;
}

.menu-item:hover {
    background-color: #30305a;
    color: var(--his-nav-color-hover);
    transition: all linear 0.2s;
}

.menu-item:hover>.menu-item-dropdown {
    display: block;
    opacity: 1;
    transition: all linear .2s;
}

.menu-item .sub-item {
    line-height: var(--his-nav-height-item);
}

.menu-item-label {
    display: flex;
    justify-content: space-between;
    text-wrap: nowrap;
}

.menu-item-dropdown {
    display: none;
    opacity: 0;
    left: 0;
    position: absolute;
    padding-top: .25rem;
    min-width: 15rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .15);
}

.menu-item ul {
    flex-wrap: nowrap;
    list-style: none;
    margin: 0;
    padding: 0;
}
</style>