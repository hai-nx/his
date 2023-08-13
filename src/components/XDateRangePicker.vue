<template>
    <a-dropdown-button>
        Dropdown
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

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "VDateRangePicker",
    props: {
        period: {
            type: Number,
            default: 0
        },
        from: {
            type: Date
        },
        to: {
            type: Date
        },
        showOptionArea: {

        }
    },
    setup() {
        return {

        }
    },
});
</script>

<style></style>