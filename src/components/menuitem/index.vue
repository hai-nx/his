<script setup lang="ts">
import { computed, defineEmits, defineProps, PropType, ref } from 'vue'
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

const showDropdown = ref<boolean>(false)
const visibleDropdown = computed(() => props.item.children && props.item.children.length > 0)

</script>

<template>
    <li class="d-menuitem">
        <div v-if="item.separator" class="d-menuitem-separator"></div>
        <div v-else class="d-menuitem-content">
            <span>{{ item?.label }}</span>
            <i class="bi bi-chevron-down" v-if="visibleDropdown"></i>
        </div>
        <ul v-if="visibleDropdown && showDropdown" class="d-menuitem-submenu">

        </ul>
    </li>
</template>

<style>
.d-menuitem {
    display: inline-flex;
}

.d-menuitem-content {
    padding: 0 16px;
    background-color: green;
}
.d-menuitem-content:hover {
    background-color: greenyellow;
}
</style>