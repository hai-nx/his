<script setup lang="ts">
import { computed, defineEmits, defineProps, ref, PropType } from 'vue'
import { MenuItem } from '.';

const props = defineProps({
    item: {
        type: Object as PropType<MenuItem>,
        required: true,
    },
    level: {
        type: Number,
        default: 0
    }
})

const emit = defineEmits<{
    (e: "click", item: MenuItem): void;
}>()

const showDropdown = ref(true)
const hasDropdown = computed(() => props.item.children && props.item.children.length > 0)
const visible = computed(() => props.item.visible !== false)
const cls = computed(() => {
    return {
        'd-menu-subitem': props.level > 0
    }
})

function onClick(item: MenuItem) {
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
    <li class="d-menu-item" :class="cls">
        <div class="d-menu-item-content" @click.stop="onClick(item)">
            <span>{{ item.label }}</span>
            <i class="d-menu-item-icon bi bi-chevron-down" v-if="hasDropdown"></i>
        </div>

        <div v-if="hasDropdown && showDropdown" class="d-menu-item-popup">
            <ul class="d-menu-submenu">
                <template v-for="(child, index) in item.children" :key="index">
                    <li v-if="visible && child.separator" role="separator" class="d-menu-subitem-separator"></li>
                    <index v-else-if="visible" :item="child" :level="level + 1" @click="onClick" />
                </template>
            </ul>
        </div>
    </li>
</template>

<style>
.d-menu-item {
    float: left;
    display: inline-flex;
    cursor: pointer;
    font-weight: 500;
    margin: 0;
    padding: .25rem 0;
    position: relative;
}

.d-menu-item-content {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
    border-radius: 2px;
    padding-right: .75rem;
    padding-left: .75rem;
}

.d-menu-item-icon {
    font-size: 0.75rem;
}

.d-menu-item-popup {
    display: none;
    opacity: 0;
    position: absolute;
    background-color: transparent;
    left: 0;
    top: 100%;
    padding: .25rem 0;
    min-width: 15rem;
}



.d-menu-item:hover>.d-menu-item-content {
    background-color: #eee;
}

.d-menu-item:hover>.d-menu-item-popup {
    display: block;
    opacity: 1;
    transition: all linear .2s;
}

/* submenu */
.d-menu-submenu {
    display: flex;
    flex-direction: column;
    gap: 0;
    background-color: #fff;
    padding: .25rem 0;
    border: var(--d-border-width) solid var(--d-border-color);
    border-radius: var(--d-border-radius);
}

.d-menu-subitem-separator {
    border-top: var(--d-border-width) solid var(--d-border-color) !important;
    margin: 0;
}

.d-menu-subitem {
    width: 100%;
    padding: 0;
    height: 32px;
}

.d-menu-subitem .d-menu-item-content {
    display: flex;
    justify-content: space-between;
    border-radius: 0;
    width: 100%;
}

.d-menu-subitem .d-menu-item-icon {
    transform: rotate(-90deg);
}

.d-menu-subitem .d-menu-item-popup {
    display: none;
    left: 100%;
    top: -.25rem;
    padding: 0;
    margin: 0;
    padding-left: .25rem;
}
</style>