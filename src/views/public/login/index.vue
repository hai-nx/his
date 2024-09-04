<script setup lang="ts">
import { ref, computed } from 'vue'
import { useAuth } from '@/store'

const store = useAuth();
const username = ref<string>('');
const password = ref<string>('');
const loading = computed(() => store.loading);
const error = computed(() => store.error);

const onLogin = () => {
    store.loginAsync(username.value, password.value)
}

</script>

<template>
    <div class="login">
        <div class="login-container">
            <d-label as="h2">Đăng nhập</d-label>

            <d-label for="password" star>Tên đăng nhập</d-label>
            <d-input id="username" class="login-input" v-model:value="username" :disabled="loading"></d-input>

            <d-label for="password" star>Mật khẩu</d-label>
            <d-input id="password" class="login-input" type="password" v-model:value="password"
                :disabled="loading"></d-input>

            <div class="login-label-faise" v-if="error">{{ error }}</div>

            <div class="mb-4">
                <d-button type="text" class="px-0">Quên mật khẩu?</d-button>
            </div>
            <d-button type="primary" class="login-button mb-3" icon="bi bi-arrow-right-circle" :loading="loading"
                @click.prevent="onLogin">Đăng nhập</d-button>

        </div>
    </div>
</template>

<style>
.login {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url('../../../assets/images/login-background.jpg');
    min-height: 100vh;
    padding: 48px 0;
}

.login-container {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border: 1px solid #dbdbdb;
    border-radius: 8px;
    padding: 32px 40px 32px 40px;
    width: 400px;
    min-height: 550px;
}

.login-title {
    font-size: 32px !important;
    margin-bottom: 32px;
}

.login-label {
    margin-bottom: 4px;
}

.login-label-faise {
    display: block;
    color: #ff1d1d;
    margin-bottom: 16px;
}

.login-input {
    margin-bottom: 12px;
    line-height: 1.2;
    min-height: 36px;
}

.login-button {
    font-weight: 550 !important;
    min-height: 36px;
}

.login-button-fogot {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}
</style>