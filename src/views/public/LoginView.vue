<template>
    <div class="container h-100 py-5">
        <div class="row d-flex justify-content-center">
            <div class="col-sm-5 auth-form">

                <div class="text-center">
                    <h4 class="mb-3">ĐĂNG NHẬP</h4>
                </div>

                <a-alert v-if="error" :message="error" type="error" class="mb-3" />


                <a-card>
                    <div class="form-data">
                        <a-form layout="vertical" autocomplete="off">
                            <a-form-item label="Tên đăng nhập" 
                                :disabled="loading"
                                :rules="[{ required: true, message: 'Please input your username!' }]">
                                <a-input v-model:value="username" :disabled="loading"/>
                            </a-form-item>

                            <a-form-item label="Mật khẩu"
                                :rules="[{ required: true, message: 'Please input your password!' }]">
                                <a-input-password v-model:value="password" :disabled="loading"/>
                            </a-form-item>

                            <a-form-item>
                                <a-checkbox v-model:checked="remember" :disabled="loading">Ghi nhớ đăng nhập</a-checkbox>
                            </a-form-item>

                            <a-form-item class="mb-0">
                                <a-button type="primary" class="w-100 mb-3" :loading="loading" @click.prevent="handleClick">
                                    Đăng nhập
                                </a-button>
                                <a-button type="link" class="w-100">Quên mật khẩu?</a-button>
                            </a-form-item>
                        </a-form>
                    </div>
                </a-card>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useAuth } from '@/stores/auth'

export default defineComponent({
    name: 'LoginView',
    setup() {
        const store = useAuth();

        const username = ref<string>('');
        const password = ref<string>('');
        const remember = ref<boolean>(true);
        const loading = computed(() => store.loading);
        const error = computed(() => store.error);

        const handleClick = () => {
            store.login(username.value, password.value, remember.value);
        }

        return {
            store,
            username,
            password,
            remember,
            error,
            loading,
            handleClick
        }
    },
    created() {
        this.store.logout();
    },
});
</script>

<style scoped>
.auth-form {
    width: 360px;
    margin: 0 auto;
}
</style>