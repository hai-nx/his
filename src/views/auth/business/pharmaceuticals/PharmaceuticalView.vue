<template>
    <div>
        <div class="header">
            <div class="function grid-col-1">
                <a-dropdown>
                    <template #overlay>
                        <a-menu @click="handleMenuClick">
                            <a-menu-item key="1">
                                Nhập hàng hóa từ nhà cung cấp
                            </a-menu-item>
                            <a-menu-item key="2">
                                Xuất hàng hóa trả nhà cung cấp
                            </a-menu-item>
                            <a-menu-item key="3">
                                Nhập từ kho khác
                            </a-menu-item>
                            <a-menu-item key="4">
                                Xuất trả kho khác
                            </a-menu-item>
                            <a-menu-item key="5"> Nhập bù </a-menu-item>
                            <a-menu-item key="6"> Xuất thanh lý </a-menu-item>
                            <a-menu-item key="7">
                                Xuất kiểm nghiệm
                            </a-menu-item>
                            <a-menu-item key="8">
                                Xuất hủy (Mất, hỏng, võ)</a-menu-item
                            >
                            <a-menu-item key="8">
                                Xuất hao phí phòng khám</a-menu-item
                            >
                            <a-menu-item key="8">
                                Xuất sử dụng phòng</a-menu-item
                            >
                            <a-menu-item key="8">
                                Xuất sử dụng khoa</a-menu-item
                            >
                            <a-menu-item key="8">
                                Nhập bù cơ số tủ trực</a-menu-item
                            >
                            <a-menu-item key="8">
                                Xuất bù cơ số tủ trực</a-menu-item
                            >
                            <a-menu-item key="8">
                                Bổ sung cơ số tủ trực</a-menu-item
                            >
                            <a-menu-item key="8">
                                Hoàn trả cơ số tủ trực</a-menu-item
                            >
                            <a-menu-item key="8">
                                Xuất bản cho khách hàng</a-menu-item
                            >
                            <a-menu-item key="8">
                                Nhập trả từ khách hàng</a-menu-item
                            >
                            <a-menu-item key="9"> Xuất khác </a-menu-item>
                        </a-menu>
                    </template>
                    <a-button type="primary" class="btn-list">
                        <div class="btn btn-list-dropdown">
                            <PlusOutlined />
                            <span>Tạo phiếu</span>
                        </div>
                    </a-button>
                </a-dropdown>

                <a-button type="primary"> Button </a-button>
            </div>

            <div class="search grid-col-3">
                <a-button type="primary"> Button </a-button>
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
import { PlusOutlined } from "@ant-design/icons-vue";

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
        PlusOutlined,
    },
});
</script>

<style scoped>
.header {
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    margin-bottom: 10px;
    align-items: center;
    justify-content: center;
}
.grid-col-1 {
    grid-column: 1/2;
}
.grid-col-2 {
    grid-column: 2/3;
}
.grid-col-3 {
    grid-column: 3/4;
}

.function {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.btn-list-dropdown {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 32px;
}

.btn.btn-list-dropdown {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px;
}

.btn-list {
    display: inline;
    width: 120px;
    padding: 0px;
    margin: 0px;
}
</style>