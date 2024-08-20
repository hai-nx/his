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
            <ul class="d-menu-item-dropdown" v-if="allowOpenPopup && hasChildren">
                <li v-for="(item, index) in item.children" :key="index">
                    <d-divider v-if="item.separator"></d-divider>
                    <d-menu-item v-else :item="item" :depth="depth + 1" @click="onClick"></d-menu-item>
                </li>
            </ul>
        </div>
    </transition>
</template>

<style>
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
    background-color: #FFF;
    color: #00446D;
    /* background-color: #30305a;
    color: var(--his-nav-color-hover); */
    transition: all linear 0.2s;
}

.d-menu-item:hover>.d-menu-item-dropdown {
    display: block;
    opacity: 1;
    transition: all linear .2s;
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
    flex-wrap: nowrap;
    list-style: none;
    margin: 0;
    padding: 0;
    padding-bottom: 1px;
    min-width: 15.5rem;
    background-color: #00446D;
}


.sub-item {
    line-height: 40px;
}

.sub-item:hover {
    background-color: #E8EEF2;
    color: #005689;
}

.sub-item .d-menu-item-arrow {
    transform: rotate(-90deg);
}

.sub-item .d-menu-item-dropdown {
    top: 0;
    left: 100%;
}
</style>