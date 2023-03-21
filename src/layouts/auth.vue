<template>
    <div class="d-flex h-100">
        <sidebar></sidebar>
        
        <div class="w-100  bg-primary">
            <nav class="navbar navbar-expand-sm bg-light">

                <div class="container-fluid justify-content-end border-bottom">
                    <!-- Links -->
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link" href="#">Link 1</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Link 2</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Link 3</a>
                        </li>
                    </ul>
                </div>

            </nav>

            <slot></slot>
        </div>
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