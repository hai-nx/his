<template>
    <div class="d-flex h-100">
        <sidebar></sidebar>
        <slot></slot>
    </div>
</template>

<script>
import sidebar from '@/components/sidebar'

export default {
    data() {
        return {}
    },
    components: {  
        sidebar
    }
}
</script>

<style scoped>
    
</style>