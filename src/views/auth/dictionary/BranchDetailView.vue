<template>
    <div class="container">
        <form>
            <a-card :title="title">
                <div class="row mb-1">
                    <div class="col-12 col-md-3 text-start text-md-end">
                        <label>
                            <span class="text-danger me-1">*</span>
                            <span>Mã chi nhánh</span>
                        </label>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <a-input v-model:value="item.code" />
                    </div>
                </div>
                <div class="row mb-1">
                    <div class="col-12 col-md-3 text-start text-md-end">
                        <label>
                            <span class="text-danger me-1">*</span>
                            <span>Tên chi nhánh</span>
                        </label>
                    </div>
                    <div class="col-12 col-md-6">
                        <a-input v-model:value="item.name" />
                    </div>
                </div>
                <div class="row mb-1">
                    <div class="col-12 col-md-3 text-start text-md-end">
                        <label>Địa chỉ</label>
                    </div>
                    <div class="col-12 col-md-6">
                        <a-input v-model:value="item.address"/>
                    </div>
                </div>
                <div class="row mb-1">
                    <div class="col-12 col-md-3 text-start text-md-end">
                        <label>Mã số thuế</label>
                    </div>
                    <div class="col-12 col-md-6">
                        <a-input v-model:value="item.taxCode"/>
                    </div>
                </div>
                <div class="row mb-1">
                    <div class="col-12 col-md-3 text-start text-md-end">
                        <label>Mô tả</label>
                    </div>
                    <div class="col-12 col-md-6">
                        <a-input v-model:value="item.description" />
                    </div>
                </div>
                <div class="row mb-1">
                    <div class="col-12 col-md-6 offset-md-3">
                        <a-checkbox v-model:checked="item.inactive">Ngừng theo dõi</a-checkbox>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12 col-md-6 offset-md-3 d-md-flex justify-content-md-end">
                        <a-button type="primary" html-type="submit" class="me-2" @click.prevent="handleSave">
                            <span>Lưu</span>
                        </a-button>
                        <a-button @click="handleCancel">
                            <span>Hủy</span>
                        </a-button>
                    </div>
                </div>
            </a-card>
        </form>
    </div>
</template>

<script lang="ts">
import BranchModel from '@/models/dictionary/BranchModel';
import { defineComponent, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { Modal } from 'ant-design-vue'
import branchService from '@/services/dictionary/branch-service'

export default defineComponent({
    name: 'BranchDetailView',
    setup() {
        const router = useRouter();
        const route = useRoute();
        const title = ref('Thêm mới chi nhánh');
        const item = ref<BranchModel>({
            id: '',
            code: '',
            name: '',
            address: '',
            taxCode: '',
            description: '',
            inactive: false
        });

        const handleSave = () => {
            branchService.createOrEdit(item.value)
                .then(res => {
                    console.log(res);
                    if (res)
                        handleCancel();
                    else {
                        Modal.confirm({
                            content: res,
                            okText: 'Đồng ý'
                        });
                    }
                })
        };

        const handleCancel = () => {
            router.push({ name: 'branch' });
        };

        const handleLoad = () => {
            // lấy dữ liệu từ route
            if (route.params.id !== '') {
                branchService.getById(route.params.id as string)
                    .then(res => {
                        title.value = 'Sửa chi nhánh';
                        item.value = res.data.result
                    });
            }
        }

        return {
            title,
            item,
            handleSave,
            handleCancel,
            handleLoad
        }
    },
    mounted() {
        this.handleLoad()
    },
});
</script>