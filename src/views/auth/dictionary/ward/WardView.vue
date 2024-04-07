
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Modal } from 'ant-design-vue'
import { WardModel } from '@/models'
import { wardService } from '@/services';
import WardDetailView from './WardDetailView.vue'

import { notification } from 'ant-design-vue';

export default defineComponent({
    name: 'WardView',
    setup() {
        const columns = ref([
            { title: 'Mã xã, phường', key: 'code', dataIndex: 'code', width: 200 },
            { title: 'Tên xã, phường', key: 'name', dataIndex: 'name', width: 500 },
            { title: 'Quận, huyện', key: 'districtName', dataIndex: 'districtName', width: 500 },
            { title: 'Tỉnh, thành phố', key: 'provinceName', dataIndex: 'provinceName', width: 500 },
            { title: 'Gõ tắt', key: 'searchCode', dataIndex: 'searchCode', width: 200 },
            { title: 'Mô tả', key: 'description', dataIndex: 'description', width: 500 },
            { title: 'Trạng thái', key: 'inactive', dataIndex: 'inactive', width: 200 },
            { title: 'Xử lý', key: 'action', width: 100 }
        ]);
        const items = ref<WardModel[]>([]);
        const record = ref<WardModel>();
        const visible = ref<boolean>(false)

        // lấy dữ liệu
        const handleLoad = () => {
            items.value = [];
            wardService.getAll()
                .then(res => {
                    items.value = res.data.result
                });
        }

        // thêm mới
        const handleAdd = () => {
            show(true, undefined);
        }

        // sửa
        const handleEdit = (item: WardModel) => {
            show(true, item);
        }

        // xóa
        const handleDelete = (item: WardModel) => {
            if (item.id !== undefined) {
                let id = item.id!;
                console.log(id)
                Modal.confirm({
                    content: 'Bạn có thực sự muốn xóa mã bệnh <' + item.code + '> đã chọn không?',
                    okText: 'Đồng ý',
                    cancelText: 'Bỏ qua',
                    onOk() {
                        wardService.delete(id)
                            // .then(res => {
                            //     console.log(res)
                            //     notification.success({
                            //         message: 'Thông báo',
                            //         description:
                            //             'Xóa thành công!',
                            //     });
                            // })
                            .catch(error => { Modal.error({ content: error.message, okText: 'Đồng ý' }); })
                            .finally(() => {
                                handleLoad();
                            });
                    },
                    onCancel() {
                        Modal.destroyAll();
                    }
                });
            }
        }

        // ẩn / hiện chi tiết
        const handleToggle = (result: boolean) => {
            visible.value = !visible.value;
            if (result) {
                record.value = undefined;
                handleLoad();
            }
        }

        const show = (v: boolean, r: WardModel | undefined) => {
            record.value = r;
            visible.value = v;
        }

        return {
            items,
            record,
            columns,
            visible,
            handleAdd,
            handleDelete,
            handleEdit,
            handleLoad,
            handleToggle
        }
    },
    mounted() {
        this.handleLoad();
    },
    components: {
        WardDetailView
    }
});
</script>

<template>
    <x-layout title="Danh mục xã, phường" :show-header="true">
        <template #action>
            <a-button type="primary" @click="handleAdd">
                    <i class="bi bi-plus-lg me-2"></i>
                    <span>Thêm xã, phường</span>
                </a-button>
        </template>

        <a-table class="ant-table-striped p-2" size="middle" :columns="columns" :data-source="items" bordered>
            <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'inactive'">
                    <span>
                        <a-tag v-if="record.inactive" color="error">
                            <span>Ngừng hoạt động</span>
                        </a-tag>
                        <a-tag v-else color="success">
                            <span>Hoạt động</span>
                        </a-tag>
                    </span>
                </template>
                <template v-else-if="column.key === 'action'">
                    <span>
                        <button class="btn btn-outline-primary border-0 btn-sm me-2" title="Sửa"
                            @click="handleEdit(record)">
                            <i class="bi bi-pen"></i>
                        </button>

                        <button class="btn btn-outline-danger border-0 btn-sm" title="Xóa"
                            @click="handleDelete(record)">
                            <i class="bi bi-x-lg"></i>
                        </button>
                    </span>
                </template>
            </template>
        </a-table>

        <teleport to="body">
            <WardDetailView :visible="visible" :data="record" @toggle="handleToggle" />
        </teleport>
    </x-layout>
    <!-- <div>
        <div class="d-flex justify-content-between align-items-center">
            <h3>Danh mục xã, phường</h3>

            <div>
                <a-button type="primary" @click="handleAdd">
                    <i class="bi bi-plus-lg me-2"></i>
                    <span>Thêm xã, phường</span>
                </a-button>
            </div>
        </div>

        <a-table class="ant-table-striped" size="middle" :columns="columns" :data-source="items" bordered>
            <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'inactive'">
                    <span>
                        <a-tag v-if="record.inactive" color="error">
                            <span>Ngừng hoạt động</span>
                        </a-tag>
                        <a-tag v-else color="success">
                            <span>Hoạt động</span>
                        </a-tag>
                    </span>
                </template>
                <template v-else-if="column.key === 'action'">
                    <span>
                        <button class="btn btn-outline-primary border-0 btn-sm me-2" title="Sửa"
                            @click="handleEdit(record)">
                            <i class="bi bi-pen"></i>
                        </button>

                        <button class="btn btn-outline-danger border-0 btn-sm" title="Xóa"
                            @click="handleDelete(record)">
                            <i class="bi bi-x-lg"></i>
                        </button>
                    </span>
                </template>
            </template>
        </a-table>

        <teleport to="body">
            <WardDetailView :visible="visible" :data="record" @toggle="handleToggle" />
        </teleport>
    </div> -->
</template>
