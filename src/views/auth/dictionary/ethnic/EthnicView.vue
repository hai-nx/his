<template>
    <div>
        <x-layout :breadcrumbs="breadcrumbs" title="Danh sách dân tộc">
            <template #action>
                <div>
                    <a-button class="me-1" @click="handleAdd">
                        <i class="bi bi-plus-lg me-2"></i>
                        <span>Xuất excel</span>
                    </a-button>
                    <a-button type="primary" @click="handleAdd">
                        <i class="bi bi-plus-lg me-2"></i>
                        <span>Thêm</span>
                    </a-button>
                </div>
            </template>


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
        </x-layout>


        <teleport to="body">
            <EthnicDetailView :visible="visible" :data="record" @toggle="handleToggle" />
        </teleport>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { EthnicityModel } from '@/models'
import { XItemType } from '@/components';
import { ethnicService } from '@/services';
import EthnicDetailView from './EthnicDetailView.vue'
import Msg from '@/components/message'

export default defineComponent({
    name: 'EthnicView',
    setup() {
        const breadcrumbs = ref<Array<XItemType>>([
            { key: '1', label: 'Danh mục', icon: '', path: '' },
            { key: '2', label: 'Dân tộc', icon: '', path: '' }
        ]);
        const columns = ref([
            { title: 'Mã dân tộc', key: 'ethnicCode', dataIndex: 'ethnicCode', width: 200 },
            { title: 'Tên dân tộc', key: 'ethnicName', dataIndex: 'ethnicName', width: 500 },
            { title: 'Mô tả', key: 'description', dataIndex: 'description', width: 500 },
            { title: 'Trạng thái', key: 'inactive', dataIndex: 'inactive', width: 200 },
            { title: 'Xử lý', key: 'action', width: 100 }
        ]);
        const items = ref<EthnicityModel[]>([]);
        const record = ref<EthnicityModel>();
        const visible = ref<boolean>(false)

        const totalCount = ref<number>(0);

        // lấy dữ liệu
        const handleLoad = () => {
            items.value = [];
            ethnicService.getAll()
                .then(res => {
                    items.value = res.data.result
                    totalCount.value = res.data.totalCount
                });
        }

        // thêm mới
        const handleAdd = () => {
            show(true, undefined);
        }

        // sửa
        const handleEdit = (item: EthnicityModel) => {
            show(true, item);
        }

        // xóa
        const handleDelete = (item: EthnicityModel) => {
            if (item.id !== undefined) {
                let id = item.id!;
                Msg.confirm('Bạn có thực sự muốn xóa mã bệnh <' + item.code + '> đã chọn không?')
                .then(res=> {
                    if (res === "ok") {
                        ethnicService.delete(id)
                            .catch(error => { Msg.warning(error.message); })
                            .finally(() => {
                                handleLoad();
                            })
                    }
                })
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

        const show = (v: boolean, r: EthnicityModel | undefined) => {
            record.value = r;
            visible.value = v;
        }

        return {
            breadcrumbs,
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
        EthnicDetailView
    }
});
</script>