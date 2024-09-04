<script setup lang="ts">
import { ref } from 'vue'

const username = ref<string>('123')
const password = ref<string>('123qwe')



</script>

<template>
    <div class="login">
        <div class="login-container">
            <h4 class="login-title">Đăng nhập</h4>

            <label for="username" class="login-label">Tài khoản</label>
            <d-input id="username" class="login-input"></d-input>
            <label for="password" class="login-label">Mật khẩu</label>
            <d-input id="password" class="login-input" type="password"></d-input>

            <d-button type="primary" class="login-button mb-3" icon="bi bi-arrow-right-circle">Đăng nhập</d-button>
            <d-button type="text" class="mb-3" icon="bi bi-arrow-right-circle">Quên mật khẩu</d-button>
        </div>
    </div>
</template>

<style>
.login {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
}

.login-title {
    margin-bottom: 32px;
}

.login-label {
    margin-bottom: 4px;
}

.login-input {
    margin-bottom: 16px;
    font-size: 16px;
    line-height: 1.2;
    min-height: 36px;
}

.login-button {
    font-size: 16px;
    line-height: 1.2;
    min-height: 36px;
}

.login-button-fogot {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}
</style>