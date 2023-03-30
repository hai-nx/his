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
                                    <img src="@/assets/background-login.jpg" width="420"/>
                                </div>

                                <div class="col-lg-6">
                                    <div class="p-5">
                                        <div class="text-center">
                                            <h1 class="h4 text-gray-900 mb-4">ĐĂNG NHẬP</h1>
                                        </div>
                                        <form @submit.prevent="login()">
                                            <div>
                                                <div class="form-group mb-3">
                                                    <label for="username" class="form-label">Tên đăng nhập</label>
                                                    <input id="username" 
                                                        type="text" 
                                                        class="form-control"
                                                        v-model="username"
                                                        :on-blur="validateUsername"
                                                        :class="{ 'is-invalid': errors.username }"
                                                        />
                                                    <div class="invalid-feedback">{{ errors.username }}</div>
                                                </div>
                                                <div class="form-group mb-3">
                                                    <label for="password" class="form-label">Tên đăng nhập</label>
                                                    <input id="password" 
                                                        type="password" 
                                                        class="form-control"
                                                        v-model="password"
                                                        :on-blur="validatePassword"
                                                        :class="{ 'is-invalid': errors.password }"
                                                        />
                                                    <div class="invalid-feedback">{{ errors.password }}</div>
                                                </div>
                                                <div class="form-group mb-4">
                                                    <div class="form-check mb-0">
                                                        <input id="remember" type="checkbox" class="form-check-input me-2" :value="is_remember"/>
                                                        <label for="remember" class="form-check-label">
                                                            Nhớ mật khẩu
                                                        </label>
                                                    </div>
                                                </div>

                                                <div class="text-center mb-3">
                                                    <button type="submit" class="btn btn-primary btn-md w-100" style="padding-left: 2.5rem; padding-right: 2.5rem;">Đăng nhập</button>
                                                </div>
                                                <div class="text-center">
                                                    <button type="button" class="btn btn-md w-100" @click="forgotPassword()">Quên mật khẩu?</button>
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
import { useAuth } from '@/stores/auth'

export default {
    name: 'login',
    setup() {
        const store = useAuth();
        return {
            store
        }
    },
    data() {
        return {
            is_remember: true,
            email: '',
            username: '',
            password: '',

            errors: {
                username: '',
                password: '',
                email: ''
            }
        }
    },
    created() {
        this.store.logout();
    },
    methods: {
        validateUsername() {
            let isValid = true;
            this.errors.username = '';
            if (!this.username) {
                this.errors.username = 'Tên đăng nhập không được bỏ trống!';
                isValid = false;
            }
            return isValid;
        },
        validatePassword() {
            let isValid = true;
            this.errors.password = '';
            if (!this.password) {
                this.errors.password = 'Mật khẩu không được bỏ trống!';
                isValid = false;

                console.log('xxxx')
            }
            return isValid;
        },
        validateBeforeSubmit() {
            let isValid = true;
            if (!this.validateUsername()) {
                isValid = false;
            }
            if (!this.validatePassword()) {
                isValid = false;
            }
            return isValid
        },
        login() {
            if (this.validateBeforeSubmit()) {
                const payload = { username: this.username, password: this.password, is_remember: this.is_remember };
                this.store.login(payload);
                if (this.store.getAuthenticated) {
                    this.$router.push({ name: 'sel-department'});
                }
            }
        },
        forgotPassword() {
            this.$router.push({ name: 'forgot_password'});
        }
    }
}
</script>

<style scoped>
img {
    display:block;
    margin:auto;
}
</style>