<template>
    <div class="d-flex h-100">
        <his-sidebar></his-sidebar>
        
        <div class="flex-fill">
            <div class="d-flex flex-column h-100">
                <his-nav></his-nav>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
import HisSidebar from '@/components/his-sidebar'
import HisNav from '@/components/his-nav'

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