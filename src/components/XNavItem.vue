<template>
    <div class="nav-item" :class="depth === 0 ? '' : 'nav-item-sub'">
        <div class="nav-item-label d-flex justify-content-between" @click.stop="onClick(dataSource)">
            <span href="#">{{ dataSource.label }}</span>
            <i class="bi bi-chevron-down nav-item-arrow" v-if="showDropdownIcon"></i>
        </div>

        <div class="nav-item-dropdown" v-if="showDropdownIcon && showDropdown">
            <ul>
                <li v-for="(item, index) in dataSource.children" :key="index">
                    <div v-if="item.type === 'separator'" class="border-bottom">
                    </div>
                    <x-nav-item v-else :data-source="item" :depth="depth + 1" @click="onClick"></x-nav-item>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { PropType, computed, defineEmits, defineProps, ref } from "vue";
import { XItemType } from ".";

const props = defineProps({
    dataSource: {
        type: Object as PropType<XItemType>,
        required: true,
    },
    depth: {
        type: Number,
        default: 0,
    },
});

const emit = defineEmits<{
    (e: "click", item: XItemType): void
}>();

const showDropdown = ref<boolean>(true)
const showDropdownIcon = computed(() => props.dataSource.children !== undefined && props.dataSource.children.length > 0)

function onClick(item: XItemType) {
    try
    {
        // đóng danh sách con
        showDropdown.value = false;
        // gọi sự kiện
        emit("click", item)
    } finally {
        // delay 1s để có thời gian đóng các danh sách con
        setTimeout(() => showDropdown.value = true, 1000)
    }
    
}

</script>

<style scoped>
.nav-item {
    display: block;
    position: relative;
    background-color: var(--his-nav-background-color);
    color: var(--his-nav-color);
    cursor: pointer;
    padding: 0 18px;
    white-space: nowrap;
}

.nav-item:hover {
    background-color: var(--his-nav-background-color-active);
    color: var(--his-nav-color-active);
    transition: all linear 0.2s;
}

.nav-item:hover > .nav-item-dropdown {
    display: block;
    opacity: 1;
    transition: all linear .2s;
}

.nav-item-sub {
    height: var(--his-nav-item-height);
    line-height: var(--his-nav-item-height);
}

.nav-item-sub .nav-item-dropdown {
    top: 0;
    left: 100%;
    padding-left: .25rem;
    padding-top: 0;
}

.nav-item-sub .nav-item-arrow {
    transform: rotate(-90deg);
    margin-right: -8px;
}

.nav-item-dropdown {
    display: none;
    opacity: 0;
    left: 0;
    position: absolute;
    padding-top: .25rem;
    min-width: 15rem;
}

.nav-item-dropdown > ul {
    list-style: none;
    width: 100%;
    padding-left: 0;
}

.nav-item-arrow {
    font-size: 10px;
    margin-left: 4px;
}

</style>
