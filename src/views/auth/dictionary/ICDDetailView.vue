<template>
    <div class="container">
        <form>
            <a-card :title="title">
                <div class="row mb-1">
                    <div class="col-12 col-md-3 text-start text-md-end">
                        <label>
                            <span class="text-danger me-1">*</span>
                            <span>Mã phòng</span>
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
                            <span>Tên khoa</span>
                        </label>
                    </div>
                    <div class="col-12 col-md-6">
                        <a-input v-model:value="item.name" />
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
import { defineComponent, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { Modal } from 'ant-design-vue'
import DepartmentModel from '@/models/dictionary/DepartmentModel';
import departmentService from '@/services/dictionary/department-service'

export default defineComponent({
    name: 'RoomDetailView',
    setup() {
        const router = useRouter();
        const route = useRoute();
        const title = ref('Thêm mới phòng');
        const item = ref<DepartmentModel>({
            id: '',
            code: '',
            name: '',
            description: '',
            inactive: false
        });

        const handleSave = () => {
            departmentService.createOrEdit(item.value)
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
            router.push({ name: 'room' });
        };

        const handleLoad = () => {
            // lấy dữ liệu từ route
            if (route.params.id !== '') {
                departmentService.getById(route.params.id as string)
                    .then(res => {
                        title.value = 'Sửa phòng';
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