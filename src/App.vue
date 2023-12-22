<template>
    <component :is="layout">
        <router-view />
    </component>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRoute } from "vue-router";
import { LAYOUT_DEFAULT } from "@/utils/constant";

export default defineComponent({
    name: "App",
    setup() {
        const route = useRoute();
        return {
            layout: computed(() => route.meta.layout || LAYOUT_DEFAULT),
        };
    },
});
</script>
