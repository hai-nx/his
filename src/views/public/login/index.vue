<script setup lang="ts">
import { ref, computed } from 'vue'
import { useAuth } from '@/store'

const store = useAuth();
const username = ref();
const password = ref<string>('');
const loading = computed(() => store.loading);
const error = computed(() => store.error);

const onLogin = () => {
    //store.login(username.value, password.value)
    alert(username.value)
}

</script>

<template>
    <div class="login">
        <div class="login-container">
            <d-text as="h2" class="login-title">Đăng nhập</d-text>

            <d-text for="username" class="login-label" star>Tên đăng nhập</d-text>
            <d-input id="username" class="login-input" v-model="username" :disabled="loading"
                @change="onLogin"></d-input>

            {{ username }}
            <d-input type="radio" name="username1" value="1000a" class="login-input" v-model="username" checked
                :disabled="loading"></d-input>

            <div style="display: inline-flex; gap: 6px; align-items: center;">
                <d-input type="radio" name="username2" value="1000b" class="login-radio" v-model="username"
                    :disabled="loading"></d-input>
                sdasdasdasdas
            </div>

            <d-button type="primary" class="my-3" icon="bi bi-arrow-right-circle h5 mb-0" :loading="loading"
                @click.prevent="onLogin">Đăng nhập</d-button>

            <d-text for="password" star>Mật khẩu</d-text>
            <d-password id="password" class="login-input" v-model:value="password" :disabled="loading"></d-password>

            <div class="login-label-faise" v-if="error">{{ error }}</div>

            <d-button type="primary" class="login-button my-3" icon="bi bi-arrow-right-circle h5 mb-0"
                :loading="loading" @click.prevent="onLogin">Đăng nhập</d-button>

            <div class="mb-4 d-flex justify-content-center">
                <d-button type="link" class="px-0">Quên mật khẩu?</d-button>
            </div>

        </div>
    </div>
</template>

<style>
.login {
    font-family: Roboto,
        Helvetica,
        Arial,
        sans-serif;
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
    margin-bottom: 40px;
    text-align: center;
}

.login-label {
    margin-bottom: 4px;
}

.login-label-faise {
    display: block;
    margin-bottom: 16px;
    color: red;
}

.login-input {
    line-height: 1.2;
    margin-bottom: 12px;
    line-height: 1.2;
    min-height: 40px;
}

.login-radio {
    line-height: 24px;
}

.login-button {
    font-weight: 550 !important;
    min-height: 40px;
}

.login-button-fogot {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}
</style>