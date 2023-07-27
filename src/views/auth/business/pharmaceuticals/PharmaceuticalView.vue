<template>
    <div>
        <div class="d-flex justify-content-between align-items-center">
            <h3>Danh mục thuốc</h3>

            <div>
            <a-dropdown-button @click="handleButtonClick">
                Dropdown
                <template #overlay>
                  <a-menu @click="handleMenuClick">
                    <a-menu-item key="1">
                      <UserOutlined />
                      1st menu item
                    </a-menu-item>
                    <a-menu-item key="2">
                      <UserOutlined />
                      2nd menu item
                    </a-menu-item>
                    <a-menu-item key="3">
                      <UserOutlined />
                      3rd item
                    </a-menu-item>
                  </a-menu>
                </template>
            </a-dropdown-button>

            </div>
        </div>

        <a-table
            class="ant-table-striped"
            size="middle"
            :columns="columns"
            :data-source="items"
            bordered
        >
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
                        <button
                            class="btn btn-outline-primary border-0 btn-sm me-2"
                            title="Sửa"
                            @click="handleEdit(record)"
                        >
                            <i class="bi bi-pen"></i>
                        </button>

                        <button
                            class="btn btn-outline-danger border-0 btn-sm"
                            title="Xóa"
                            @click="handleDelete(record)"
                        >
                            <i class="bi bi-x-lg"></i>
                        </button>
                    </span>
                </template>
            </template>
        </a-table>

        <teleport to="body">
            <!-- <MedicineTypeDetailView
                :visible="visible"
                :data="record"
                @toggle="handleToggle"
            /> -->
        </teleport>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Modal } from "ant-design-vue";
import { UserOutlined, DownOutlined } from '@ant-design/icons-vue';

export default defineComponent({
    name: "PharmaceuticalView",
    setup() {
        const columns = ref([
            {
                title: "Mã thuốc",
                key: "code",
                dataIndex: "code",
                width: 200,
                className: "column-header-center",
            },
            {
                title: "Tên thuốc",
                key: "name",
                dataIndex: "name",
                width: 500,
                className: "column-header-center",
            },
            {
                title: "Ngưng sử dụng",
                key: "inactive",
                dataIndex: "inactive",
                width: 200,
                className: "column-header-center",
                align: "center",
            },
            { title: "Xử lý", key: "action", width: 100, align: "center" },
        ]);

        return {
            columns,
        };
    },
    components: {
        
    },
});
</script>