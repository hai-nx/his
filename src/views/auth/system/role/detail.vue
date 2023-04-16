<template>
    <div class="container mt-3">
        <form @submit.prevent="onSave()">
            <div class="d-flex justify-content-between align-items-center mb-2">
                <div class="flex-shrink-0">
                    <h3>Vai trò</h3>
                </div>

                <div class="flex-shrink-0">
                    <a-button class="me-2" @click="onCancel()">Hủy</a-button>
                    <a-button type="primary" html-type="submit">Lưu</a-button>
                </div>
            </div>

            <a-card>
                <div class="row mb-1">
                    <div class="col-4 col-sm-3 text-start text-sm-end">
                        <label for="">
                            <span>Mã vai trò</span>
                            <span class="text-danger me-1">*</span>
                        </label>
                    </div>
                    <div class="col-12 col-sm-6">
                        <a-input id="code" v-model:value="item.code"></a-input>
                    </div>
                </div>

                <div class="row mb-1">
                    <div class="col-4 col-sm-3 text-start text-sm-end">
                        <label for="">
                            <span>Tên vai trò</span>
                            <span class="text-danger me-1">*</span>
                        </label>
                    </div>
                    <div class="col-12 col-sm-6">
                        <a-input id="name" v-model:value="item.name"></a-input>
                    </div>
                </div>

                <div class="row mb-1">
                    <div class="col-4 col-sm-3 text-start text-sm-end">
                        <label for="">
                            <span>Mô tả</span>
                        </label>
                    </div>
                    <div class="col-12 col-sm-6">
                        <a-input id="description" v-model:value="item.description"></a-input>
                    </div>
                </div>

                <div class="row mb-1">
                    <div class="col-12 col-sm-6 offset-sm-3">
                        <a-checkbox v-model:checked="item.inactive">Ngừng theo dõi</a-checkbox>
                    </div>
                </div>
            </a-card>
        </form>
    </div>
</template>

<script>
import roleService from '@/services/system/role-service.js'

export default {
    data() {
        return {
            item: {
                id: '',
                code: '',
                name: '',
                description: '',
                inactive: false
            }
        }
    },
    mounted() {
        this.item = roleService.getById(this.item.id);
    },
    methods: {
        onSave() {
            roleService.createOrEdit(this.item)
        },
        onCancel() {
            this.$router.push({ name: 'role' })
        },
    },
}
</script>