<template>
    <div>
        <div class="d-flex justify-content-between align-items-center">
            <h3>Danh mục ICD</h3>

            <div>
                <a-button type="primary" @click="handleAdd">
                    <i class="bi bi-plus-lg me-2"></i>
                    <span>Thêm mã bệnh</span>
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

                        <button class="btn btn-outline-danger border-0 btn-sm" title="Xóa" @click="handleDelete(record)">
                            <i class="bi bi-x-lg"></i>
                        </button>
                    </span>
                </template>
            </template>
        </a-table>

        <teleport to="body">
            <ICDDetailView :visible="visible" :data="record" @toggle="handleToggle" />
        </teleport>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { ICDModel } from '@/models'
import { icdService } from '@/services';
import ICDDetailView from './ICDDetailView.vue'
import Msg from '@/components/message'

export default defineComponent({
    name: 'ICDView',
    setup() {
        const columns = ref([
            { title: 'Mã bệnh', key: 'code', dataIndex: 'code', width: 200 },
            { title: 'Tên bệnh', key: 'name', dataIndex: 'name', width: 500 },
            { title: 'Tên tiếng anh', key: 'nameEnglish', dataIndex: 'nameEnglish', width: 500 },
            { title: 'Mã chương', key: 'chapterCode', dataIndex: 'chapterCode', width: 200 },
            { title: 'Mã nhóm chính', key: 'mainGroupCode', dataIndex: 'mainGroupCode', width: 200 },
            { title: 'Mã loại', key: 'typeCode', dataIndex: 'typeCode', width: 200 },
            { title: 'Mô tả', key: 'description', dataIndex: 'description', width: 500 },
            { title: 'Trạng thái', key: 'inactive', dataIndex: 'inactive', width: 200 },
            { title: 'Xử lý', key: 'action', width: 100 }
        ]);
        const items = ref<ICDModel[]>([]);
        const record = ref<ICDModel>();
        const visible = ref<boolean>(false)

        // lấy dữ liệu
        const handleLoad = () => {
            items.value = [];
            icdService.getAll()
                .then(res => {
                    items.value = res.data.result
                });
        }

        // thêm mới
        const handleAdd = () => {
            show(true, undefined);
        }

        // sửa
        const handleEdit = (item: ICDModel) => {
            show(true, item);
        }

        // xóa
        const handleDelete = (item: ICDModel) => {
            if (item.id !== undefined) {
                let id = item.id!;
                Msg.confirm('Bạn có thực sự muốn xóa mã bệnh <' + item.code + '> đã chọn không?')
                .then(res => {
                    if (res === "ok") {
                        icdService.delete(id)
                            .catch(error => { Msg.warning(error.message); })
                            .finally(() => {
                                handleLoad();
                            });
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

        const show = (v: boolean, r: ICDModel | undefined) => {
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
        ICDDetailView
    }
});
</script>