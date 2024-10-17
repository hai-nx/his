<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useAuth } from '@/store'
import Msg from '@/components/message'

const store = useAuth();
const username = ref();
const password = ref<string>('');
const loading = computed(() => store.loading);
const error = computed(() => store.error);

const onLogin = () => {
    store.login(username.value, password.value)
}





const err_username = ref<string|undefined>(undefined)

function valid() {
    if (!username.value || username.value === '')
        err_username.value = 'Tên đăng nhập không được để trống!'
    else
        err_username.value = undefined
}

const columns = ref([
    {
        label: "Mã chi nhánh",
        key: "code",
        dataIndex: "code",
        width: 200,
    },
    {
        label: "Tên chi nhánh",
        key: "name",
        dataIndex: "name",
        width: 500,
    },
    {
        label: "Địa chỉ",
        key: "address",
        dataIndex: "address",
        width: 500,
    },
    {
        label: "Mã KCBBĐ",
        key: "mediOrgCode",
        dataIndex: "mediOrgCode",
        width: 120,
    },
    {
        label: "Mã KCBBĐ đúng tuyến",
        key: "mediOrgAcceptCode",
        dataIndex: "mediOrgAcceptCode",
        width: 500,
    },
    {
        label: "Mô tả",
        key: "description",
        dataIndex: "description",
        width: 500,
    },
    {
        label: "Trạng thái",
        key: "inactive",
        dataIndex: "inactive",
        width: 200,
    },
    { label: "Xử lý", key: "action", width: 100 },
]);

const items = ref([
    { patientCode: "1", description: "hihihihihi" },
    { patientCode: "2", description: "hihihihihi" },
    { patientCode: "3", description: "hihihihihi" },
    { patientCode: "4", description: "hihihihihi" },
    { patientCode: "5", description: "hihixsdas das asd asd asdasdasd asdhihihi" },
    { patientCode: "6", patientName: 'NGUYỄN VĂN A' },
    { patientCode: "7", patientName: 'NGUYỄN VĂN B' },
    { patientCode: "8", patientName: 'NGUYỄN VĂN C' },
    { patientCode: "9", patientName: 'NGUYỄN VĂN D' },
    { patientCode: "10", patientName: 'NGUYỄN VĂN E' },
    { patientCode: "11", patientName: 'NGUYỄN VĂN F' },
])

</script>

<template>
    <div class="login">

        <d-table :items="items" :columns="columns" style="height: 300px;">
            <template #cell="{ column, row}">
                <template v-if="column.key === 'code'">
                    <span>
                        {{ row.patientCode }}
                    </span>
                </template>
                <template v-else-if="column.key === 'name'">
                    <span>
                        {{ row.patientName }}
                    </span>
                </template>
            </template>
        </d-table>

        <div class="login-container">
            <d-text as="h2" class="login-title">Đăng nhập</d-text>

            <d-text for="username" class="login-label" star>Tên đăng nhập</d-text>
            <d-tooltip :text="err_username">
                <d-input id="username" class="login-input w-100" v-model="username" :disabled="loading"
                    :invalid="err_username" @change="valid"></d-input>
            </d-tooltip>

            <d-text for="password" star>Mật khẩu</d-text>
            <d-password id="password" class="login-input" v-model:value="password" :disabled="loading"></d-password>

            <div class="login-label-faise" v-if="error">{{ error }}</div>

            <d-button type="primary" class="login-button my-3" icon="bi bi-arrow-right-circle" :loading="loading"
                @click.prevent="onLogin">Đăng nhập</d-button>

            <div class="mb-4 d-flex justify-content-center">
                <d-button type="link" class="px-0" @click.prevent="onLogin">Quên mật khẩu?</d-button>
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