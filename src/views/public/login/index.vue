<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useAuth } from '@/store'

const store = useAuth();
const username = ref();
const password = ref<string>('');
const loading = computed(() => store.loading);
const error = computed(() => store.error);

function onLogin() {
    store.login(username.value, password.value)
}

function onForgotPassword() {
    console.log("")
}





const err_username = ref<string | undefined>(undefined)

function valid() {
    if (!username.value || username.value === '')
        err_username.value = 'Tên đăng nhập không được để trống!'
    else
        err_username.value = undefined
}

</script>

<template>
    <div class="login">
        <div class="login-wrap">
            <div class="login-wrap-header">
                <span class="login-title">Đăng nhập</span>
            </div>

            <div class="login-wrap-body">
                <div class="login-error" v-if="error">{{ error }}</div>


                <d-text for="username" star>Tên đăng nhập</d-text>
                <d-input id="username" class="login-input mb-2" v-model="username" :disabled="loading"
                    :invalid="err_username" @change="valid"></d-input>

                <d-text for="password" star>Mật khẩu</d-text>
                <d-password id="password" class="login-input" v-model:value="password" :disabled="loading"></d-password>
            </div>

            <div class="login-wrap-footer">
                <d-button type="primary" class="login-button" icon="bi bi-arrow-right-circle" :loading="loading"
                    @click.prevent="onLogin">Đăng nhập</d-button>

                <d-button type="link" :disabled="loading" @click.prevent="onForgotPassword">Quên mật khẩu?</d-button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.login {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('../../../assets/images/login-background.jpg');
    min-height: 100%;
    padding: 40px 0;
}

.login-wrap {
    display: flex;
    flex-direction: column;
    gap: 24px;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 12px 20px rgba(0, 0, 0, .12);
    padding: 1.25rem;
    width: 360px;
}

.login-wrap-body {
    display: flex;
    flex-direction: column;
    gap: .5rem;
}

.login-wrap-footer {
    display: flex;
    flex-direction: column;
    gap: .5rem;
}

.login-title {
    font-size: 30px;
    font-weight: 550;
}

.login-input {
    height: 40px;
}

.login-button {
    height: 40px;
}

.login-error {
    color: red;
    margin-bottom: .5rem;
}
</style>