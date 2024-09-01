<script setup lang="ts">
import { ref } from 'vue'

const username = ref<string>('123')
const password = ref<string>('123qwe')



</script>

<template>
    <div class="login">
        <d-card class="login-container">
            <label for="p1" class="mb-2">Tên đăng nhập</label>
            <d-row>

                <d-input id="p1" :value="username" size="middle"></d-input>
            </d-row>
            <d-row>

                <d-input id="p1" :value="username" size="large"></d-input>
            </d-row>

            <d-row>

                <d-input-password id="p1" :value="username" size="large"></d-input-password>
            </d-row>

            <label for="p2">Mật khẩu</label>
            <div class="row mb-3">
                <d-input-password id="p2" :value="password"></d-input-password>
            </div>
            <div class="row mb-3">
                <label>Quên mật khẩu</label>
            </div>

            <d-button type="primary" size="large" fluid>Đăng nhập</d-button>
        </d-card>
    </div>
</template>

<style>
.login {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 16px;
}

.login-container {
    margin-left: auto;
    margin-right: auto;
    padding: 1rem 0;
    width: 420px;
}
</style>