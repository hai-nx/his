<script setup lang="ts">
import { computed, defineEmits, defineProps, ref, PropType } from 'vue'
import { MenuItem } from '.';

const props = defineProps({
    item: {
        type: Object as PropType<MenuItem>,
        required: true,
    },
    depth: {
        type: Number,
        default: 0
    }
})

const emit = defineEmits<{
    (e: "click", item: MenuItem): void;
}>()

const showDropdown = ref(true)
const hasDropdown = computed(() => props.item.children && props.item.children.length > 0)

const cls = computed(() => {
    return {
        'sub-item': props.depth > 0
    }
})

function onClick(item: MenuItem) {
    console.log(item.key)
    console.log(item)
    try {
        // đóng danh sách con
        showDropdown.value = false;
        // gọi sự kiện
        emit("click", item)
    }
    finally {
        // delay 1s để có thời gian đóng các danh sách con
        setTimeout(() => showDropdown.value = true, 1000)
    }
}



</script>

<template>
    <li class="d-menuitem" :class="cls">
        <div v-if="item.separator"></div>
        <div v-else class="d-menuitem-content" @click.stop="onClick(item)">
            <span>{{ item.label }}</span>
            <i class="bi bi-chevron-down" v-if="hasDropdown"></i>
        </div>

        <div v-if="hasDropdown && showDropdown" class="d-menuitem-dropdown">
            <ul>
                <template v-for="(child, index) in item.children" :key="index">
                    <index :item="child" :depth="depth + 1" @click="onClick"></index>
                </template>
            </ul>
        </div>
    </li>
</template>

<style>
.d-menuitem {
    display: inline-flex;
    align-items: stretch;
    position: relative;
    padding: .25rem 1px;
    height: 100%;
}

.d-menuitem:not(.sub-item) {
    float: left;
    font-weight: 500;
    margin: 0;
}

.d-menuitem-content {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    gap: 3px;
    padding: 0 .75rem;
    border-radius: 2px;
    width: 100%;
}

.d-menuitem-content i {
    font-size: 0.75rem;
}

.d-menuitem-dropdown {
    display: none;
    opacity: 0;
    position: absolute;
    background-color: transparent;
    left: 0;
    top: 100%;
    padding: 4px 0;
    min-width: 15rem;
}

.d-menuitem-dropdown>ul {
    background-color: #fff;
    border: 1px solid #dbdbdb;
    border-radius: 2px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .15);
}



.d-menuitem:hover > .d-menuitem-content {
    background-color: #eee;
}

.d-menuitem:hover .d-menuitem-dropdown {
    display: block;
    opacity: 1;
    transition: all linear .2s;
}



/* sub */
.sub-item {
    width: 100%;
    height: 2.2rem;
    padding: .125rem;
}

.sub-item .d-menuitem-content {
    justify-content: space-between;
    width: 100%;
    background-color: transparent;
}

.sub-item .d-menuitem-content i {
    transform: rotate(-90deg);
}

.sub-item .d-menuitem-content:hover {
    background-color: bisque;
}

.d-menuitem.sub-item .d-menuitem-dropdown {
    display: none;
    left: 100%;
    top: -.25rem;
    padding: 0;
    padding-left: .25rem;
    margin-top: .25rem;
}

.d-menuitem.sub-item:hover .d-menuitem-dropdown {
    display: block;
        opacity: 1;
        transition: all linear .2s;
}

/* .d-menuitem.sub-item {
    width: 100%;
}

.d-menuitem.sub-item .d-menuitem-content {
    justify-content: space-between;
    width: 100%;
    background-color: aquamarine;
}

.d-menuitem.sub-item .d-menuitem-content:hover {
    background-color: bisque;
}

.d-menuitem.sub-item .d-menuitem-dropdown {
    height: 32px;
} */
</style>