<template>
    <component :is="layout">
        <router-view/>
    </component>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { layout_default } from '@/utils/constant'

export default {
  name: 'App',
  setup() {
        const route = useRoute();
        return {
            layout: computed(() => route.meta.layout || layout_default)
        }
    }
}
</script>

<style>
html, body, 
#app {
    height: 100%;
}

:root {
    --his-background-color: #F0F1F1;
    --his-color: #333;
}
</style>
