<template>
    <div class="h-100 bg-primary">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-10 col-lg-12 col-md-9">
                    <div class="card shadow-lg my-5">
                        <div class="card-body p-0">
                            <div class="row">
                                <!--images-->
                                <div class="col-lg-6 d-none d-lg-block">
                                    <img src="@/assets/background-login.jpg" width="400"/>
                                </div>

                                <div class="col-lg-6">
                                    <div class="p-5">
                                        <div class="text-center">
                                            <h1 class="h4 text-gray-900 mb-4">QUÊN MẬT KHẨU</h1>
                                        </div>
                                        <form @submit.prevent="reset()">
                                            <div>
                                                <div class="form-group mb-4">
                                                    <label for="username" class="form-label">Email</label>
                                                    <input id="username" 
                                                        type="email" 
                                                        class="form-control"
                                                        v-model="email"
                                                        :class="{ 'is-invalid': errors.email }"
                                                        />
                                                    <div class="invalid-feedback">{{ errors.email }}</div>
                                                </div>

                                                <div class="text-center mt-4 mb-3 pt-2">
                                                    <button type="submit" class="btn btn-primary btn-md w-100" style="padding-left: 2.5rem; padding-right: 2.5rem;">Đặt lại mật khẩu</button>
                                                </div>
                                                <div class="text-center">
                                                    <button type="button" class="btn btn-md w-100" @click="login()">Quay lại đăng nhập</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'forgot_password',
    data() {
        return {
            email: '',
            errors: {
                email: ''
            }
        }
    },
    methods: {
        reset() {
            // xử lý gửi yêu cầu reset password đến email
            // và hiển thị thông báo cho người dùng
            this.$router.push({ name: 'login'});
        },
        login() {
            this.$router.push({ name: 'login'});
        }
    },
}
</script>

<style>
    
</style>