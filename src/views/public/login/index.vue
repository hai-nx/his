<script setup lang="ts">
import { ref } from 'vue'

const username = ref<string>('123')
const password = ref<string>('123qwe')



</script>

<template>
    <div class="login">
        <div class="login-container">
            <label class="mb-4">Đăng nhập</label>
            <label>Tài khoản</label>
            <d-input class="mb-2 py-1"></d-input>
            <label>Mật khẩu</label>
            <d-input class="mb-2 py-1"></d-input>
            <d-button type="primary" class="mb-2 py-1">Đăng nhập</d-button>
            <div class="d-flex justify-content-center mb-2">
                <d-button type="link">Quên mật khẩu</d-button>
            </div>
        </div>
    </div>
</template>

<style>
.login {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    padding: 16px;
}

.login-container {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border: 1px solid #dbdbdb;
    border-radius: 6px;
    padding: 1rem;
    width: 420px;
}
</style>