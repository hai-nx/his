<script setup lang="ts">
import { computed, defineEmits, defineProps, ref, PropType } from 'vue';
import { MenuItem } from './index'

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


const cls = computed(() => ({
    'sub-item': props.depth > 0,
}))

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

</script>

<template>
    <transition>
        <div class="d-menu-item" :class="cls">
            <!--label-->
            <div class="d-menu-item-label" @click.stop="itemClick(item)">
                <span>{{ item.label }}</span>
                <i class="d-menu-item-arrow bi bi-chevron-down" v-if="hasChildren"></i>
            </div>

            <!--dropdown-->
            <div v-if="allowOpenPopup && hasChildren" class="d-menu-item-dropdown">
                <ul>
                    <li v-for="(item, index) in item.children" :key="index">
                        <d-divider v-if="item.separator"></d-divider>
                        <d-menu-item v-else :item="item" :depth="depth + 1" @click="onClick"></d-menu-item>
                    </li>
                </ul>
            </div>
        </div>
    </transition>
</template>

<style scoped>
.d-menu-item {
    display: block;
    position: relative;
    align-items: stretch;
    color: #FFF;
    cursor: pointer;
    padding: 0 .75rem;
    white-space: nowrap;
    height: 100%;
}

.d-menu-item:hover {
    background-color: #30305a;
    color: var(--his-nav-color-hover);
    transition: all linear 0.2s;
}

.d-menu-item:hover>.d-menu-item-dropdown {
    display: block;
    opacity: 1;
    transition: all linear .2s;
}

.d-menu-item .sub-item {
    line-height: var(--his-nav-height-item);
}

.d-menu-item-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-wrap: nowrap;
    height: 100%;
}

.d-menu-item-arrow {
    padding-left: 4px;
    font-size: 12px;
}

.d-menu-item-dropdown {
    display: none;
    opacity: 0;
    left: 0;
    position: absolute;
    padding-top: .25rem;
    min-width: 15rem;
    background-color: #30305a;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .15);
}

.d-menu-item-dropdown>ul {
    flex-wrap: nowrap;
    list-style: none;
    margin: 0;
    padding: 0;
}
</style>