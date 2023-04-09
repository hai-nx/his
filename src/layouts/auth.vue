<template>
    <div class="d-flex h-100">
        <his-sidebar></his-sidebar>
        
        <div class="d-flex flex-column his-bg w-100">
            <his-nav></his-nav>
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { HisNav, HisSidebar } from '@/components'

export default {
    data() {
        return {}
    },
    components: {  
        HisNav,
        HisSidebar
    }
}
</script>

<style scoped>
nav {
    height: 50px;
}


</style>