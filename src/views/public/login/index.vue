<script setup lang="ts">
import { ref } from 'vue'

const username = ref<string>('123')
const password = ref<string>('123qwe')



</script>

<template>
    <div class="login">
        <div class="login-container">
            <h3 class="title">Đăng nhập</h3>
            <div class="mb-3">
                <label for="iusername" class="form-label">Tên đăng nhập</label>
                <d-input :value="username" type="text" class="form-control" id="iusername"></d-input>
            </div>
            <div class="mb-3">
                <label for="ipassword" class="form-label">Mật khẩu</label>
                <d-input :value="password" type="password" class="form-control" id="ipassword"></d-input>
            </div>
            <div class="mb-1">
                <d-button type="primary" fluid>Đăng nhập</d-button>
            </div>
            <div>
                <d-button type="text" fluid>Quên mật khẩu</d-button>
            </div>
        </div>
    </div>
</template>

<style>
.login {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
}

.login-container {
    background-color: #fff;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    margin-left: auto;
    margin-right: auto;
    padding: 20px 40px;
    width: 455px;
    min-height: 600px;
}

.login-container .title {
    color: #333131;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 36px;
    text-align: center;
}
</style>