<template>
    <nav class="navbar navbar-inverse border-bottom">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="#">Hospital Infomation System</a>
            </div>
            <ul class="nav navbar-nav navbar-right">
                <li>
                    <button class="btn btn-primary"
                        @click="login()">
                        Đăng nhập
                    </button>
                </li>
            </ul>
        </div>
    </nav>
    
    <div class="container">
        <h3>Right Aligned Navbar</h3>
        <p>The .navbar-right class is used to right-align navigation bar buttons.</p>
    </div>

</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        login() {
            this.$router.push({ name: 'login' });
        }
    },
}
</script>