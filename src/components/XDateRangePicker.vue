<template>
    <a-dropdown-button>
        Tìm kiếm
        <template #overlay>
            <a-menu>
                <a-menu-item key="1">
                    <UserOutlined />
                    1st menu item
                </a-menu-item>
                <a-menu-item key="2">
                    <UserOutlined />
                    2nd menu item
                </a-menu-item>
                <a-menu-item key="3">
                    <UserOutlined />
                    3rd item
                </a-menu-item>
            </a-menu>
        </template>
    </a-dropdown-button>
    <a-modal>
        <slot name="filter"></slot>
    </a-modal>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps({
    fromDate: Date,
    toDate: Date
})

const emit = defineEmits(['change'])

</script>