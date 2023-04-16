<template>
    <nav class="navbar navbar-expand-sm bg-light border-bottom p-0 container-fluid justify-content-between">
        <ul class="navbar-nav">
            <li class="nav-item">
                <div class="d-flex align-items-center">
                    <i class="bi bi-menu-app ps-3"></i>
                    <router-link class="nav-link" :to="{ name: 'sel-department' }">tmp_BRANCH_NAME</router-link>
                </div>
            </li>
        </ul>

        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="#">tmp_USERNAME</a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'HisNav',
    data() {
        return {}
    }
}
</script>

<style>
    
</style>