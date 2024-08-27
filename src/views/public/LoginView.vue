<template>
    <div class="x-layout">
        <div class="col-sm-5 auth-form">

            <div class="text-center">
                <h4 class="mb-3">ĐĂNG NHẬP</h4>
            </div>

            <a-alert v-if="error" :message="error" type="error" class="mb-3" />


            <a-card>
                <div class="form-data">
                    <a-form layout="vertical" autocomplete="off">
                        <a-form-item label="Tên đăng nhập" :disabled="loading"
                            :rules="[{ required: true, message: 'Please input your username!' }]">
                            <a-input v-model:value="username" :disabled="loading" />
                        </a-form-item>

                        <a-form-item label="Mật khẩu"
                            :rules="[{ required: true, message: 'Please input your password!' }]">
                            <a-input-password v-model:value="password" :disabled="loading"/>
                        </a-form-item>

                        <a-form-item>
                            <a-checkbox v-model:checked="remember" :disabled="loading">Ghi nhớ đăng nhập</a-checkbox>
                        </a-form-item>

                        <a-form-item class="mb-0">
                            <a-button type="primary" class="w-100 mb-3" :loading="loading" @click.prevent="onSubmit">
                                Đăng nhập
                            </a-button>
                            <a-button type="link" class="w-100">Quên mật khẩu?</a-button>
                        </a-form-item>
                    </a-form>
                </div>
            </a-card>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useAuth } from '@/stores/auth'

const store = useAuth();
const username = ref<string>('');
const password = ref<string>('');
const remember = ref<boolean>(true);
const loading = computed(() => store.loading);
const error = computed(() => store.error);

const onSubmit = () => {
    //store.login(username.value, password.value, remember.value);
    store.loginAsync(username.value, password.value, remember.value);
}

store.logout();
username.value = localStorage.getItem('username') ?? '';
</script>

<style scoped>
.auth-form {
    width: 360px;
    margin: 0 auto;
}

.x-layout {
    display: flex;
    justify-content: center;
    background-image: url('../../assets/login-background.jpg');
    padding-top: 5rem;
    padding-bottom: 5rem;
    height: 100%;
}
</style>