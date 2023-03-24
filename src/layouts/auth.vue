<template>
    <div class="d-flex h-100">
        <sidebar></sidebar>
        
        <div class="w-100">
            <nav class="navbar navbar-expand-sm bg-light border-bottom p-0">

                <div class="container-fluid justify-content-end">
                    <!-- Links -->
                    <ul class="navbar-nav">
                        <!-- <li class="nav-item">
                        <a class="nav-link" href="#">Link 1</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Link 2</a>
                        </li> -->
                        <li class="nav-item">
                            <a class="nav-link" href="#">tmp_USERNAME</a>
                        </li>
                    </ul>
                </div>

            </nav>

            <main>
                <slot></slot>
            </main>
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
nav {
    height: 50px;
}
</style>